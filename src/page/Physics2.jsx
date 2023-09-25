function Physics2() {
  return (
    <>
    <div className="max-w-[550px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className="relative w-[300px] h-[300px] mx-auto">
            <img src="/images/bgprism.png" className="mx-auto" />            
            <div className="absolute top-52 left-0 bg-white w-full h-full rounded-[32px] p-4">
              <h2 className="text-midblue text-xl font-semibold pt-2">Advanced Physics</h2>
              <h3 className="text-midblue py-2">12 Chapter + 5 Exams</h3>
            </div>
        </div>

        <div className="relative w-[350px] h-[540px] rounded-[32px] bg-gray-300 opacity-100 mx-auto mt-0">
         <div className="flex flex-row gap-2 mx-auto px-8 py-6">
              <img src="/images/nazomi.svg" alt="" />
              <div className="flex-col">
              <h1 className=" text-subblue">Nozomi Sasaki</h1>
              <h1 className=" text-subblue">Teacher</h1>
              </div>
         </div>

         <h1 className="text-slate-500  px-4">Select Chapter</h1>

          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <h1 className="pt-2 font-semibold text-midblue text-lg">Introduction</h1>
            <h2 className="text-subblue">Introduction to Science</h2>
            </div>
            <div className="w-12 h-12 relative bg-green-500 rounded-[48px] mx-auto my-2">
                <img src="/images/check.svg" className="mx-auto py-3" />
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <h1 className="pt-2 font-semibold text-midblue text-lg">Forces and Kinematics</h1>
            <h2 className="text-subblue">Teaching Science in Rural  ....</h2>
            </div>
            <img src="/images/forces.svg" className="mx-auto" />
          </div>
          </div>

          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <h1 className="pt-2 font-semibold text-midblue text-lg">Energy and Momentum</h1>
            <h2 className="text-subblue">If schools are going to respond to...</h2>
            </div>
            <img src="/images/energy.svg" alt="" />
          </div>
          </div>

          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <h1 className="pt-2 font-semibold text-midblue text-lg">Electric Charges and Fields</h1>
            <h2 className="text-subblue">Particularly distressing, is that...</h2>
            </div>
            <img src="/images/elec.svg" alt="" />
          </div>
          </div>

          <div className="flex flex-col gap-2 mx-4 pt-4">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col">
            <h1 className="pt-2 font-semibold text-midblue text-lg">Pennsylvania Department</h1>
            <h2 className="text-subblue">Clearly, there are a number of...</h2>
            </div>
            <img src="/images/elec.svg" alt="" />
          </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default Physics2