import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import BottomNavbar from "../comp/BottomNavbar";

function Document() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className="flex flex-row gap-4">
          <button onClick={handleGoBack}><img src="/images/svg/back.svg" alt="" /></button>
            <h1 className="font-semibold from-midblue text-3xl mr-10">Document</h1>
            <img src="/images/svg/prof.svg" alt="" />
        </div>
        <div className="py-4 px-3">
          <h1 className="text-midblue text-xl">Physics</h1>
          <h2 className="text-slate-500 text-base"> 2 New uploaded</h2>
        </div>

        <div className="mb-10">
          <div className="flex flex-row gap-4 py-3">
            <img src="/images/svg/doc/doc1.svg" alt="" />
            <div className="flex flex-col mr-10">
              <h1 className="text-midblue">Physics Tutorial</h1>
              <h2 className="text-slate-500">Ready to open</h2>
            </div>
            <FaAngleRight />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/svg/doc/doc2.svg" alt="" />
            <div className="flex flex-col mr-10">
              <h1 className="text-midblue">Physics Practice</h1>
              <h2 className="text-slate-500">Ready to open</h2>
            </div>
            <FaAngleRight />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/svg/doc/doc3.svg" alt="" />
            <div className="flex flex-col mr-3">
              <h1 className="text-midblue">Physics Technology</h1>
              <h2 className="text-slate-500">Download</h2>
            </div>
            <FaAngleRight />
          </div>
        </div>
        <BottomNavbar />
    </div>
  )
}

export default Document