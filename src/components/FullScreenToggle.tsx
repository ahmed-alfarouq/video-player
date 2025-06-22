import React from "react";

import { RiFullscreenExitLine } from "react-icons/ri";

import type { FullScreenButtonProps } from "./VideoPlayer.types";

const FullScreenToggleButton = React.memo(({ toggle }: FullScreenButtonProps) => {
  return (
    <button
      type="button"
      className="text-white cursor-pointer"
      onClick={toggle}
    >
      <RiFullscreenExitLine size={16} />
    </button>
  );
});

export default FullScreenToggleButton;
