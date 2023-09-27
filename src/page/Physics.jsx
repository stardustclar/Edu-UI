import { useNavigate } from "react-router-dom";

function Physics() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

  return (
    <>
    <div className="max-w-[500px] h-[1000x] m-auto pt-10 px-10 mb-10 relative group font-Poppins">
        <div className='flex flex-row py-2 px-4 gap-24'>
          <button onClick={handleGoBack}>
            <img src="/images/svg/back.svg" className="mr-32" />
          </button>
        </div>
        <div>
            <h1 className='font-semibold text-4xl text-midblue text-center mb-8'>Physics</h1>
            <img src="images/png/saturn.png" className='mx-auto' />
            <h1 className='font-semibold text-2xl text-midblue text-center py-4'>Advanced Physics</h1>
            <p className="text-subblue">This course serves as an introduction to the physics of force and motion...  
            <span className='text-blue-500 mx-2'>Read more</span></p>
        </div>

        <div className='pt-4'>
            <h1 className='py-4 font-semibold text-2xl text-midblue'>Subject Details</h1>
            <div className='flex flex-row gap-4 py-4'>
                <div className="w-12 h-12 rounded-2xl border-2 border-indigo-500 " >
                <img src="images/svg/lectures.svg" className='mx-auto py-2' />
                </div>
                <div className='flex flex-col'>
                <h2 className='text-midblue text-xl'>18 online lectures</h2>
                <p className='text-subblue'>Lectures can be viewd offline or download</p>
                </div>
            </div>
            
            <div className='flex flex-row gap-4 py-4'>
                <div className="w-12 h-12 rounded-2xl border-2 border-blue-500 " >
                <img src="images/svg/doc.svg" className='mx-auto py-2' />
                </div>
                <div className='flex flex-col'>
                <h2 className='text-midblue text-xl'>15 Chapter + 5 Test Exam</h2>
                <p className='text-subblue'>Each lesson will have a test</p>
                </div>
            </div>

            <div className='flex flex-row gap-4 py-4'>
                <div className="w-12 h-12 rounded-2xl border-2 border-orange2 " >
                <img src="images/svg/down.svg" className='mx-auto py-2' />
                </div>
                <div className='flex flex-col'>
                <h2 className='text-midblue text-xl'>20 download resource</h2>
                <p className='text-subblue'>Download lecture resources for testing</p>
                </div>
            </div>

            <button className="w-full h-12 my-4 mt-4 rounded-full bg-blue-500 text-white">
             <a href="phy2">Continue</a></button>
        </div>
    </div>
    </>
  )
}

export default Physics