export type VideoSettingsKey =
  | "controlsAutoHideDelay"
  | "forwardSeconds"
  | "backwardSeconds"
  | "isAutoPlay"
  | "isMuted"
  | "isTheaterMode";

export interface VideoSettings {
  forwardSeconds: number;
  backwardSeconds: number;
  isAutoPlay: boolean;
  isMuted: boolean;
  controlsAutoHideDelay: number;
  isTheaterMode: boolean;
}

export interface VideoPlayerPreviewProps {
  forwardSeconds: number;
  backwardSeconds: number;
  controlsAutoHideDelay: number;
  isAutoPlay: boolean;
  isMuted: boolean;
  isTheaterMode: boolean;
}

export interface SidebarControlsProps {
  forwardSeconds: number;
  backwardSeconds: number;
  controlsAutoHideDelay: number;
  isAutoPlay: boolean;
  isMuted: boolean;
  isTheaterMode: boolean;
  onChange: <K extends VideoSettingsKey>(
    key: K,
    value: VideoSettings[K]
  ) => void;
}
