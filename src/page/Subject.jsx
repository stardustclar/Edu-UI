import { useNavigate } from "react-router-dom";
import BottomNavbar from "../comp/BottomNavbar";
function Subject() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="max-w-[450px] h-[1000px] m-auto pt-10 px-10 mb-10 relative group font-Poppins dark:bg-dark">
        <div className=" flex flex-row py-2 px-4 gap-20">
          <button onClick={handleGoBack}>
            <img src="/images/svg/back.svg" className="mr-32" />
          </button>
          <img src="/images/svg/search.svg" className="mx-20 py-1" />
        </div>

        <div>
          <div className="flex flex-col py-4 px-4 gap-4">
            <h1 className="font-semibold text-midblue text-2xl mt-4 dark:text-white">
              All Subject
            </h1>
            <h2 className="font-medium text-slate-500 text-base">
              High School - Grade 12
            </h2>
          </div>

          <div className="flex flex-row gap-4 mx-auto pt-8">
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-violet-200 rounded-2xl shadow mx-auto">
                <img
                  src="/images/svg/physics-1.svg"
                  className="mx-auto py-4 mt-4"
                />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                <a href="/phy">Physics</a>
              </h1>
            </div>
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-red-100 rounded-2xl shadow mx-auto">
                <img
                  src="/images/svg/science.svg"
                  className="mx-auto py-4 mt-4"
                />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Science
              </h1>
            </div>
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-pink-100 rounded-2xl shadow mx-auto">
                <img src="/images/svg/chem.svg" className="mx-auto py-4 mt-4" />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Chemistry
              </h1>
            </div>
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-blue-100 rounded-2xl shadow mx-auto">
                <img src="/images/svg/bio.svg" className="mx-auto py-4 mt-4" />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Biology
              </h1>
            </div>
          </div>

          <div className="flex flex-row gap-4 mx-auto mb-8 pb-10 pt-6">
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-red-200 rounded-2xl shadow mx-auto">
                <img src="/images/svg/math.svg" className="mx-auto py-4 mt-4" />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Math
              </h1>
            </div>
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-green-100 rounded-2xl shadow mx-auto">
                <img
                  src="/images/svg/language.svg"
                  className="mx-auto py-4 mt-4"
                />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Linguistik
              </h1>
            </div>
            <div className="w-1/4">
              <div className="w-[54px] h-[54px] bg-purple-200 rounded-2xl shadow mx-auto">
                <img src="/images/svg/lit.svg" className="mx-auto py-4 mt-4" />
              </div>
              <h1 className="text-midblue text-center opacity-70 font-semibold text-lg mx-auto dark:text-slate-200">
                Literature
              </h1>
            </div>
          </div>
        </div>
        <BottomNavbar />
      </div>
    </>
  );
}

export default Subject;
