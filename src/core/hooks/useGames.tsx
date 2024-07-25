import React from "react";
import { IGameCard } from "@/interfaces/IGameCard";
import { useGameSelectStore } from "@/store/gameMode.store";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GiVikingHead } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { HiMiniPuzzlePiece } from "react-icons/hi2";
import { RiDoubleQuotesR } from "react-icons/ri";

export const useGames = () => {
  const {
    classicSelect,
    setClassicSelect,
    abilitySelect,
    setAbilitySelect,
    emojiSelect,
    setEmojiSelect,
    quoteSelect,
    setQuoteSelect,
    splashSelect,
    setSplashSelect,
    playerSelect,
    setPlayerSelect,
  } = useGameSelectStore();

  const games: IGameCard[] = [
    {
      title: "Classic",
      href: "/",
      selectedMode: classicSelect,
      setSelection: setClassicSelect,
      applyClass: "classicBack",
      icon: <GiVikingHead />,
    },
    {
      title: "Ability",
      href: "/ability",
      selectedMode: abilitySelect,
      setSelection: setAbilitySelect,
      applyClass: "abilityBack",
      icon: <FaFire />,
    },
    {
      title: "Emoji",
      href: "/emoji",
      selectedMode: emojiSelect,
      setSelection: setEmojiSelect,
      applyClass: "emojiBack",
      icon: <MdOutlineEmojiEmotions />,
    },
    {
      title: "Quote",
      href: "/quote",
      selectedMode: quoteSelect,
      setSelection: setQuoteSelect,
      applyClass: "quoteBack",
      icon: <RiDoubleQuotesR />,
    },
    {
      title: "Splash",
      href: "/splash",
      selectedMode: splashSelect,
      setSelection: setSplashSelect,
      applyClass: "splashBack",
      icon: <HiMiniPuzzlePiece />,
    },
    {
      title: "Players",
      href: "/players",
      selectedMode: playerSelect,
      setSelection: setPlayerSelect,
      applyClass: "playersBack",
      icon: <HiMiniPuzzlePiece />,
    },
  ];

  return {
    games,
  };
};
