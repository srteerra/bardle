'use client'
import React from "react"
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image";
import { IGuessRow } from "@/interfaces/IGuessRow";

interface IRow {
  selection: any;
  headers: any;
}

const Row = ({ selection, headers }: IRow) => {
  const champs = [
    { name: "Aatrox", role: 'Mage'},
    { name: "Ahri", role: "Mage" },
    { name: "Akali", role: "Assassin" },
    { name: "Alistar", role: "Tank" },
    { name: "Amumu", role: "Tank" },
    { name: "Anivia", role: "Mage" },
  ];

  const daily = { name: "Alistar", role: "Tank" };

  const correct = {
    backgroundColor: "#6df59e",
  };
  const incorrect = {
    backgroundColor: "#f17b7b",
  };
  const partial = {
    backgroundColor: "#FFD28F",
  };

  return (
    <>
      <div className="mx-auto flex flex-row overflow-x-scroll overflow-y-hidden md:overflow-x-hidden gap-2 md:justify-center w-100">
        <Fade direction="up" duration={500} cascade triggerOnce>
          {headers.map((header, index) => (
            <div
              key={index}
              className={`${selection[header.key] != selection[header.key] && "animate-shake-h"}
              text-xs md:text-sm 2xl:text-base
              border-secondary-7 dark:border-secondary-7 border-t-[3px] md:border-t-[4px] 2xl:border-t-[5px] border-r-[3px] md:border-r-[4px] 2xl:border-r-[5px] border-b-[7px] md:border-b-[9px] 2xl:border-b-[13px] border-l-[7px] md:border-l-[9px] 2xl:border-l-[13px]
              grid place-items-center font-extrabold w-[70px] md:w-[80px] 2xl:w-[100px] min-w-[70px] md:min-w-[80px] 2xl:min-w-[100px] h-[70px] md:h-[80px] 2xl:h-[100px]`}
              style={ selection[header.key] === daily[header.key] ? correct : incorrect }
            >
              <p className="text-secondary-7 dark:text-secondary-7 text-center">
                {selection[header.key]}
              </p>
            </div>
          ))}
        </Fade>
      </div>
    </>
  )
}

export const GuessRows = ({ selectedChamps, headers }: IGuessRow) => {
  return (
    <div className="w-100">
      {selectedChamps.length ? (
        selectedChamps.map((item, index) => (
          <Row key={index} selection={item} headers={headers}/>
        ))
      ) : (
        <div className="flex justify-center">
          <div className="bg-accent-1 text-dark py-5 px-24 text-sm">
            <p>Make your move.</p>
          </div>
        </div>
      )}
    </div>
  )
}
