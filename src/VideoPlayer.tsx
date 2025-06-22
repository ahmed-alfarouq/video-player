import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@sglara/cn";

import Controls from "./components/Controls";
import ErrorMessage from "./components/ErrorMessage";
import PlayPauseOverlay from "./components/PlayPauseOverlay";
import PlayButtonOverlay from "./components/PlayButtonOverlay";
import BufferingIndicator from "./components/BufferingIndicator";

import { useMobileContext } from "./context/MobileContext";

import type { VideoPlayerProps } from "./components/VideoPlayer.types";

const VideoPlayer = ({
  src,
  poster,
  isSticky,
  className,
  onVideoEnd,
  onTheaterModeToggle,
}: VideoPlayerProps) => {
  const { isMobile } = useMobileContext();

  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStickyActive, setIsStickyActive] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  }, []);

  const handleCanPlay = useCallback(() => setCanPlay(true), []);

  const handlePause = useCallback(() => setIsPaused(true), []);

  const handlePlay = useCallback(() => {
    setHasPlayed(true);
    setIsPaused(false);
  }, []);

  const handleWaiting = useCallback(() => setIsBuffering(true), []);

  const handleSeeking = useCallback(() => {
    if (!isPaused) setIsBuffering(true);
  }, [isPaused]);

  const handleSeeked = useCallback(() => setIsBuffering(false), []);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  }, []);

  const handleError = useCallback(
    () => setErrorMessage("Failed to load the video. Please try again later."),
    []
  );

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const isAtEnd =
      currentTime === duration && currentTime !== 0 && duration !== 0;

    if (video.paused) {
      if (isAtEnd) {
        video.currentTime = 0;
        setCurrentTime(0);
      }
      video.play();
    } else {
      video.pause();
    }
  }, [currentTime, duration]);

  const toggleFullScreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      await container.requestFullscreen();
      if (
        screen.orientation &&
        "lock" in screen.orientation &&
        typeof screen.orientation.lock === "function"
      ) {
        try {
          await screen.orientation.lock("landscape");
        } catch (err) {
          console.warn(err);
        }
      }
    } else {
      document.exitFullscreen();
    }
  }, []);

  const toggleTheaterMode = useCallback(() => {
    onTheaterModeToggle?.();
  }, [onTheaterModeToggle]);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const offsetTop = container.getBoundingClientRect().top;
    const scrollY = window.scrollY;

    if (offsetTop <= 0 && !isSticky) {
      setIsStickyActive(true);
    } else if (scrollY < 50 && isSticky) {
      setIsStickyActive(false);
    }
  }, [isSticky]);

  useEffect(() => {
    if (!isSticky || !isMobile) return;

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isSticky, isMobile]);

  return (
    <div
      className={cn(
        "relative w-full max-h-[85vh] rounded-md overflow-hidden transition-all duration-300",
        isStickyActive && "fixed top-0 left-0 right-0 rounded-none z-[60]",
        className
      )}
      ref={containerRef}
    >
      {!hasPlayed && canPlay && <PlayButtonOverlay play={togglePlay} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {(isBuffering || !canPlay) && <BufferingIndicator />}

      <PlayPauseOverlay
        togglePlay={togglePlay}
        toggleFullScreen={toggleFullScreen}
        isPaused={isPaused}
      />

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto block"
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={handleCanPlay}
        onPlay={handlePlay}
        onPause={handlePause}
        onWaiting={handleWaiting}
        onSeeking={handleSeeking}
        onSeeked={handleSeeked}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
        onEnded={onVideoEnd}
      >
        Your browser does not support the video tag.
      </video>

      <Controls
        videoRef={videoRef}
        hasPlayed={hasPlayed}
        isPaused={isPaused}
        currentTime={currentTime}
        duration={duration}
        togglePlay={togglePlay}
        toggleFullScreen={toggleFullScreen}
        toggleTheaterMode={toggleTheaterMode}
      />
    </div>
  );
};

export default VideoPlayer;
