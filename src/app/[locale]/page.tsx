"use client";
import React, { useState } from "react";
import { GameModeCard } from "@/components/GameModeCard/GameModeCard";
import { GameModeSwitch } from "@/components/GameModeSwitch/GameModeSwitch";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import { IGameCard } from "@/interfaces/IGameCard";
import { MainHeader } from "@/components/Header";
import { useGames } from "@/core/hooks/useGames";

export default function Home() {
  const { games } = useGames();

  return (
    <main className="w-full h-full grid grid-cols-12 lg:grid-cols-8 2xl:grid-cols-6">
      <div className={"w-full col-start-2 col-span-10"}>
        <MainHeader />

        <div className={'w-full mx-auto grid gap-3 grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-4 xsm:w-[70%] md:w-full'}>
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
