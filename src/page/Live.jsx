import Navbar from "../comp/Navbar"

function Live() {

  return (
    <>
    <Navbar />
    <div className="max-w-[450px] h-[100x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className=" flex flex-row py-2 px-4 gap-40">
            <img src="/images/back.svg" alt="" />
            <button className="bg-orange text-white rounded-full px-7 py-2 my-4 mx-2">Live Now</button>
        </div>

        <div className="relative w-[300px] h-[300px] mx-auto">
            <img src="/images/bglive.png" className="mx-auto" />
            <img src="/images/Overlay.svg" className="absolute top-52 left-0 w-auto" />
            <div className="absolute top-72 left-0">
              <div className="flex flex-row gap-2">
              <img src="/images/nazomi.svg" alt="" />
              <h1 className=" text-white pt-2">Nozomi Sasaki</h1>
              </div>
              <h2 className="text-white text-lg pt-2">Teaching Science in Aboriginal and Urban Multicultural Schools</h2>
            </div>
        </div>

        <div className="relative w-[350px] h-[540px] rounded-[32px] bg-blue-300 opacity-100 mx-auto mt-24">
          {/* MIAASNA */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <img src="/images/mia.svg" alt="" />
            <h1 className="py-2 font-semibold">MIAASNA</h1>
          </div>
            <span className="bg-slate-400 rounded-full pt-1 px-8 mx-auto w-42 h-10">
              <h1>Hi, how are you doing?</h1>
            </span>
          </div>

          {/* YOU */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <img src="/images/you.svg" alt="" />
            <h1 className="py-2 font-semibold text-slate-500">YOU</h1>
          </div>
            <span className="bg-slate-400 rounded-full pt-4 px-8 mx-auto h-20">
              <h1 className="text-slate-600">Can you speak a little louder? The mic seems a bit small.</h1>
            </span>
          </div>

          {/* MICKEY */}
          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <img src="public\images\micky.png" alt="" />
            <h1 className="py-2 font-semibold">MICHKEY</h1>
          </div>
            <span className="bg-slate-400 rounded-full pt-2 px-8 mx-auto w-42 h-10">
              <h1>so easy to understand!</h1>
            </span>
          </div>

          <div className="flex flex-row gap-8 pt-8">
            <h1 className="text-slate-500 py-1 mx-4">Add Comment</h1>
            <div className="w-8 h-8 p-1 bg-blue-500 rounded-[100px] justify-center items-center gap-4 ml-20 inline-flex">
              <img src="/images/send.svg"  />
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Live