/* eslint-disable jsx-a11y/alt-text */
import { Slide } from "react-awesome-reveal";

function GuessList({cats, selections}) {
    return (
        <>
            <div className='mx-auto flex overflow-x-hidden gap-2 md:justify-center w-100'>
                {cats.map((c) => (
                    <div className="w-[100px] text-center min-w-[100px] h-[40px] champ__avatar" key={c}>
                        <p>{ c }</p>
                    </div>
                ))}
            </div>

            {Object.keys(selections).map((champ) => (
                <div key={champ} className='mx-auto flex overflow-x-scroll overflow-y-hidden md:overflow-x-hidden gap-2 md:justify-center w-100'>
                    <Slide key={champ} direction="up" cascade triggerOnce>
                        <div className="w-[100px] min-w-[100px] h-[130px] champ__avatar">
                            <img src={`https://cdn.communitydragon.org/12.13.1/champion/${selections[champ].name}/square`} alt=""/>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].gender }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].position }</p>
                        </div>
                        <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].species }</p>
                        </div>
                        <div className="bg-yellow-200 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].resource }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].range }</p>
                        </div>
                        <div className="bg-green-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].region }</p>
                        </div>
                        <div className="bg-red-300 border-slate-900 border-t-[5px] border-r-[5px] border-b-[13px] border-l-[10px] grid place-items-center font-extrabold w-[100px] min-w-[100px] h-[100px] champ__gender">
                            <p className='text-slate-900 text-center'>{ selections[champ].release_year }</p>
                        </div>
                    </Slide>
                </div>
            ))}
        </>
    )
}

export default GuessList