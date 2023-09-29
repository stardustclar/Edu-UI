import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExamStarted() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
      <div className="flex flex-row gap-2">
        <button onClick={handleGoBack}>
          <img src="/images/svg/back.svg" className="mr-10" />
        </button>
        <img src="/images/svg/timerred.svg" className="pb-2 py-1 ml-10" />
        <h1 className="text-red-500 text-xl py-1 mr-10">44:10</h1>
        <h1 className=" text-blue-500 text-xl mr-10 py-1">Submit</h1>
      </div>

      <div className="mx-auto">
        <h1 className="text-2xl text-midblue font-semibold py-3">Question 1</h1>
        <img src="/images/png/exams.png" className="py-3" />
        <h1 className="text-midblue text-xl font-semibold py-3">
          In the following cases, when does the object make a sound?
        </h1>
        <p className="py-3">A. When stretching the object</p>
        <p className="py-3">B. When bending objects</p>
        <p className="py-3">C. When compressing objects</p>
        <p className="py-3">D. When making an object vibrate</p>
      </div>

      <h1 className="text-base opacity-60 text-center mt-20">
        Question 1 of 35
      </h1>
      <div className="flex flex-row gap-2">
        <img src="/images/svg/back.svg" className="opacity-60 ml-36" />
        <img
          src="/images/svg/back180.svg"
          className="mr-10"
          onClick={togglePopup}
        />
        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-3xl w-80 shadow">
              <h2 className="text-2xl text-midblue text-center font-bold mb-4">
                Do you want to submit the test?
              </h2>
              <p className="text-base text-subblue text-center">
                You have 44:10 minutes left. Do you want to submit the test? If
                you press submit, you will not be able to edit the test
              </p>
              <div className="flex justify-center gap-2">
              <button
                className="bg-white hover:bg-slate-700 opacity-60 font-bold py-2 px-4 rounded-full mt-4"
                onClick={togglePopup}
              >
                Cancel
              </button>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                onClick={togglePopup}
              >
                Submit
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ExamStarted;
