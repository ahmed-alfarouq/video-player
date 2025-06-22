import React from "react";

import { LuRectangleHorizontal } from "react-icons/lu";

import type { TheaterModeButtonProps } from "./VideoPlayer.types";

const TheaterModeButton = React.memo(
  ({ toggle }: TheaterModeButtonProps) => {
    return (
      <button
        type="button"
        className="text-white cursor-pointer"
        onClick={toggle}
      >
        <LuRectangleHorizontal size={16} />
      </button>
    );
  }
);

export default TheaterModeButton;
