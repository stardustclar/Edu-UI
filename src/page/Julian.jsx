import { useNavigate } from "react-router-dom";

function Julian() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-[500px] h-[1000x] m-auto pt-10 px-10 mb-10 relative group font-Poppins">
      <div className="flex flex-row gap-4">
        <button onClick={handleGoBack}>
          <img src="/images/svg/back.svg" alt="" />
        </button>
        <h1 className="font-semibold text-slate-800 text-3xl mr-36 py-1">
          Leaderboard
        </h1>
        </div>

        <div className="flex flex-col">
        <div className="flex flex-row gap-3 py-6">
            <div className="flex flex-row gap-4">
              <img src="/images/leader/juli.svg" alt="" />
              <div className="flex flex-col">
              <h1 className="text-midblue font-semibold py-1 mr-16">Julian Fox</h1>
              <h2>Completed <span className="text-green-500">17/20</span> exam </h2>
              </div>
              <img src="/images/leader/86.svg" alt="" />
            </div>
        </div>
        </div>

        
      </div>
  );
}

export default Julian;
