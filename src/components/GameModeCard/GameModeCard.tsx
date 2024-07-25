import { Tooltip } from "react-tooltip";
import React from "react";
import { GameModeEnum } from "@/core/enums/GameModeEnum";
import Link from "next/link";
import "./styles.css";

interface Props {
  title: string;
  href: string;
  sequence?: number;
  selectedMode: GameModeEnum;
  children: React.ReactNode;
  applyClass: string;
  icon: React.ReactNode;
}

export const GameModeCard = ({
  selectedMode,
  children,
  applyClass,
  title,
  href,
  sequence,
  icon,
}: Props) => {
  return (
    <div
      className={`h-full w-full relative menu-box
        ${applyClass}
        rounded-xl hover:scale-102 transition-all ease-out
        ${sequence == 0 && "md:col-start-1 md:row-start-1 col-span-1 row-span-1 md:row-span-2 xl:col-span-2"}
        ${sequence == 1 && "md:col-start-2 md:row-start-1 col-span-1 row-span-1 md:row-span-2 xl:col-span-1"}
        ${sequence == 2 && "xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-span-2"}
        ${sequence == 3 && "xl:col-span-2 xl:col-start-1 xl:row-start-3"}
        ${sequence == 4 && "md:col-start-1 md:row-start-4 col-span-1 row-span-1 md:col-span-1 md:row-span-2 xl:col-span-2 xl:row-span-1"}
        ${sequence == 5 && "md:row-span-2 xl:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-3"}
        text-lg 2xl:text-4xl font-bold text-white dark:text-white dark:hover:text-gray-300 hover:cursor-pointer
        border-b-[12px] border-r-[12px] border-l-[6px] border-t-[6px]
        bg-white dark:bg-gray-700 dark:hover:border-5 border-secondary hover:border-dark dark:border-secondary-6 dark:hover:border-gray-800`}
      style={{ boxShadow: "inset 0px -140px 95px -46px black" }}
    >
      {children}
      <Link
        href={
          selectedMode == GameModeEnum.DAILY ? `/daily${href}` : `/rush${href}`
        }
        className="rounded-xl h-full w-full hover:backdrop-brightness-150 transition-all ease-in duration-150 py-5 px-4 xl:px-5 xl:pb-6 xl:pt-16 flex flex-col justify-center md:justify-end"
      >
        <span className="flex align-middle gap-1 p-0 m-0">
          <div className={"text-2xl p-0 m-0"}>{icon}</div>
          <span className="text-lg xl:text-xl p-0 m-0">{title}</span>
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
