package com.game.nightparty;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.ViewGroup;
import android.webkit.SafeBrowsingResponse;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.TextView;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.Locale;

public final class MainActivity extends Activity {
    private static final String GAME_URL = "https://appassets.androidplatform.net/game/index.html";
    private static final String GAME_HOST = "appassets.androidplatform.net";

    private WebView webView;
    private TextView errorView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.rgb(13, 14, 14));
        getWindow().setNavigationBarColor(Color.rgb(13, 14, 14));

        FrameLayout root = new FrameLayout(this);
        root.setBackgroundColor(Color.rgb(13, 14, 14));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(13, 14, 14));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(true);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportMultipleWindows(false);
        settings.setJavaScriptCanOpenWindowsAutomatically(false);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }

        errorView = new TextView(this);
        errorView.setText("本机游戏资源暂时无法加载，请点此重试。");
        errorView.setTextColor(Color.WHITE);
        errorView.setTextSize(16);
        errorView.setGravity(android.view.Gravity.CENTER);
        errorView.setPadding(32, 32, 32, 32);
        errorView.setBackgroundColor(Color.rgb(13, 14, 14));
        errorView.setVisibility(TextView.GONE);
        errorView.setOnClickListener(view -> webView.reload());

        root.addView(webView, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));
        root.addView(errorView, new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT));

        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public android.webkit.WebResourceResponse shouldInterceptRequest(
                    WebView view,
                    WebResourceRequest request) {
                Uri uri = request.getUrl();
                if (!GAME_HOST.equalsIgnoreCase(uri.getHost())) return null;
                return serveBundledAsset(uri);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return routeUrl(request.getUrl().toString());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return routeUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                errorView.setVisibility(TextView.GONE);
            }

            @Override
            public void onReceivedError(
                    WebView view,
                    WebResourceRequest request,
                    WebResourceError error) {
                if (request.isForMainFrame()) {
                    errorView.setVisibility(TextView.VISIBLE);
                }
            }

            @Override
            public void onReceivedSslError(
                    WebView view,
                    SslErrorHandler handler,
                    android.net.http.SslError error) {
                handler.cancel();
                errorView.setVisibility(TextView.VISIBLE);
            }

            @Override
            public void onSafeBrowsingHit(
                    WebView view,
                    WebResourceRequest request,
                    int threatType,
                    SafeBrowsingResponse callback) {
                callback.backToSafety(true);
            }
        });

        setContentView(root);
        if (savedInstanceState == null) {
            webView.loadUrl(GAME_URL);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    private boolean routeUrl(String value) {
        Uri uri = Uri.parse(value);
        return !"https".equalsIgnoreCase(uri.getScheme()) ||
                !GAME_HOST.equalsIgnoreCase(uri.getHost());
    }

    private android.webkit.WebResourceResponse serveBundledAsset(Uri uri) {
        if (!"https".equalsIgnoreCase(uri.getScheme())) return notFound();

        String path = uri.getPath();
        if (path == null || !path.startsWith("/game/")) return notFound();

        String[] segments = path.substring("/game/".length()).split("/");
        StringBuilder assetPath = new StringBuilder("game");
        for (String segment : segments) {
            if (segment.isEmpty() || ".".equals(segment) || "..".equals(segment)) return notFound();
            assetPath.append('/').append(segment);
        }

        try {
            InputStream stream = getAssets().open(assetPath.toString());
            String mimeType = getMimeType(assetPath.toString());
            String encoding = mimeType.startsWith("text/") ||
                    "application/javascript".equals(mimeType) ||
                    "application/json".equals(mimeType) ||
                    "application/manifest+json".equals(mimeType)
                    ? "UTF-8" : null;
            return new android.webkit.WebResourceResponse(mimeType, encoding, stream);
        } catch (IOException error) {
            return notFound();
        }
    }

    private String getMimeType(String path) {
        int dot = path.lastIndexOf('.');
        String extension = dot < 0 ? "" : path.substring(dot + 1).toLowerCase(Locale.ROOT);
        switch (extension) {
            case "html":
                return "text/html";
            case "css":
                return "text/css";
            case "js":
                return "application/javascript";
            case "json":
                return "application/json";
            case "webmanifest":
                return "application/manifest+json";
            case "png":
                return "image/png";
            default:
                return "application/octet-stream";
        }
    }

    private android.webkit.WebResourceResponse notFound() {
        return new android.webkit.WebResourceResponse(
                "text/plain",
                "UTF-8",
                404,
                "Not Found",
                Collections.emptyMap(),
                new ByteArrayInputStream(new byte[0]));
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.stopLoading();
            webView.setWebChromeClient(null);
            webView.setWebViewClient(null);
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
