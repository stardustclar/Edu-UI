import { useNavigate } from "react-router-dom";

function Group() {
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
        <h1 className="font-semibold text-midblue text-3xl mr-36 py-1">New group</h1>
      </div>

      <button className="flex flex-row bg-slate-200 w-full h-12 py-3 mt-6 gap-10 rounded-full">
        <h1 className="text-slate-500 mx-4 pb-4 mr-24">Search anything</h1>
        <img src="/images/svg/search.svg" className="pb-2" />
      </button>

      <div>
      <div className="flex flex-row gap-4 py-6 mt-6">
            <img src="/images/png/shion.png" alt="" />
              <h1 className="py-2 text-lg mr-12">Sanderly Suly</h1>
            <img src="/images/svg/tick.svg" alt="" className="py-2 mx-auto" />
      </div>
      <div className="flex flex-row gap-4 py-6">
            <img src="/images/leader/devi.svg" className="w-12" />
              <h1 className="py-2 text-lg mr-12">Edward Dory</h1>
            <img src="/images/svg/tick.svg" alt="" className="py-2 mx-auto" />
      </div>
      <div className="flex flex-row gap-4 py-6">
            <img src="/images/leader/juli.svg" className="w-12" />
              <h1 className="py-2 text-lg mr-12">Alex Fendere</h1>
            <img src="/images/svg/tick.svg" alt="" className="py-2 mx-auto" />
      </div>
      </div>
      <button className="bg-blue-500 text-white rounded-full w-full h-12 px-4 mt-8 gap-4">
        <a href="/chating">Continue</a></button>
    </div>
  )
}

export default Group