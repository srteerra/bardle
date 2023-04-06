/* eslint-disable jsx-a11y/alt-text */

function GuessList({selections}) {

  return (
    <>
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
                <img src={"https://cdn.communitydragon.org/12.13.1/champion/20/square"} alt=""/>
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
    </>
  )
}

export default GuessList