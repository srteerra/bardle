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

export default function Home() {
  const { classicSelect, setClassicSelect } = useGameSelectStore();
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const data = [
    { game: 'Game', href: "/daily" }
  ];

  return (
    <main className="w-full grid grid-cols-12 lg:grid-cols-8 2xl:grid-cols-6">
      <div className={"w-full col-start-2 col-span-10"}>
        <div className={"w-60 mx-auto my-12"}>
          <Image src={Logo} alt={"Bardle Logo"}/>
        </div>

        <button
          onClick={() => handleClick()}
          className="bg-secondary-6 dark:bg-accent-1 text-white dark:text-accent-7 p-2 rounded-xl hover:cursor-pointer"
        >
          {click ? (
            <RiMoonFill className="text-xl"/>
          ) : (
            <RiSunLine className="text-xl"/>
          )}
        </button>

        <div className={"w-full grid gap-3 grid-cols-1 grid-rows-6"}>
          <GameModeCard
            title={"Classic"}
            href={
              classicSelect == GameModeEnum.DAILY ? "/daily" : "/rush/classic"
            }
            selectedMode={classicSelect}
            applyClass={
              classicSelect == GameModeEnum.DAILY
                ? "classicBack"
                : "classicBackRush"
            }
          >
            <GameModeSwitch
              currentSelection={classicSelect}
              setSelection={setClassicSelect}
              data={[
                { mode: GameModeEnum.DAILY, href: "/daily" },
                { mode: GameModeEnum.RUSH, href: "/rush/classic" }
              ]}
            />
          </GameModeCard>
        </div>
      </div>
    </main>
  );
}
