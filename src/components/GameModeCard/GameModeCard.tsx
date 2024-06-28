import { TiFlash } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import React from "react";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  selectedMode: GameModeEnum;
  children: React.ReactNode;
  applyClass: string;
}

export const GameModeCard = ({
  selectedMode,
  children,
  applyClass,
  title,
  href,
}: Props) => {
  return (
    <div
      className={`h-full w-full relative menu-box
        ${applyClass}
        rounded-xl hover:scale-102 transition-all ease-out
        col-start-1 md:col-start-1 lg:col-start-1 xl:col-start-1 2xl:col-start-1
        md:col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-2
        md:row-span-2 lg:row-start-1 xl:row-span-2 2xl:row-span-2
        lg:row-span-2 xl:row-start-1 2xl:row-start-1
        text-lg 2xl:text-4xl font-bold text-white dark:text-white dark:hover:text-gray-300 hover:cursor-pointer
        border-b-[12px] border-r-[12px] border-l-[6px] border-t-[6px]
        bg-white dark:bg-gray-700 dark:hover:border-5 border-amber-800 hover:border-dark dark:border-secondary-6 dark:hover:border-gray-800`}
      style={{ boxShadow: "inset 0px -140px 95px -46px black" }}
    >
      {children}
      <Link
        href={href}
        className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 p-5 lg:p-10 flex flex-col justify-center 2xl:justify-end lg:justify-end items"
      >
        <span className="flex align-middle gap-2">
          <TiFlash className={"hidden md:block"} size={35} />
          <span className="text-lg">{title}</span>
          {selectedMode != GameModeEnum.DAILY ? (
            <span
              data-tooltip-id={"rush-option"}
              data-tooltip-content={"Rush mode enabled."}
              className="text-xs border-2 border-primary text-primary px-3 my-1 ml-2 flex items-center rounded-full"
            >
              <Tooltip id={"rush-option"} />
              Rush
            </span>
          ) : (
            <></>
          )}
        </span>
      </Link>
    </div>
  );
};
