import { useNavigate } from "react-router-dom";

function ExamStarted() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };
  
    return (
      <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className="flex flex-row gap-10">
          <button onClick={handleGoBack}>
            <img src="/images/svg/back.svg" className="mr-10"/>
          </button>
          <img src="/images/svg/timerred.svg" className="pb-2 mr-10" />
          <h1 className="font-semibold text-blue-500 text-xl mr-10 py-1">Submit</h1>
        </div>

        <div>
            question 1
        </div>
      </div>
  )
}

export default ExamStarted