import { useState } from "react";
import VideoPlayer from "../VideoPlayer";

import type { VideoPlayerPreviewProps } from "../types";

const VideoPlayerPreview = ({
  forwardSeconds,
  backwardSeconds,
  controlsAutoHideDelay,
  isAutoPlay,
  isMuted,
  isTheaterMode,
}: VideoPlayerPreviewProps) => {
  const [theaterActive, setTheaterActive] = useState(false);

  const handleTheaterToggle = () => {
    setTheaterActive((prev) => !prev);
  };

  return (
    <main className="flex-1 p-6 bg-white dark:bg-[#28264d]">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Live Preview
      </h2>

      <div className="size-full mx-auto flex justify-between gap-2">
        <div className="w-full max-h-[80svh]">
          <VideoPlayer
            src="https://demo-video.pages.dev/want-to-work.mp4"
            poster=""
            tracks={[
              {
                src: "/captions/ar.vtt",
                srclang: "ar",
                label: "Arabic",
              },
              {
                src: "/captions/en.vtt",
                srclang: "en",
                label: "English",
              },
            ]}
            forwardSeconds={forwardSeconds}
            backwardSeconds={backwardSeconds}
            controlsAutoHideDelay={controlsAutoHideDelay}
            isAutoPlay={isAutoPlay}
            isMuted={isMuted}
            isSticky={false}
            onTheaterModeToggle={
              isTheaterMode ? handleTheaterToggle : undefined
            }
          />
          <div className="flex justify-between mt-3">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Forward: {forwardSeconds}s</p>
              <p>Backward: {backwardSeconds}s</p>
              <p>Auto-hide Delay: {controlsAutoHideDelay}ms</p>
            </div>
            {isTheaterMode && theaterActive && (
              <div className="max-h-72 min-w-1/2 flex flex-col justify-between bg-[#22203d] text-white p-4 rounded shadow animate-pulse space-y-3">
                <div className="h-4 bg-[#3c3a63] rounded w-3/4" />
                <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
                <div className="h-4 bg-[#3c3a63] rounded w-full" />
                <div className="h-4 bg-[#3c3a63] rounded w-3/4" />
                <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
                <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
                <div className="h-4 bg-[#3c3a63] rounded w-full" />
              </div>
            )}
          </div>
        </div>
        {isTheaterMode && !theaterActive && (
          <div className="max-h-72 min-w-1/2 flex flex-col justify-between bg-[#22203d] text-white p-4 rounded shadow animate-pulse space-y-3">
            <div className="h-4 bg-[#3c3a63] rounded w-3/4" />
            <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
            <div className="h-4 bg-[#3c3a63] rounded w-full" />
            <div className="h-4 bg-[#3c3a63] rounded w-3/4" />
            <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
            <div className="h-4 bg-[#3c3a63] rounded w-2/3" />
            <div className="h-4 bg-[#3c3a63] rounded w-full" />
          </div>
        )}
      </div>
    </main>
  );
};

export default VideoPlayerPreview;
