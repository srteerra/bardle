"use client";
import React, { useState } from "react";
import { GameModeCard } from "@/components/GameModeCard/GameModeCard";
import { useGameSelectStore } from "@/store/gameMode.store";
import { GameModeSwitch } from "@/components/GameModeSwitch/GameModeSwitch";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import { IGameCard } from "@/interfaces/IGameCard";
import { MainHeader } from "@/components/Header";

export default function Home() {
  const { classicSelect, setClassicSelect, abilitySelect, setAbilitySelect } =
    useGameSelectStore();

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
        <MainHeader />

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
