import { useNavigate } from "react-router-dom";

function Exam() {
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
        <h1 className="font-semibold text-slate-800 text-3xl mr-36 py-1">Exam</h1>
        <img src="/images/svg/prof.svg" className="pb-2" />
      </div>

      <div className="mx-auto">
        <img src="/images/svg/phy.svg" className="mx-auto mt-8" />
        <h1 className="text-zinc-800 text-center text-2xl font-semibold py-2">
          Physics Exams
        </h1>
        <p className="text-zinc-700 text-center text-sm mb-6">
          This is the final exam in physics. You must answer all the questions
          correctly, the time given is only 45 minutes. If you get 70 points,
          you will pass the course. If your score is less than 40, you will have
          to retake the test.
        </p>
      </div>

      <div className="flex flex-row gap-4 py-3">
        <div className="w-12 h-12 rounded-2xl shadow border border-indigo-400">
          <img src="/images/svg/timer.svg" className="py-3 mx-auto" />
        </div>
        <div className="flex flex-col mr-10">
          <h1 className="text-midblue">45 minutes for the test</h1>
          <h2 className="text-slate-500">Complete the test in 45 minutes</h2>
        </div>
      </div>
      <div className="flex flex-row gap-4 py-3">
        <div className="w-12 h-12 rounded-2xl shadow border border-indigo-400">
          <img src="/images/svg/doc.svg" className="py-3 mx-auto" />
        </div>
        <div className="flex flex-col mr-10">
          <h1 className="text-midblue">35 questions</h1>
          <h2 className="text-slate-500">The test consists of 35 questions </h2>
        </div>
      </div>

      <button className="bg-blue-500 text-white rounded-full w-full py-2 px-4 mt-20">
        <a href="/examstarted">Exam Started</a>
      </button>
    </div>
  );
}

export default Exam;
