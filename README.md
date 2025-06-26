# 🎥 React Custom Video Player

A **fully custom**, mobile-first **React video player** built with **Tailwind CSS**, optimized for clean UI, performance, and full developer control. Includes a custom seek bar, full-screen/theater modes, keyboard shortcuts, and sticky mobile behavior—without third-party branding.

---

## 🚀 Features

* ✅ Fully custom Play/Pause, Seek, Volume, Fullscreen, Theater Mode
* 🎮 Keyboard shortcuts (space, arrows, m, f, t) & mouse interaction
* 🕹️ Auto-hide controls on inactivity
* 📱 Sticky-on-scroll mode (mobile)
* 🎞 Poster image support
* 🔊 Volume control with visual feedback
* ⏩ Forward/backward seeking with custom seconds
* 🧠 Built-in loader during buffering
* ⚙️ Autoplay + mute support for modern browsers
* 🧩 Easily customizable via props
* 🌙 Tailwind CSS-powered UI — theme it your way

---

## 📦 Installation

After purchasing from **CodeCanyon**:

1. Unzip the downloaded package
2. Copy the contents of `/dist` into your project
3. Import and use it like any local component:

```tsx
import VideoPlayer from "./path-to-dist";
```

> 📌 You must have **React** and **Tailwind CSS** configured in your project.

---

## 🧩 Usage

```tsx
import React from "react";
// if you use compressed files
import VideoPlayer from "./dist";
// if you use components
import VideoPlayer from "./src/VideoPlayer";

function App() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <VideoPlayer
        src="/video.mp4"
        poster="/poster.jpg"
        isSticky
        isAutoPlay
        isMuted
        controlsAutoHideDelay={3000}
        forwardSeconds={10}
        backwardSeconds={10}
        onVideoEnd={() => console.log("Video ended")}
        onTheaterModeToggle={() => console.log("Theater toggled")}
      />
    </div>
  );
}

export default App;
```

---

## ✨ Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>src</code></td>
      <td>string</td>
      <td>–</td>
      <td>Video URL (required)</td>
    </tr>
    <tr>
      <td><code>poster</code></td>
      <td>string</td>
      <td>""</td>
      <td>Optional poster image</td>
    </tr>
    <tr>
      <td><code>isSticky</code></td>
      <td>boolean</td>
      <td>false</td>
      <td>Sticky player on scroll (mobile only)</td>
    </tr>
    <tr>
      <td><code>isAutoPlay</code></td>
      <td>boolean</td>
      <td>false</td>
      <td>
        Autoplay the video on load.<br/>
        <strong>Note:</strong> Most browsers require <code>isMuted</code> to be <code>true</code> for autoplay to work.
      </td>
    </tr>
    <tr>
      <td><code>isMuted</code></td>
      <td>boolean</td>
      <td>false</td>
      <td>Start video muted (required for autoplay)</td>
    </tr>
    <tr>
      <td><code>controlsAutoHideDelay</code></td>
      <td>number</td>
      <td>2500</td>
      <td>Delay (in ms) before auto-hiding controls</td>
    </tr>
    <tr>
      <td><code>forwardSeconds</code></td>
      <td>number</td>
      <td>10</td>
      <td>Seconds to skip forward</td>
    </tr>
    <tr>
      <td><code>backwardSeconds</code></td>
      <td>number</td>
      <td>10</td>
      <td>Seconds to skip backward</td>
    </tr>
    <tr>
      <td><code>onVideoEnd</code></td>
      <td>() => void</td>
      <td>–</td>
      <td>Callback when the video finishes playing</td>
    </tr>
    <tr>
      <td><code>onTheaterModeToggle</code></td>
      <td>() => void</td>
      <td>–</td>
      <td>
        Optional callback for toggling theater mode. If omitted, the button is still shown.
      </td>
    </tr>
  </tbody>
</table>

---

## 📂 File Structure

```bash
📦 af-video-player
├── src/               # Full uncompressed source code
│   ├── components/
│   ├── hooks/
│   └── VideoPlayer.tsx
├── dist/              # Production builds
│   ├── index.js       # CommonJS
│   ├── index.mjs      # ES Module
│   ├── index.d.ts     # TypeScript types
│   └── *.map          # Source maps
├── README.md
├── license.txt
└── changelog.txt
```

---

## 📝 License

This package is for **commercial use only**, licensed via your CodeCanyon purchase. Redistribution or resale is not permitted outside your direct client or project use.

---

## 🙌 Credits

Built by [Ahmed Al-Farouq](https://codecanyon.net/user/ahmed_al_farouq) with ❤️
Powered by [React](https://reactjs.org), [Tailwind CSS](https://tailwindcss.com), and a passion for clean UX.