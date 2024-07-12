import { IGameCard } from "@/interfaces/IGameCard";
import { useGameSelectStore } from "@/store/gameMode.store";

export const useGames = () => {
  const { classicSelect, setClassicSelect, abilitySelect, setAbilitySelect } =
    useGameSelectStore();

  const games: IGameCard[] = [
    {
      title: "Classic",
      href: "/classic",
      selectedMode: classicSelect,
      setSelection: setClassicSelect,
      applyClass: "classicBack",
    },
    {
      title: "Ability",
      href: "/ability",
      selectedMode: abilitySelect,
      setSelection: setAbilitySelect,
      applyClass: "abilityBack",
    },
  ];

  return {
    games,
  };
};
