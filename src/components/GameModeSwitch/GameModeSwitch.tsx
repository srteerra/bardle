"use client";
import React from "react";
import { Tooltip } from "react-tooltip";
import { GameModeEnum } from "@/core/enums/GameModeEnum";

interface GameData {
  setSelection: (mode: GameModeEnum) => void;
  currentSelection: GameModeEnum;
}

export const GameModeSwitch = ({
  setSelection,
  currentSelection,
}: GameData) => {
  const data = [{ mode: GameModeEnum.DAILY }, { mode: GameModeEnum.RUSH }];

  return (
    <span className="absolute z-20 text-sm top-5 right-5 flex gap-3">
      {data.map((item: any) => (
        <span
          onClick={() => setSelection(item.mode)}
          data-tooltip-id={`${item.mode}-option`}
          data-tooltip-content={
            item.mode == GameModeEnum.DAILY ? "Daily Mode" : "Rush Mode"
          }
          key={`${item.mode}-option`}
          className={`${item.mode == currentSelection ? "bg-primary w-11" : "bg-gray-300 opacity-70 w-7"} h-7 rounded-full transition-all ease-in-out duration-200`}
        >
          <Tooltip className="hidden md:block" id={`${item.mode}-option`} />
        </span>
      ))}
    </span>
  );
};
