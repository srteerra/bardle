import React from "react";
import { GameModeEnum } from "@/core/enums/GameModeEnum";

export interface IGameCard {
  title: string;
  href: string;
  selectedMode: GameModeEnum;
  setSelection?: any;
  applyClass: string;
  icon?: React.ReactNode;
}
