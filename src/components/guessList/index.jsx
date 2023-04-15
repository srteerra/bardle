/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import axios from "axios";

function GuessList({selections}) {
    const [champs, setChamps] = useState([]);

    let newSel = []
    const categories = ["Champion", "Gender", "Position", "Specie", "Resource", "Range type", "Region", "Release year"]

    useEffect(() => {
        selections.map((c) => {
            axios.get("https://lolchamps-api.onrender.com/champs?name=" + c).then(res => {
                newSel.push(res.data)
                setChamps(newSel)
            })
        })
    }, [selections])

    return (
        <>
            <div className='mx-auto flex overflow-x-hidden gap-2 md:justify-center w-100'>
                {categories.map((c) => (
                    <div className="w-[100px] text-center min-w-[100px] h-[60px] champ__avatar" key={c}>
                        <p>{ c }</p>
                    </div>
                ))}
            </div>

            {champs.map((champ) => (   
                <div key={champ[0]._id} className='mx-auto flex flex-row-reverse overflow-x-scroll overflow-y-hidden md:overflow-x-hidden gap-2 md:justify-center w-100'>
                    <Slide direction="up" cascade triggerOnce>
                        <div className="w-[100px] min-w-[100px] h-[130px] champ__avatar">
                            <img src={`https://cdn.communitydragon.org/12.13.1/champion/${champ[0].name}/square`} alt=""/>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].gender }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].position }</p>
                        </div>
                        <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].species }</p>
                        </div>
                        <div className="bg-yellow-200 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].resource }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].range }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].region }</p>
                        </div>
                        <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ champ[0].release_year }</p>
                        </div>
                    </Slide>
                </div>
            ))}
        </>
    )
}

export default GuessList