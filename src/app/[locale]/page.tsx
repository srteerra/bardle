"use client";
import React from "react";
import { GameModeCard } from "@/components/GameModeCard/GameModeCard";
import { GameModeSwitch } from "@/components/GameModeSwitch/GameModeSwitch";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import { IGameCard } from "@/interfaces/IGameCard";
import { MainHeader } from "@/components/Header";
import { useGames } from "@/core/hooks/useGames";

interface Props {
  params: { locale: string };
}

export default function Home({ params: { locale } }: Props) {
  const { games } = useGames();
  console.log(locale);

  return (
    <main className="w-full h-full grid grid-cols-12 lg:grid-cols-6">
      <div className={"col-start-2 col-span-10 lg:col-start-2 lg:col-span-4"}>
        <MainHeader />

        <div
          className={
            "w-full xsm:w-[70%] md:w-full mx-auto grid gap-3 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-5 xl:grid-cols-4 xl:grid-rows-4"
          }
        >
          {games.map((item: IGameCard, index: number) => (
            <GameModeCard
              key={index}
              title={item.title}
              href={item.href}
              icon={item.icon}
              sequence={index}
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
              />
            </GameModeCard>
          ))}
        </div>
      </div>
    </main>
  );
}
