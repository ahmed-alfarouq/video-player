import { useEffect, useState } from "react";

import MobileContext from "./context/MobileContext";

import VideoPlayer from "./VideoPlayer";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      <VideoPlayer src="https://demo-video.pages.dev/want-to-work.mp4" />
    </MobileContext.Provider>
  );
};

export default App;
