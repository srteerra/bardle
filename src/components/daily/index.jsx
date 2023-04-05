/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from "next/image";
import mainLogo from "../../../public/bardle.png";
const crypto = require("crypto");
import { FiTriangle } from "react-icons/fi"

function DailyGuess() {
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
                <Image src={mainLogo} className='w-[300px] md:w-[400px] mx-auto py-16' />
            </div>
            <div className="mx-auto flex items-center md:max-w-[80%] lg:max-w-[30%]">
                <input className="flex-1 px-4 py-3 text-slate-900 placeholder-slate-400 font-extrabold border-slate-900 border-[5px] border-b-[10px] outline-none" type="text" placeholder="Guess the champion..." />
                <div className='relative right-10 my-auto'>
                    <FiTriangle className="h-4 w-4 rotate-90 text-slate-900" />
                </div>
            </div>

            <div className='mx-auto flex justify-center w-100 mt-5 mb-16'>
                <p><span className='font-bold'>10400</span> people already found it</p>
            </div>

            <div className='mx-auto flex overflow-x-hidden gap-2 md:justify-center w-100'>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__avatar">
                    <p>Champion</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__gender">
                    <p>Gender</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__position">
                    <p>Position</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__specie">
                    <p>Specie</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__resource">
                    <p>Resource</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__range">
                    <p>Range type</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__region">
                    <p>Region</p>
                </div>
                <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__release">
                    <p>Release year</p>
                </div>
            </div>
            
            <div className='mx-auto flex overflow-x-scroll md:overflow-x-hidden gap-2 md:justify-center w-100'>
                <div className="w-[100px] min-w-[100px] h-[130px] champ__avatar">
                    <img src={`https://cdn.communitydragon.org/12.13.1/champion/${dailyNumber - 20}/square`} alt=""/>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Female</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Support</p>
                </div>
                <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Human</p>
                </div>
                <div className="bg-yellow-200 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Mana</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Ranged</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Demacia</p>
                </div>
                <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>2011</p>
                </div>
            </div>

            <div className='mx-auto flex overflow-x-scroll md:overflow-x-hidden gap-2 md:justify-center w-100'>
                <div className="w-[100px] min-w-[100px] h-[130px] champ__avatar">
                    <img src={"https://cdn.communitydragon.org/12.13.1/champion/157/square"} alt=""/>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Female</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Support</p>
                </div>
                <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Human</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Mana</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Ranged</p>
                </div>
                <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>Demacia</p>
                </div>
                <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                    <p className='text-slate-900'>2011</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default DailyGuess