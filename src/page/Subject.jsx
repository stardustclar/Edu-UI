import BottomNavbar from "../comp/BottomNavbar"
import Navbar from "../comp/Navbar"

function Subject() {
  return (
    <>
    <Navbar />
    <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className=" flex flex-row py-2 px-4 gap-40">
            <img src="/images/svg/back.svg" alt="" />
            <img src="/images/svg/search.svg" className="mx-20"/>
        </div>

        <div>
            <div className="flex flex-col py-4 px-4 gap-4">
                <h1 className="font-semibold text-midblue text-2xl mt-4">All Subject</h1>
                <h2 className="font-medium text-slate-500 text-base">High School - Grade 12</h2>
            </div>
            
        <div className="flex flex-row gap-4 mx-auto pt-8">
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-violet-200 rounded-2xl shadow">
                <img src="/images/svg/physics-1.svg" className="mx-auto py-4 mt-4" />
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Physics</h1>
            </div>
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-orange-100 rounded-2xl shadow" >
                <img src="/images/svg/science.svg" className="mx-auto py-4 mt-4" /> 
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Science</h1>
            </div>
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-pink-100 rounded-2xl shadow" >
                <img src="/images/svg/chem.svg" className="mx-auto py-4 mt-4" /> 
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Chemistry</h1>
            </div>
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-blue-100 rounded-2xl shadow" >
                <img src="/images/svg/bio.svg" className="mx-auto py-4 mt-4" /> 
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Biology</h1>
            </div>
        </div>

        <div className="flex flex-row gap-4 mx-auto  pt-6">
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-red-200 rounded-2xl shadow">
                <img src="/images/svg/math.svg" className="mx-auto py-4 mt-4" />
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Math</h1>
            </div>
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-green-100 rounded-2xl shadow" >
                <img src="/images/svg/language.svg" className="mx-auto py-4 mt-4" /> 
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Linguistik</h1>
            </div>
            <div className="w-1/4">
                <div className="w-[54px] h-[54px] bg-purple-200 rounded-2xl shadow" >
                <img src="/images/svg/lit.svg" className="mx-auto py-4 mt-4" /> 
                </div>
                <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto">Literature</h1>
            </div>
        </div>

        </div>
        <BottomNavbar />
    </div>
    </>
  )
}

export default Subject