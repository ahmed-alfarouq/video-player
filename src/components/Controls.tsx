import { useCallback, useEffect, useState } from "react";
import { cn } from "@sglara/cn";

import SeekBar from "./SeekBar";
import ToggleButton from "./ToggleButton";
import ForwardButton from "./ForwardButton";
import VolumeControl from "./VolumeControl";
import BackwardButton from "./BackwardButton";
import DurationDisplay from "./DurationDisplay";
import FullScreenToggle from "./FullScreenToggle";
import TheaterModeButton from "./TheaterModeButton";

import { useMobileContext } from "../context/MobileContext";

import type { ControlsProps } from "./VideoPlayer.types";

const Controls = ({
  videoRef,
  hasPlayed,
  isPaused,
  isVisible,
  duration,
  currentTime,
  forwardSeconds,
  backwardSeconds,
  togglePlay,
  toggleFullScreen,
  toggleTheaterMode,
}: ControlsProps) => {
  const { isMobile } = useMobileContext();
  const [volume, setVolume] = useState(100);

  const handleToggleMute = useCallback(() => {
    const video = videoRef.current;

    if (video) {
      if (video.muted) {
        video.muted = false;
      }
      if (video.volume > 0) {
        video.volume = 0;
        setVolume(0);
        return;
      }

      video.volume = 1;
      setVolume(100);
    }
  }, [videoRef]);

  const handleVolumeChange = useCallback(
    (percent: number) => {
      const video = videoRef.current;
      if (video) {
        if (video.muted) {
          video.muted = false;
        }
        if (Number.isFinite(percent)) {
          video.volume = percent / 100;
          setVolume(percent);
        }
      }
    },
    [videoRef]
  );

  const handleSeek = useCallback(
    (percent: number) => {
      const video = videoRef.current;
      if (video) {
        const newTime = (percent / 100) * duration;
        if (Number.isFinite(newTime)) {
          video.currentTime = newTime;
        }
      }
    },
    [videoRef, duration]
  );

  const handleSeekBackward = useCallback(
    (s: number) => {
      if (videoRef.current) videoRef.current.currentTime -= s;
    },
    [videoRef]
  );

  const handleSeekForward = useCallback(
    (s: number) => {
      if (videoRef.current) videoRef.current.currentTime += s;
    },
    [videoRef]
  );

  const handleIncreaseVolume = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.volume < 1) {
        if (video.muted) {
          video.muted = false;
        }
        video.volume = Math.min(video.volume + 0.2, 1);
        setVolume(video.volume * 100);
      }
    }
  }, [videoRef]);

  const handleDecreaseVolume = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      if (video.volume > 0) {
        if (video.muted) {
          video.muted = false;
        }
        video.volume = Math.max(video.volume - 0.2, 0);
        setVolume(video.volume * 100);
      }
    }
  }, [videoRef]);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      setVolume(video.volume * 100);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!video) return;

      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === "input" || activeTag === "textarea") return;

      switch (e.key.toLowerCase()) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          handleToggleMute();
          break;
        case "f":
          toggleFullScreen();
          break;
        case "t":
          toggleTheaterMode();
          break;
        case "arrowright":
          video.currentTime += 5;
          break;
        case "arrowleft":
          video.currentTime -= 5;
          break;
        case "arrowup":
          e.preventDefault();
          handleIncreaseVolume();
          break;
        case "arrowdown":
          e.preventDefault();
          handleDecreaseVolume();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    handleDecreaseVolume,
    handleIncreaseVolume,
    handleToggleMute,
    hasPlayed,
    toggleFullScreen,
    toggleTheaterMode,
    togglePlay,
    videoRef,
  ]);

  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 right-0 z-[60] bg-black/70 flex justify-between items-center gap-3 px-4 py-2 transition-all duration-300",
        !hasPlayed && "hidden",
        isVisible ? "opacity-100 h-11" : "opacity-0 h-0 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-3">
        <BackwardButton
          seconds={backwardSeconds}
          onSeekBackward={handleSeekBackward}
          className="p-2"
          ariaLabel="Go 5 seconds back"
        />

        <ToggleButton isPaused={isPaused} toggle={togglePlay} />
        <ForwardButton
          seconds={forwardSeconds}
          onSeekForward={handleSeekForward}
          className="p-2"
          ariaLabel="Skip forward 15 seconds"
        />
        <VolumeControl
          value={volume}
          onChange={handleVolumeChange}
          toggleMute={handleToggleMute}
        />
      </div>
      <SeekBar
        duration={duration}
        currentTime={currentTime}
        onSeek={handleSeek}
      />
      <div className="flex items-center gap-5">
        <DurationDisplay duration={duration} currentTime={currentTime} />
        {!isMobile && toggleTheaterMode && (
          <TheaterModeButton toggle={toggleTheaterMode} />
        )}
        <FullScreenToggle toggle={toggleFullScreen} />
      </div>
    </div>
  );
};

export default Controls;
