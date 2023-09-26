import BottomNavbar from "../comp/BottomNavbar"
import Navbar from "../comp/Navbar"

function Video() {
  return (
    <>
    <Navbar />
    <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className=" flex flex-row py-2 px-4 gap-40">
            <img src="/images/svg/back.svg" alt="" />
            <img src="/images/svg/search.svg" className="mx-20"/>
        </div>

        <div className="flex flex-col pt-12 pb-2 px-2 gap-2">
            <h1 className="font-semibold text-midblue text-2xl">Video Course</h1>
            <h2 className="font-medium text-slate-500 text-base ">All Course</h2>
        </div>

        <div>
        <div className="flex flex-row gap-4 mb-100"> 
            <img src="/images/svg/girl.svg" className="w-50" />
            <div className="px-4">
                <div className="flex flex-row gap-2">
                <img src="/images/svg/star.svg" />
                <h2 className="flex-row gap-2"> 4.6 </h2>
                </div>
                <h1 className="font-medium text-lg  text-midblue">Science Technology</h1>
                <p className="text-sm text-slate-500">By Nazomi Sasaki</p>
                <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">Live Now</button>
            </div>
        </div>
        <div className="flex flex-row gap-4 mb-100"> 
            <img src="/images/svg/girl2.svg" className="w-50" />
            <div className="px-4">
                <div className="flex flex-row gap-2">
                <img src="/images/svg/star.svg" />
                <h2 className="flex-row gap-2"> 4.6 </h2>
                </div>
                <h1 className="font-medium text-lg  text-midblue">Science Technology</h1>
                <p className="text-sm text-slate-500">By Nazomi Sasaki</p>
                <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">Live at 04:20</button>
            </div>
        </div>
        <div className="flex flex-row gap-4 mb-100"> 
            <img src="/images/svg/girl3.svg" className="w-50" />
            <div className="px-4">
                <div className="flex flex-row gap-2">
                <img src="/images/svg/star.svg" />
                <h2 className="flex-row gap-2"> 4.6 </h2>
                </div>
                <h1 className="font-medium text-lg  text-midblue">Science Technology</h1>
                <p className="text-sm text-slate-500">By Nazomi Sasaki</p>
                <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">Live at 05:30</button>
            </div>
        </div>
        <div className="flex flex-row gap-4 mb-100"> 
            <img src="/images/svg/boy.svg" className="w-50" />
            <div className="px-4">
                <div className="flex flex-row gap-2">
                <img src="/images/svg/star.svg" />
                <h2 className="flex-row gap-2"> 4.6 </h2>
                </div>
                <h1 className="font-medium text-lg  text-midblue">Science Technology</h1>
                <p className="text-sm text-slate-500">By Nazomi Sasaki</p>
                <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">Live at 06:30</button>
            </div>
        </div>
        </div>
        <BottomNavbar />
    </div>
    </>
  )
}

export default Video