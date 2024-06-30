import { create } from "zustand";
import { GameModeEnum } from "@/core/enums/GameModeEnum";

interface GameSelectType {
  classicSelect: GameModeEnum;
  quoteSelect: GameModeEnum;
  abilitySelect: GameModeEnum;
  emojiSelect: GameModeEnum;
  playerSelect: GameModeEnum;
  splashSelect: GameModeEnum;
  setClassicSelect: (mode: GameModeEnum) => void;
  setQuoteSelect: (mode: GameModeEnum) => void;
  setAbilitySelect: (mode: GameModeEnum) => void;
  setEmojiSelect: (mode: GameModeEnum) => void;
  setPlayerSelect: (mode: GameModeEnum) => void;
  setSplashSelect: (mode: GameModeEnum) => void;
}

export const useGameSelectStore = create<GameSelectType>((set) => ({
  classicSelect: GameModeEnum.DAILY,
  quoteSelect: GameModeEnum.DAILY,
  abilitySelect: GameModeEnum.DAILY,
  emojiSelect: GameModeEnum.DAILY,
  playerSelect: GameModeEnum.DAILY,
  splashSelect: GameModeEnum.DAILY,

  setClassicSelect: (mode: GameModeEnum) =>
    set(() => ({ classicSelect: mode })),
  setQuoteSelect: (mode: GameModeEnum) => set(() => ({ quoteSelect: mode })),
  setAbilitySelect: (mode: GameModeEnum) =>
    set(() => ({ abilitySelect: mode })),
  setEmojiSelect: (mode: GameModeEnum) => set(() => ({ emojiSelect: mode })),
  setPlayerSelect: (mode: GameModeEnum) => set(() => ({ playerSelect: mode })),
  setSplashSelect: (mode: GameModeEnum) => set(() => ({ splashSelect: mode })),
}));
