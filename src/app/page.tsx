"use client";
import React, { useState } from "react";
import { GameModeCard } from "@/components/GameModeCard/GameModeCard";
import { useGameSelectStore } from "@/store/gameMode.store";
import { GameModeSwitch } from "@/components/GameModeSwitch/GameModeSwitch";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import Logo from "../../public/branding/logos/logo-dark.png";
import Image from "next/image";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { IGameCard } from "@/interfaces/IGameCard";
import { TbWorld } from "react-icons/tb";

export default function Home() {
  const { classicSelect, setClassicSelect, abilitySelect, setAbilitySelect } =
    useGameSelectStore();
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const data: IGameCard[] = [
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

  return (
    <main className="w-full grid grid-cols-12 lg:grid-cols-8 2xl:grid-cols-6">
      <div className={"w-full col-start-2 col-span-10"}>
        <div className={"w-60 mx-auto mt-12 mb-6"}>
          <Image src={Logo} alt={"Bardle Logo"} />
        </div>

        <div className={"flex gap-3 justify-center mt-6 mb-12"}>
          <button
            onClick={() => handleClick()}
            className="bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7 p-2 rounded-xl hover:cursor-pointer"
          >
            {click ? (
              <RiMoonFill className="text-xl" />
            ) : (
              <RiSunLine className="text-xl" />
            )}
          </button>

          <button
            onClick={() => handleClick()}
            className="bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7 p-2 rounded-xl hover:cursor-pointer"
          >
            <TbWorld className="text-xl" />
          </button>
        </div>

        <div className={"w-full grid gap-3 grid-cols-1 grid-rows-6"}>
          {data.map((item: IGameCard, index: number) => (
            <GameModeCard
              key={index}
              title={item.title}
              href={item.href}
              selectedMode={item.selectedMode}
              applyClass={
                item.selectedMode == GameModeEnum.DAILY
                  ? item.applyClass
                  : item.applyClass + "Rush"
              }
            >
              <GameModeSwitch
                currentSelection={item.selectedMode}
                setSelection={item.setSelection}
                data={[
                  { mode: GameModeEnum.DAILY },
                  { mode: GameModeEnum.RUSH },
                ]}
              />
            </GameModeCard>
          ))}
        </div>
      </div>
    </main>
  );
}
