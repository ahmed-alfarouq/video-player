import useMobile from "../hooks/useMobile";

import type { SidebarControlsProps } from "../types";

const SidebarControls = ({
  forwardSeconds,
  backwardSeconds,
  controlsAutoHideDelay,
  isAutoPlay,
  isMuted,
  isTheaterMode,
  onChange,
}: SidebarControlsProps) => {
  const { isMobile } = useMobile();

  return (
    <aside className="w-full md:w-72 p-4 md:p-6 border-b md:border-b-0 md:border-r border-gray-300 bg-[#f9f9fc] dark:bg-[#3c3a63] text-gray-900 dark:text-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Video Player Settings</h2>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">
          Forward Seconds
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 dark:border-gray-500 rounded px-3 py-2 bg-white dark:bg-[#514e8c]"
          value={forwardSeconds}
          onChange={(e) => onChange("forwardSeconds", parseInt(e.target.value))}
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">
          Backward Seconds
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 dark:border-gray-500 rounded px-3 py-2 bg-white dark:bg-[#514e8c]"
          value={backwardSeconds}
          onChange={(e) =>
            onChange("backwardSeconds", parseInt(e.target.value))
          }
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">
          Auto Hide Controls Delay (ms)
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 dark:border-gray-500 rounded px-3 py-2 bg-white dark:bg-[#514e8c]"
          value={controlsAutoHideDelay}
          onChange={(e) =>
            onChange("controlsAutoHideDelay", parseInt(e.target.value))
          }
        />
      </div>

      <div className="flex items-center gap-3 mb-3 ">
        <input
          type="checkbox"
          id="autoplay"
          checked={isAutoPlay}
          onChange={(e) => onChange("isAutoPlay", e.target.checked)}
          className="cursor-pointer"
        />
        <label className="text-sm cursor-pointer" htmlFor="autoplay">
          Autoplay
        </label>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <input
          type="checkbox"
          id="isMuted"
          checked={isMuted}
          onChange={(e) => onChange("isMuted", e.target.checked)}
          className="cursor-pointer"
        />
        <label className="text-sm cursor-pointer" htmlFor="isMuted">
          Muted
        </label>
      </div>

      {!isMobile && (
        <div className="flex items-center gap-3 mb-3">
          <input
            type="checkbox"
            id="isTheaterMode"
            checked={isTheaterMode}
            onChange={(e) => onChange("isTheaterMode", e.target.checked)}
            className="cursor-pointer"
          />
          <label className="text-sm cursor-pointer" htmlFor="isTheaterMode">
            Theater Mode
          </label>
        </div>
      )}
    </aside>
  );
};

export default SidebarControls;
