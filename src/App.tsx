import { useEffect, useState } from "react";
import SidebarControls from "./components/SidebarControls";
import VideoPlayerPreview from "./components/VideoPlayerPreview";

import type { VideoSettings, VideoSettingsKey } from "./types";

const App = () => {
  const [settings, setSettings] = useState<VideoSettings>({
    forwardSeconds: 10,
    backwardSeconds: 10,
    controlsAutoHideDelay: 2500,
    isAutoPlay: false,
    isMuted: false,
    isTheaterMode: false,
  });

  const handleChange = <K extends VideoSettingsKey>(
    key: K,
    value: VideoSettings[K]
  ) => {
    const newSettings =
      key === "isAutoPlay"
        ? { ...settings, [key]: value, isMuted: !!value }
        : { ...settings, [key]: value };

    setSettings(newSettings);

    saveSettings(newSettings);
  };

  const saveSettings = (newSettings: VideoSettings) => {
    const stringfiedSettings = JSON.stringify(newSettings);

    localStorage.setItem("af-video-settings", stringfiedSettings);
  };

  useEffect(() => {
    const store = localStorage.getItem("af-video-settings");
    if (!store) return;

    const parsedSettings: VideoSettings = JSON.parse(store);
    setSettings(parsedSettings);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-900 overflow-hidden">
      <SidebarControls {...settings} onChange={handleChange} />
      <VideoPlayerPreview {...settings} />
    </div>
  );
};

export default App;
