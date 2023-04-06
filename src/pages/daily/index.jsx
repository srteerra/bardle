/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import mainLogo from "../../../public/bardle.png";
const crypto = require("crypto");
import { FiTriangle } from "react-icons/fi";
import GuessList from "@/components/daily";

function DailyChamp() {
  const champs = ["Aatrox", "Ahri", "Akali"];

  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? champs
      : champs.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  function generateDailyNumber() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const hash = crypto.createHash("sha256").update(dateStr).digest("hex");
    const hashNum = parseInt(hash.slice(0, 8), 16);
    const num = (hashNum % 160) + 1;

    return num;
  }

  const dailyNumber = generateDailyNumber();
  console.log(dailyNumber); // prints a constant number between 1 and 7

  return (
    <>
      <div className="px-6 py-4">
        <div>
          <Image
            src={mainLogo}
            className="w-[300px] md:w-[400px] mx-auto py-16"
          />
        </div>
        <div className="mx-auto flex items-center md:max-w-[80%] lg:max-w-[30%]">
          <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative mx-auto">
              <div className="mx-auto w-full">
                <Combobox.Input
                  className="flex-1 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 font-extrabold border-slate-900 border-[5px] border-b-[10px] outline-none" placeholder="Guess the champion..."
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Champion not found
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-3 pl-6 pr-4 ${
                            active ? "bg-slate-600 text-white" : "text-gray-900"
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div
                              className="flex items-center"
                            >
                                <img className="w-10 h-10" src={`https://cdn.communitydragon.org/12.13.1/champion/${person}/square`} alt="" />
                                <span className="truncate ml-4 font-extrabold">{person}</span>
                            </div>
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>

        <div className="mx-auto flex justify-center w-100 mt-5 mb-16">
          <p>
            <span className="font-bold">10400</span> people already found it
          </p>
        </div>

        <GuessList selections={champs} />
      </div>
    </>
  );
}

export default DailyChamp;
