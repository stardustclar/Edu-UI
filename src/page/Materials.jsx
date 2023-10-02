import { useEffect, useState } from "react";
import Subjects from "../comp/Subjects";
import BottomNavbar from "../comp/BottomNavbar";

function Materials() {
  const [activeTab, setActiveTab] = useState("document");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const tabs = document.querySelectorAll(".tabs_wrap ul li");
    const documents = document.querySelectorAll(".document");
    const passeds = document.querySelectorAll(".passed");
    const exams = document.querySelectorAll(".exam");

    tabs.forEach((tab) => {
      tab.removeEventListener('click', handleTabClick);
      tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");
        const tabval = tab.getAttribute("data-tabs");
        if (tabval === "document") {
          documents.forEach((item) => {
            item.style.display = "block";
          });
        } else if (tabval === "exam") {
          exams.forEach((item) => {
            item.style.display = "block";
          });
        } else if (tabval === "passed") {
          passeds.forEach((item) => {
            item.style.display = "block";
          });
        }
      });
    });
  }, []);


  return (
<div className="max-w-[550px] h-[1000px] mx-auto pt-10 px-10 mb-10 relative group font-Poppins dark:bg-dark">
 <div className="max-w-md mx-auto text-center">
        <div className="flex flex-row gap-10 py-4 mt-8 mx-10">
          <h1 className="text-midblue text-3xl font-semibold dark:text-white">Materials</h1>
          <img src="/images/svg/prof.svg" className="pb-2 ml-32" />
        </div>

    <div className="tabs_wrap">
     <ul className="flex flex-wrap gap-2 py-4 mb-8 justify-center">
        <li
          className={activeTab === "document" ? "active" : ""}
          onClick={() => handleTabClick("document")}
          style={{backgroundColor: 'slategray',borderRadius: '50%', padding: '0.5rem', margin: '0 auto', width: '8rem'  }}
          >
          <a href="/doc">Documents</a>
        </li>

        <li
          className={activeTab === "exam" ? "active" : ""}
          onClick={() => handleTabClick("exam")}
          style={{backgroundColor: 'slategray',borderRadius: '50%', padding: '0.5rem', margin: '0 auto', width: '8rem'  }}
        >
          <a href="/exam">Exams</a>
        </li>

        <li
          className={activeTab === "passed" ? "active" : ""}
          onClick={() => handleTabClick("passed")}
          style={{backgroundColor: 'slategray',borderRadius: '50%', padding: '0.5rem', margin: '0 auto', width: '8rem'  }}
        >
          Passed
        </li>
      </ul>

      <div
        className="document"
        style={{ display: activeTab === "document" ? "block" : "none" }}
      >
        <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
          <img
            src="/images/png/doc.png"
            alt="document image"
            className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
          />
        </div>
        <Subjects />      
      </div>

      <div
        className="exam"
        style={{ display: activeTab === "exam" ? "block" : "none" }}
      >
        <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
          <img
            src="images/png/exam.png"
            alt="document image"
            className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
          />
        </div>
        <Subjects />

      </div>

      <div
        className="passed"
        style={{ display: activeTab === "passed" ? "block" : "none" }}
      >
        <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
          <img
            src="images/png/passed.png"
            alt="document image"
            className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
          />
        </div>

        <div className="flex flex-col py-6">
        <div className="flex flex-row gap-3 py-3">
            <img src="/images/svg/phy.svg" alt="" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-midblue font-semibold dark:text-white">Physics</h1>
              <h2 className="text-subblue text-base dark:text-slate-300">You have completed 
              <span className="text-green-500"> 28/35</span> questions</h2>
            </div>
            <img src="/images/svg/85per.svg" alt="" />
        </div>

        <div className="flex flex-row gap-3 py-3">
            <img src="/images/svg/sci.svg" alt="" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-midblue font-semibold dark:text-white">Science</h1>
              <h2 className="text-subblue text-base dark:text-slate-300">You have completed 
              <span className="text-green-500"> 22/35</span> questions</h2>
            </div>
            <img src="/images/svg/75per.svg" alt="" />
        </div>

        <div className="flex flex-row gap-3 py-3">
            <img src="/images/svg/chem.svg" alt="" />
            <div className="flex flex-col">
              <h1 className="text-2xl text-midblue font-semibold dark:text-white">Chemistry</h1>
              <h2 className="text-subblue text-base dark:text-slate-300">You have completed 
              <span className="text-orange"> 12/35</span> questions</h2>
            </div>
            <img src="/images/svg/30per.svg" alt="" />
        </div>
        </div>
      </div>

      <BottomNavbar />
    </div>
 </div>
</div>
  );
}

export default Materials;
