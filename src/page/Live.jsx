import { useNavigate } from "react-router-dom";

function Live() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="max-w-[450px] h-[1000px] m-auto pt-10 px-10 mb-10 relative group font-Poppins">
        <div className=" flex flex-row py-2 px-4 gap-20">
          <button onClick={handleGoBack}>
            <img src="/images/svg/back.svg" className="mr-32" />
          </button>
          <button className="bg-orange text-white rounded-full px-3 py-2 my-2">
            Live Now
          </button>
        </div>

        <div className="relative w-[300px] h-[300px] mx-auto">
          <img src="/images/png/bglive.png" className="mx-auto" />
          <img
            src="/images/svg/Overlay.svg"
            className="absolute top-52 left-0 w-auto"
          />
          <div className="absolute top-72 left-0">
            <div className="flex flex-row gap-2">
              <img src="/images/svg/nazomi.svg" alt="" />
              <h1 className=" text-white pt-2">Nozomi Sasaki</h1>
            </div>
            <h2 className="text-white text-lg pt-2">
              Teaching Science in Aboriginal and Urban Multicultural Schools
            </h2>
          </div>
        </div>

        <div className="relative w-[350px] h-[540px] rounded-[32px] bg-blue-300 dark:bg-midblues opacity-100 mx-auto mt-24">
          {/* MIAASNA */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
            <div className="flex flex-row gap-2">
              <img src="/images/svg/mia.svg" alt="" />
              <h1 className="py-2 font-semibold">MIAASNA</h1>
            </div>
            <span className="bg-slate-400 rounded-full pt-1 px-8 mx-auto w-42 h-10">
              <h1>Hi, how are you doing?</h1>
            </span>
          </div>

          {/* YOU */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
            <div className="flex flex-row gap-2">
              <img src="/images/svg/you.svg" alt="" />
              <h1 className="py-2 font-semibold text-slate-500">YOU</h1>
            </div>
            <span className="bg-slate-400 rounded-full pt-4 px-8 mx-auto h-20">
              <h1 className="text-slate-600">
                Can you speak a little louder? The mic seems a bit small.
              </h1>
            </span>
          </div>

          {/* MICKEY */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
            <div className="flex flex-row gap-2">
              <img src="public\images\png\micky.png" alt="" />
              <h1 className="py-2 font-semibold">MICHKEY</h1>
            </div>
            <span className="bg-slate-400 rounded-full pt-2 px-8 mx-auto w-42 h-10">
              <h1>so easy to understand!</h1>
            </span>
          </div>

          <div className="flex flex-row gap-8 pt-12">
            <h1 className="text-slate-500 py-1 mx-4 mr-10">Add Comment</h1>
            <div className="w-8 h-8 py-2 bg-blue-500 rounded-[100px] justify-center items-center gap-4 ml-20 inline-flex">
              <img src="/images/svg/send.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Live;
