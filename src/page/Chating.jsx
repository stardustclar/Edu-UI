import { useNavigate } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";


function Chating() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

  return (
    <div className="max-w-[450px] h-[1000px] m-auto pt-16 px-10 mb-10 relative group font-Poppins dark:bg-dark">
      <div className="flex flex-row gap-4">
        <button onClick={handleGoBack}>
          <img src="/images/svg/back.svg" alt="" />
        </button>
        <div className="flex flex-row gap-4 py-3">
            <img src="/images/leader/robert.svg" className=" w-12" />
            <div className="flex flex-col pt-3">
              <h1 className="text-base">David Bob</h1>
              <h2 className="text-slate-500 text-xs">Online</h2>
              <img src="/images/svg/greendot.svg" alt="" className="py-2 mx-auto" />
            </div>
          </div>
        <FaEllipsisV className="my-auto ml-10 pt-7"/>
      </div>
      
      <div className="flex flex-col gap-2 mx-4 pt-4">
            <div className="flex flex-row gap-2">
              <img src="/images/svg/mia.svg" alt="" />
              <h1 className="py-2 font-semibold">MIAASNA</h1>
            </div>
            <span className="bg-slate-400 rounded-full pt-1 px-8 mx-auto w-42 h-10">
              <h1>Hi, how are you doing?</h1>
            </span>
      </div>
      <div className="flex flex-col gap-2 mx-4 pt-4">
            <div className="flex flex-row gap-2">
              <img src="public\images\png\micky.png" alt="" />
              <h1 className="py-2 font-semibold">MICHKEY</h1>
            </div>
            <span className="bg-slate-400 rounded-full pt-2 px-8 mx-auto w-42 h-10">
              <h1>so easy to understand!</h1>
            </span>
          </div>            <span className="bg-slate-400 rounded-full pt-2 px-8 mx-auto w-42 h-10">
              <h1>so easy to understand!</h1>
            </span>
    </div>
  )
}

export default Chating