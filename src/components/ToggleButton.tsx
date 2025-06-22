import React from "react";

import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";

import type { ToggleButtonProps } from "./VideoPlayer.types";

const ToggleButton = React.memo(
  ({ isPaused, toggle }: ToggleButtonProps) => {
    return (
      <button onClick={toggle} className="text-white p-0 cursor-pointer">
        {!isPaused ? (
          <IoMdPause className="size-4" />
        ) : (
          <FaPlay className="size-4" />
        )}
      </button>
    );
  }
);

export default ToggleButton;
