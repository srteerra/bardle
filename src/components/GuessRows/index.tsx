"use client";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { IGuessRow } from "@/interfaces/IGuessRow";
import _ from "lodash";
import moment from "moment";

interface IRow {
  selection: any;
  headers: any;
}

const Row = ({ selection, headers }: IRow) => {
  const daily = {
    displayName: "Zoe",
    shortName: "Zoe",
    gender: 2,
    partype: 3,
    position: ["Middle"],
    rangeType: ["Ranged"],
    regionFrom: ["Targon"],
    releaseDate: "06-14-2017",
    role: ["Mage"],
    specie: ["Aspect"],
    titleChamp: "The Aspect of Twilight",
    avatarURL: "https://cdn.communitydragon.org/11.16.1/champion/Zoe/square",
  };

  const correct = {
    backgroundColor: "#6df59e",
  };
  const incorrect = {
    backgroundColor: "#f17b7b",
  };
  const partial = {
    backgroundColor: "#FFD28F",
  };
  const moreThan = {
    content: "↑",
  };
  const lessThan = {
    content: "↓",
  };

  const validate = (selected: any, key: any) => {
    if (Array.isArray(selected[key])) {
      return _.intersection(selected[key], daily[key]).length ==
        selected[key].length
        ? correct
        : _.intersection(selected[key], daily[key]).length
          ? partial
          : incorrect;
    } else if (key === "releaseDate") {
      const selectedDate = moment(selected[key], "DD-MM-YYYY");
      const dailyDate = moment(daily[key], "DD-MM-YYYY");
      return selectedDate.isSame(dailyDate)
        ? correct
        : selectedDate.isBefore(dailyDate)
          ? { ...incorrect, ...moreThan }
          : { ...incorrect, ...lessThan };
    } else {
      return selected[key] == daily[key]
        ? correct
        : selected[key]
          ? incorrect
          : partial;
    }
  };

  return (
    <>
      <div className="mx-auto my-1 flex flex-row gap-4 md:justify-center w-100">
        <Fade direction="up" duration={500} cascade triggerOnce>
          {headers.map((header, index) => (
            <>
              {index === 0 && selection.avatarURL ? (
                <Image
                  src={selection.avatarURL}
                  alt={selection.displayName}
                  width={100}
                  height={100}
                  className={
                    "w-[70px] md:w-[80px] 2xl:w-[100px] min-w-[70px] md:min-w-[80px] 2xl:min-w-[100px] h-[70px] md:h-[80px] 2xl:h-[100px]"
                  }
                />
              ) : (
                <div
                  key={index}
                  className={`${selection[header.key] != daily[header.key] && "animate-shake-h"}
              text-xs md:text-sm 2xl:text-base
              border-secondary-7 dark:border-secondary-7 border-t-[3px] md:border-t-[4px] 2xl:border-t-[5px] border-r-[3px] md:border-r-[4px] 2xl:border-r-[5px] border-b-[7px] md:border-b-[9px] 2xl:border-b-[13px] border-l-[7px] md:border-l-[9px] 2xl:border-l-[13px]
              grid place-items-center font-extrabold w-[70px] md:w-[80px] 2xl:w-[100px] min-w-[70px] md:min-w-[80px] 2xl:min-w-[100px] h-[70px] md:h-[80px] 2xl:h-[100px]`}
                  style={validate(selection, header.key)}
                >
                  {index === 0 && selection.avatarURL ? (
                    <Image
                      src={selection.avatarURL}
                      alt={selection.displayName}
                      width={50}
                      height={50}
                    />
                  ) : (
                    <p className="text-secondary-7 dark:text-secondary-7 text-center">
                      {Array.isArray(selection[header.key]) ? (
                        selection[header.key].map(
                          (item: string, idx: number) => (
                            <span
                              key={idx}
                              className="text-secondary-7 dark:text-secondary-7 text-center flex flex-col"
                            >
                              {item}
                            </span>
                          )
                        )
                      ) : (
                        <span className="text-secondary-7 dark:text-secondary-7 text-center">
                          {header.isDate ? (
                            <small>
                              {moment(selection[header.key]).format(
                                "DD/MM/YYYY"
                              )}
                            </small>
                          ) : (
                            selection[header.key]
                          )}
                        </span>
                      )}
                    </p>
                  )}
                </div>
              )}
            </>
          ))}
        </Fade>
      </div>
    </>
  );
};

export const GuessRows = ({ selectedChamps, headers }: IGuessRow) => {
  return (
    <div className="w-[95%] mx-auto overflow-x-scroll overflow-y-hidden md:overflow-x-hidden flex flex-col-reverse">
      {selectedChamps.length ? (
        selectedChamps.map((item, index) => (
          <Row key={index} selection={item} headers={headers} />
        ))
      ) : (
        <div className="flex justify-center">
          <div className="bg-accent-1 text-dark py-5 px-24 text-sm">
            <p>Make your move.</p>
          </div>
        </div>
      )}

      <div className="mx-auto flex overflow-x-hidden gap-4 md:justify-center w-100">
        {headers.map((header) => (
          <div
            className="w-[70px] md:w-[80px] 2xl:w-[100px] text-center text-sm 2xl:text-base min-w-[70px] mx:min-w-[80px] 2xl:min-w-[100px] h-[50px] md:h-[55px] 2xl:h-[60px]"
            key={header.key}
          >
            <p className={"text-dark"}>{header.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
