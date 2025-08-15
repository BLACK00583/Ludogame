# Ludogame

Ludo Android Project (WebView wrapper)
=====================================

What this is:
- A minimal Android Studio project that wraps a small HTML/JS "Mini Ludo" demo inside a WebView.
- The demo is intentionally simple (single token that moves on a 16-step path) to keep the project lightweight.

How to build an installable APK:
1. Download and unzip this project.
2. Open the folder in Android Studio (File → Open... → select the project root where settings.gradle is).
3. Let Android Studio sync and download Gradle toolchain.
4. Build → Build Bundle(s) / APK(s) → Build APK(s).
5. After build, locate the APK (Android Studio shows a link). Install on your device (you may need to enable installing from unknown sources).

Notes & next steps:
- This project is a starting point. If you want a full-featured Ludo game (multiplayer, AI, nicer graphics), I can expand the HTML/JS or convert to a native Kotlin implementation.
- I cannot produce a signed production APK here — you must build locally in Android Studio to generate an installable APK.
