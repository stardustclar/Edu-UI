import { useNavigate } from "react-router-dom";
import BottomNavbar from "../comp/BottomNavbar";

function Chat() {
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
        <h1 className="font-semibold text-midblue text-3xl mr-36 py-1">Chat</h1>
        <img src="/images/svg/search.svg" className="pb-2" />
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="text-slate-800 text-xl mr-48 py-8">Group</h1>
        <a href="/group" className="pt-8"><img src="/images/svg/add.svg" /></a>
      </div>

      <div className="flex flex-row gap-4">
        <div className="gap-2 mr-20">
            <h1 className="text-midblue text-xl py-1 font-semibold">Physic Class</h1>
            <img src="/images/svg/chatgroup.svg" className="py-4"/>
        </div>
        <button className="bg-blue-500 text-white rounded-full w-24 h-10 px-4 mt-8 gap-4">Join</button>
      </div>
      <div className="flex flex-row gap-4 ">
        <div className="gap-2 mr-20">
            <h1 className="text-midblue text-xl py-1 font-semibold">Physic Class</h1>
            <img src="/images/svg/chatgroup.svg" className="py-4"/>
        </div>
        <button className="bg-blue-500 text-white rounded-full w-24 h-10 px-4 mt-8 gap-4">Join</button>
      </div>

      <div className="flex flex-row gap-4">
        <h1 className="text-slate-800 text-xl mr-48 py-8">Messages</h1>
        <img src="/images/svg/add.svg" alt="" />
      </div>

      <div className="flex flex-col py-2">
          <div className="flex flex-row gap-4 py-4">
            <img src="/images/png/shion.png" alt="" />
            <div className="flex flex-col">
              <h1>Sanderly Suly</h1>
              <h2 className="text-slate-500">Have you done your homework yet?</h2>
            </div>
          </div>
          <div className="flex flex-row gap-4 py-4">
            <img src="/images/leader/devi.svg" className="w-12" />
            <div className="flex flex-col">
              <h1>Edward Dory</h1>
              <h2 className="text-slate-500">Hi, how old are you?</h2>
            </div>
          </div>
          <div className="flex flex-row gap-4 py-4">
            <img src="/images/leader/juli.svg" alt="" />
            <div className="flex flex-col">
              <h1>Alex Fendere</h1>
              <h2 className="text-slate-500">How are you doing?</h2>
            </div>
          </div>
          <div className="flex flex-row gap-4 py-4">
            <img src="/images/leader/robert.svg" className="w-12" />
            <div className="flex flex-col">
              <h1>David Bob</h1>
              <h2 className="text-slate-500">No, i am best</h2>
            </div>
          </div>
      </div>
      <BottomNavbar />
    </div>
  )
}

export default Chat