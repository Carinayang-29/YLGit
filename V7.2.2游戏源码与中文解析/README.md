# 玩趣社 V7.2.2 游戏源码与中文解析

本目录基于当前 V7.2.2 离线游戏源码制作，按七个玩法、首页及共享功能分文档讲解；不包含在线社区、官网宣传模块或用户的本地游戏数据。

## 怎么看

1. 先看 [首页与主导航](./01-首页与主导航.md)，了解游戏入口。
2. 按下表打开各玩法和功能文档；每份文档都有源码摘录、中文重点分析、标识符释义及依赖。
3. [完整源码](./完整源码/) 保留网页和 Android 外壳源码。代码摘录不是互相独立可运行的程序，需共享同一份状态、页面和样式。

## 文档清单

| 文档 | 主要内容 |
|---|---|
| [01-首页与主导航](./01-首页与主导航.md) | 首页、屏幕切换和游戏路由 |
| [02-真心话和大冒险](./02-真心话和大冒险.md) | 题库、题袋与抽卡 |
| [03-命运转盘](./03-命运转盘.md) | 转盘绘制、旋转与揭晓 |
| [04-幸运指尖](./04-幸运指尖.md) | 同一屏幕的多点触控抽选 |
| [05-摇骰子](./05-摇骰子.md) | 感应、骰盅、亮盅与手动备用 |
| [06-戳气球](./06-戳气球.md) | 预先选人、挑战与炸弹 |
| [07-你画我猜与画板](./07-你画我猜与画板.md) | 题库、私看、画板与自选计时 |
| [08-限时团队任务](./08-限时团队任务.md) | 任务抽取、倒数与结果 |
| [09-玩家与题库设置](./09-玩家与题库设置.md) | 添加删除玩家与自定义题目 |
| [10-本地存档与历史](./10-本地存档与历史.md) | 状态加载、保存和内部记录 |
| [11-成就墙](./11-成就墙.md) | 规则、兼容进度和像素图鉴 |
| [12-派对表情互动](./12-派对表情互动.md) | 表情按钮与漂浮反馈 |
| [13-声音振动与设备反馈](./13-声音振动与设备反馈.md) | 场景音乐、音效与状态提示 |
| [14-PWA离线安装](./14-PWA离线安装.md) | 清单、离线缓存与更新检测 |
| [15-完整首页与页面骨架](./15-完整首页与页面骨架.md) | 完整 HTML 文件 |
| [16-完整视觉样式](./16-完整视觉样式.md) | 完整 CSS 文件 |
| [17-安卓外壳与打包](./17-安卓外壳与打包.md) | Android WebView 工程核心 |

## 完整源码与运行

- `完整源码/index.html`：游戏页面；`app.js`：玩法与共享逻辑；`styles.css`：样式。
- `manifest.webmanifest`、`service-worker.js`、`icons/` 和 `play.html`：网页安装与离线所需资源。
- `android-apk/`：Android 外壳与构建配置；构建前需自行准备 Android SDK、JDK 与 Gradle，不含构建缓存、签名密钥或 APK。
- 网页运行：用终端进入 `完整源码`，运行 `python -m http.server 8000`，然后访问 `http://localhost:8000/`。首次离线使用须先在线或在 localhost 打开并等待缓存完成。
- 建议保持目录结构；直接双击 HTML 不适合验证 Service Worker 或离线安装。

## 范围和注意事项

- 七个当前入口：命运转盘、幸运指尖、摇骰子、戳气球、真心话和大冒险、你画我猜、限时团队任务，以及成就墙。
- 原始 `app.js` 和样式保留了谁是卧底、节奏记忆、派对远征等旧代码以忠实呈现版本源码；当前首页和渲染路由没有这些玩法入口，也没有联网社区功能。
- 指尖触点数量和骰子摇动感应依赖实际设备和系统权限；网页音乐通常需要用户先点击页面。
- 本版本将数据保存在当前设备，未提供备份导入/导出；Android 与浏览器数据互不自动同步。
- 源代码主要使用 JavaScript、HTML 和 CSS；Android 外壳使用 Java。

## 源文件 SHA-256

以下哈希用于核对快照与当前 V7.2.2 源码，文件名相对于 `完整源码`。

- `index.html`：`a5e5e35158adf6789920d56f773d6d824eeafa991546532c1e0fc7cbea03d077`
- `app.js`：`49b3cb66f9788aa8a13682e8348778e7c1def77432b9b8a56b3634e5f959a7c1`
- `styles.css`：`610d8081523d24480f7131a25f43e6f7567ed7df9e6fca85829734c2736d204d`
- `service-worker.js`：`dd6295f073b4ed7b8e4fe495d97735bc7b578298e3e43a00c33b8f88fbbb96f5`
- `manifest.webmanifest`：`089fdc23b6de3698e056e815ea858a9b1ae67a5a22ec0b2294c8533c3b0a363e`
- `icons/app-icon-192.png`：`ead98f84e2a4358510e9bb71fad12e35938ad2eda0364886e59d5b4878a23a32`
- `icons/app-icon-512.png`：`fc697fee4278cfa24fc128fd027b6b025a801de788b3d07f03b99ebe81266064`
- `icons/apple-touch-icon.png`：`7826b8de0c5cf75392d4b2e6d88a3ed30df1d8c29615daa423eb9f11fa459284`
- `android-apk/build.gradle`：`aee38e4e03ba9efcf779195e74b8ced3fe1448eeb5687b651d18f4909d5a46f0`
- `android-apk/settings.gradle`：`1268ea1e9abd093b371545719b892b10931511e3c746917a7cdff2d60ab37471`
- `android-apk/gradle.properties`：`d25ac91df7b73adc1eb3ce098083efef81ed1e509609690bba070c2f6e6e4738`
- `android-apk/app/build.gradle`：`07faa851c7b2d3a4c3106cdc688993a8b866d358181ce2f68d4b358612a2c6db`
- `android-apk/app/src/main/AndroidManifest.xml`：`4526aa9eaa4d404825dc8680a974920a3598b458b2a20e17462ece44bbad199f`
- `android-apk/app/src/main/java/com/game/nightparty/MainActivity.java`：`4225104bf2a7b530e632b100605da5b63bf66884a1499fdf20e5dafa55295777`
- `android-apk/app/src/main/res/values/styles.xml`：`51f7892fc45c4ddfe6324bece4f81826c1cf36d23dd3fd0102677b47602c8423`
- `android-apk/app/src/main/res/values/strings.xml`：`515e75496e3b917ced4234795c82522797546428d3f702c9f0e0657215264fe1`
- `android-apk/app/src/main/res/drawable/app_icon.png`：`fc697fee4278cfa24fc128fd027b6b025a801de788b3d07f03b99ebe81266064`
- `play.html`：`a5e5e35158adf6789920d56f773d6d824eeafa991546532c1e0fc7cbea03d077`
