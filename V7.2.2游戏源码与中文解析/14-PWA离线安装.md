# PWA离线安装

> 基准：玩趣社 V7.2.2；摘录来自本文件夹的 `完整源码`。

**模块范围：**清单、离线缓存与更新检测。

## 核心代码分析（简体中文）

1. manifest 声明应用名称、图标、启动路径和独立窗口；iOS 可通过 Safari 分享菜单添加到主屏幕。
2. Service Worker 安装时缓存页面、脚本、样式与图标，之后访问可在缓存就绪的情况下离线使用。
3. 修改缓存版本时，需要同步 HTML 的资源参数、Service Worker 缓存清单和 app.js 的期望版本。
4. Service Worker 需要 HTTPS 或 localhost；浏览器可能清除缓存，添加到主屏幕不是 IPA 或 App Store 安装。

## 核心标识符简中释义

| 原标识符 | 中文含义 |
|---|---|
| `CACHE_NAME` | 离线缓存版本 |
| `APP_SHELL` | 预缓存文件 |
| `expectedCacheName` | 页面期待的缓存版本 |
| `manifest.webmanifest` | 网页应用清单 |

## 模块依赖与协作边界

- HTTPS 或 localhost
- 浏览器 Service Worker 与 Cache Storage
- icons 图标文件

## V7.2.2 源码摘录

以下代码保留原始英文标识符和实现；行号对应本目录 `完整源码` 中的文件。这些摘录共享状态和页面环境，不能单独运行。

### `manifest.webmanifest`（第 1–34 行）

```json
{
  "id": "./",
  "name": "玩趣社 PlayFun Club",
  "short_name": "玩趣社",
  "description": "和朋友一起玩的离线派对小游戏。",
  "lang": "zh-CN",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#0d0e0e",
  "theme_color": "#0d0e0e",
  "categories": ["games", "entertainment"],
  "icons": [
    {
      "src": "./icons/app-icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./icons/app-icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "./icons/app-icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ]
}
```

### `service-worker.js`（第 1–71 行）

```js
const CACHE_NAME = "game-night-pwa-v31";
const APP_SHELL = [
  "./",
  "./index.html",
  "./play.html",
  "./styles.css?v=24",
  "./app.js?v=32",
  "./manifest.webmanifest",
  "./icons/app-icon-192.png",
  "./icons/app-icon-512.png",
  "./icons/apple-touch-icon.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith("game-night-pwa-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "GET_CACHE_NAME" || !event.ports?.[0]) return;
  event.ports[0].postMessage({ cacheName: CACHE_NAME });
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) ||
          (await caches.match("./index.html")) ||
          Response.error()),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
```

### `app.js`（第 2123–2221 行）

```js
const offlineIndicator = $("#offline-indicator");
let offlineReady = false;

function updateNetworkIndicator() {
  const online = navigator.onLine;
  offlineIndicator.dataset.state = online ? "online" : "offline";
  offlineIndicator.textContent = online
    ? (offlineReady ? "离线已就绪" : "离线版 PWA")
    : (offlineReady ? "已离线 · 可继续玩" : "离线缓存准备中");
}

window.addEventListener("online", updateNetworkIndicator);
window.addEventListener("offline", updateNetworkIndicator);
updateNetworkIndicator();

if ("serviceWorker" in navigator) {
  const expectedCacheName = "game-night-pwa-v31";

  function getWorkerCacheName(worker) {
    return new Promise((resolve) => {
      const channel = new MessageChannel();
      let completed = false;
      const finish = (cacheName = "") => {
        if (completed) return;
        completed = true;
        clearTimeout(timeout);
        channel.port1.close();
        resolve(cacheName);
      };
      const timeout = setTimeout(() => finish(), 3000);
      channel.port1.onmessage = (event) => {
        const cacheName = typeof event.data?.cacheName === "string" ? event.data.cacheName : "";
        finish(cacheName);
      };
      try {
        worker.postMessage({ type: "GET_CACHE_NAME" }, [channel.port2]);
      } catch {
        finish();
      }
    });
  }

  function waitForCurrentWorker(registration) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Service Worker 更新超时，请刷新页面重试。")), 15000);
      let settled = false;
      const finish = (error) => {
        if (settled) return;
        settled = true;
        clearTimeout(timeout);
        registration.removeEventListener("updatefound", inspect);
        if (error) reject(error);
        else resolve();
      };
      const inspectWorker = async (worker) => {
        if (!worker || settled) return;
        if (worker.state === "redundant") {
          if (registration.active &&
              await getWorkerCacheName(registration.active) === expectedCacheName) {
            finish();
          } else {
            finish(new Error("新版离线缓存未能启用。"));
          }
          return;
        }
        if (worker.state === "activated") {
          if (await getWorkerCacheName(worker) === expectedCacheName) finish();
          return;
        }
        worker.addEventListener("statechange", () => inspectWorker(worker), { once: true });
      };
      const inspect = () => {
        inspectWorker(registration.installing || registration.waiting || registration.active);
      };
      registration.addEventListener("updatefound", inspect);
      inspect();
      registration.update().catch(finish);
    });
  }

  navigator.serviceWorker.register("./service-worker.js", { updateViaCache: "none" })
    .then(async (registration) => {
      const activeCacheName = registration.active
        ? await getWorkerCacheName(registration.active)
        : "";
      if (activeCacheName !== expectedCacheName) await waitForCurrentWorker(registration);
      return navigator.serviceWorker.ready;
    })
    .then(() => {
      offlineReady = true;
      updateNetworkIndicator();
      offlineIndicator.textContent = "离线可玩";
    })
    .catch((error) => {
      showToast(`离线缓存未能启用：${error.message}`);
    });
} else {
  offlineIndicator.textContent = "本机游玩";
}
```
