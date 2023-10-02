import BottomNavbar from "../comp/BottomNavbar";
// import Navbar from "../comp/Navbar";

function Dashboard() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-[450px] h-[1000px] m-auto pt-10 px-10 mb-10 relative group font-Poppins dark:bg-dark">
        <div className="flex flex-row py-4 px-4 gap-4">
          <h1 className="font-semibold text-midblue dark:text-white text-2xl mt-2 mr-6">
            My Classes
          </h1>
          <img src="/images/svg/search.svg" alt="" />
          <a href="/notif"><img src="/images/svg/bell.svg"
            className="py-3"/></a>
          <img src="/images/svg/prof.svg" alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-midblue dark:text-white text-5xl pl-4">
            Hello! Ayano Nana
          </h1>
          <div className="w-[327px] h-[137px] my-6 px-2 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-3xl flex-row gap-2">
            <div className="grid-col-2">
              <h1 className="font-semibold text-white text-xl py-3 px-2 leading-8 ">
                Chemistry final exams
              </h1>
              <div className="flex flex-row gap-2">
                <img src="/images/svg/bell2.svg" alt="" />
                <h1 className="text-white opacity-50 text-sm">45 minutes</h1>
              </div>
            </div>
            {/* <div className="grid-col-2 ">
                    <img src="/images/svg/teles.png" className="ml-32 pb-100 flex-shrink-0" />
                </div> */}
          </div>
        </div>

        {/* SUBJECT */}
        <div className="flex flex-row pt-4 pb-2 px-2 gap-40">
          <h1 className="font-semibold text-midblue text-lg mr-10 dark:text-white">Subject</h1>
          <h2 className="font-medium text-lightblue text-base">
            <a href="/subject">See All</a>
          </h2>
        </div>

        <h1 className=" font-semibold text-midblue dark:text-slate-300 opacity-50 text-lg px-2">
          High School - Grade 12
        </h1>

        <div className="flex flex-row gap-4 mx-auto  pt-8">
          <div className="w-1/4">
            <div className="w-[54px] h-[54px] bg-violet-200 rounded-2xl shadow">
              <img src="/images/svg/physics-1.svg" className="mx-auto py-2" />
            </div>
            <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-white">
              Physics
            </h1>
          </div>
          <div className="w-1/4">
            <div className="w-[54px] h-[54px] bg-red-100 rounded-2xl shadow">
              <img src="/images/svg/science.svg" className="mx-auto py-2" />
            </div>
            <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-white">
              Science
            </h1>
          </div>
          <div className="w-1/4">
            <div className="w-[54px] h-[54px] bg-pink-100 rounded-2xl shadow">
              <img src="/images/svg/chem.svg" className="mx-auto py-2" />
            </div>
            <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-white">
              Chemistry
            </h1>
          </div>
          <div className="w-1/4">
            <div className="w-[54px] h-[54px] bg-blue-100 rounded-2xl shadow">
              <img src="/images/svg/bio.svg" className="mx-auto py-2" />
            </div>
            <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-white">
              Biology
            </h1>
          </div>
        </div>

        {/* VIDEO COURSE */}
        <div className="flex flex-row pt-12 pb-2 px-2 gap-40">
          <h1 className="font-semibold text-midblue text-lg dark:text-white">Video Course</h1>
          <h2 className="font-medium text-lightblue text-base ">
          <a href="/video">See All</a>
          </h2>
        </div>

        <div className="flex flex-row gap-4 mb-100">
          <img src="/images/svg/girl.svg" className="w-50" />
          <div className="px-4">
            <div className="flex flex-row gap-2">
              <img src="/images/svg/star.svg" />
              <h2 className="flex-row gap-2 dark:text-white"> 4.6 </h2>
            </div>
            <h1 className="font-medium text-lg  text-midblue dark:text-slate-300">
              Science Technology
            </h1>
            <p className="text-sm text-slate-500">By Nazomi Sasaki</p>
            <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">
            <a href="/live">Live Now</a>
            </button>
          </div>
        <BottomNavbar />
        </div>

      </div>
    </>
  );
}

export default Dashboard;
