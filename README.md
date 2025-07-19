![MIT License](https://img.shields.io/badge/license-MIT-green)
![Chrome Extension](https://img.shields.io/badge/chrome-extension-blue)

# 🎬 Video Redirect Extension

A Chrome/Brave extension that automatically redirects specified websites to a randomly selected video: `sigma.mp4` or `bald.mp4`.
<br>

## 🖼️ Demo

![Demo](demo.gif)

## ✨ Features

- 🔀 **Random Redirects**: Redirects users to either `sigma.mp4` or `bald.mp4` randomly.
- 🌐 **Customizable Domain List**: Easily configure which websites trigger the redirect.
- ⚙️ **Options Page**: Manage redirect domains from a clean and simple settings UI.
- 💾 **Local Video Files**: No network requests — both videos are bundled in the extension.
- 🧠 **Lightweight & Fast**: Zero bloat, minimal permissions, runs quietly in the background.

---

## 🚀 Installation

1. **Download or Clone** this repository:
   ```bash
   git clone https://github.com/yourusername/video-redirect-extension.git
   ```

2. **Open Chrome or Brave** and navigate to:
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (top right toggle).

4. Click **Load Unpacked** and select the project folder.

---

## 🛠️ Usage

1. Visit the **Options Page** to configure which websites should trigger the redirect:
   - `chrome://extensions/` → find the extension → click `Details` → **Options**

2. Add any domain (e.g., `example.com`) to the list.

3. The next time you visit a listed site, the extension will automatically redirect you to a random video.

---

## 🧪 Example Use Cases

- Prank friends or coworkers by redirecting them from specific sites.
- Create reminders to avoid distracting websites.
- Meme-based motivation for productivity.

---

## 🧩 Folder Structure

```plaintext
video-redirect-extension/
├── icons/
   icon.png
├── videos/
   bald.mp4
   sigma.mp4
├── background.js
├── demo.gif
├── manifest.json
├── options.html
├── options.js
├── video.html
├── video.js
```

---

## 🧯 Troubleshooting

- 🔄 **Videos not playing?**  
  Ensure both `sigma.mp4` and `bald.mp4` are in the root of your extension directory and listed under `web_accessible_resources` in `manifest.json`.

- ⚙️ **Can't find the options page?**  
  Go to `chrome://extensions`, click the three dots on your extension, and choose **Options**.

- ❌ **Popup not showing?**  
  This extension no longer uses a popup. All configuration is handled via the Options page.

---

## 🧾 License

This project is licensed under the **MIT License** — use it freely and modify as needed.

---

## 🧠 Credits & Inspiration

i needed a way to not be distracted so i made this :3

made by hubbayeet