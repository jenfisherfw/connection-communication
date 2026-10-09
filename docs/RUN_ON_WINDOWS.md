# Run Rapport on your phone from a Windows computer

About 20 minutes the first time, 1 minute after that.

## One time setup

### 1. Install Node.js
1. Go to https://nodejs.org and download the **LTS** version (the button on the left).
2. Run the installer and accept every default. If it offers to install "Tools for Native Modules," you can leave that unchecked.

### 2. Install GitHub Desktop
1. Go to https://desktop.github.com, download, and install.
2. Sign in with the GitHub account that owns `jenfisherfw/connection-communication`.

### 3. Download the app's code
1. In GitHub Desktop: **File > Clone repository**, pick `jenfisherfw/connection-communication`, and click **Clone**. Note the folder it saves to (usually `Documents\GitHub\connection-communication`).
2. At the top, click **Current branch** and choose `claude/leadership-communication-app-lmoyz4`. (Once the pull request is merged, use `main` instead.)

### 4. Install the app's building blocks
1. In GitHub Desktop: **Repository > Open in Command Prompt**. A black window opens, already in the right folder.
2. Type this and press Enter. It takes a few minutes the first time:
   ```
   npm install
   ```
   Yellow "warn" lines are normal. Only red "ERR!" lines are a problem.

### 5. Install Expo Go on your phone
Get **Expo Go** from the App Store (iPhone) or Google Play (Android).

## Every time you want to run it

1. In GitHub Desktop, click **Fetch origin**, then **Pull origin** if it appears, to get the latest version.
2. **Repository > Open in Command Prompt**, then run:
   ```
   npx expo start --clear
   ```
   A QR code appears in the window.
3. Make sure your phone and computer are on the **same Wi-Fi**.
4. Scan the QR code:
   * **iPhone:** open the regular Camera app and point it at the code, then tap the banner.
   * **Android:** open Expo Go and tap **Scan QR code**.
5. The app builds and opens on your phone. The first load takes about a minute.

To stop it, click in the black window and press **Ctrl + C**.

## If something goes wrong

* **"running scripts is disabled on this system":** you're in PowerShell instead of Command Prompt. Either open Command Prompt from GitHub Desktop as above, or type `npx.cmd expo start --clear` instead.
* **Windows Firewall pops up:** click **Allow access** and tick **Private networks**.
* **Phone can't connect or keeps loading:** stop with Ctrl + C and run `npx expo start --clear --tunnel`. If it asks to install `@expo/ngrok`, type `y` and press Enter.
* **The app still says "Demo mode":** stop it and start again with `--clear`, which makes it pick up the Supabase settings.
* **Red error screen on the phone:** take a screenshot and send it over.
