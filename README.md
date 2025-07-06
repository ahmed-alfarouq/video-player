### 🎥 React Custom Video Player

A fully custom, mobile-friendly **React video player component** built from scratch using **Tailwind CSS**—designed with performance, clean UX, and full developer control in mind.
This project was self-initiated to deepen my front-end engineering skills by re-creating a core feature often handled by libraries or native elements.

---

#### 🔧 Highlights

- 🎬 Custom-built controls: Play/Pause, Seek Bar, Volume, Fullscreen, Theater Mode
- ⏩ Custom skip duration (forward/backward)
- 🎮 Keyboard support: `Space`, `←`, `→`, `M`, `F`, `T`
- 🧼 Auto-hide UI after inactivity
- 📱 Sticky scroll mode for mobile
- 🎞 Poster image support
- 🔊 Visual volume indicator
- 🧩 Easily customizable via props
- 📑 Multi-language captions via custom captions implementation

---

#### 🧪 Live Demo

🔗 [Video Player Preview](https://af-video-player.vercel.app/)

---

#### 🧪 Tech Stack

- **React** with Hooks
- **Tailwind CSS**
- Full prop-driven architecture for reusability and DX

---

#### 💻 Code Usage

```tsx
import VideoPlayer from "./VideoPlayer";

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
/>;
```

---

#### 🧩 Supported Props

| Prop                    | Type         | Default | Description                             |
| ----------------------- | ------------ | ------- | --------------------------------------- |
| `src`                   | `string`     | —       | Video URL (required)                    |
| `poster`                | `string`     | `""`    | Optional poster image                   |
| `isSticky`              | `boolean`    | `false` | Sticky player on scroll (mobile only)   |
| `isAutoPlay`            | `boolean`    | `false` | Autoplay the video (requires `isMuted`) |
| `isMuted`               | `boolean`    | `false` | Start video muted                       |
| `controlsAutoHideDelay` | `number`     | `2500`  | Delay (in ms) before controls auto-hide |
| `forwardSeconds`        | `number`     | `10`    | Seconds to skip forward                 |
| `backwardSeconds`       | `number`     | `10`    | Seconds to skip backward                |
| `onVideoEnd`            | `() => void` | —       | Callback when video ends                |
| `onTheaterModeToggle`   | `() => void` | —       | Callback when toggling theater mode     |
| `tracks`                | `Track[]`    | —       | Optional subtitle/caption tracks        |

`Track` structure:

```ts
interface Track {
  src: string;
  srclang: string;
  label: string;
  default?: boolean;
}
```

---

#### 🙌 Author Note

This player was built as part of my **self-taught journey** to push the boundaries of component design and real-world UI behavior using only React and Tailwind.
My goal was to create something minimal, responsive, accessible, and fully customizable—without relying on third-party video libraries.

---

### 👨‍💻 Author

**🧔 Ahmed Al-Farouq**

- GitHub: [@Ahmed-Alfarouq](https://github.com/Ahmed-Alfarouq)
- LinkedIn: [Ahmed Al-Farouq](https://www.linkedin.com/in/ahmed-alfarouq)

---

### 🤝 Contributing

Contributions, ideas, and feature requests are always welcome!
Feel free to open an issue or submit a pull request.

---

### ⭐ Show Your Support

If you found this project helpful or inspiring, consider giving it a ⭐ on GitHub — it helps a lot!

---

### 🚀 Let's Build Together

Interested in building clean and performant user experiences?
Let’s collaborate and create something amazing — especially in eCommerce, UI/UX, or front-end engineering!
