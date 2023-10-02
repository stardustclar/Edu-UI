
function Subjects() {
  return (
    <div className="px-auto mx-8">
    <div className="flex flex-row gap-4 mx-auto pt-8">
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-violet-200 rounded-2xl shadow">
          <img
            src="/images/svg/physics-1.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Physics
        </h1>
      </div>
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-red-100 rounded-2xl shadow">
          <img
            src="/images/svg/science.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Science
        </h1>
      </div>
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-pink-100 rounded-2xl shadow">
          <img
            src="/images/svg/chem.svg"
            className="mx-auto py-2 mt-4"
          />
        </div>
        <h1 className="text-midblue opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Chemistry
        </h1>
      </div>
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-blue-100 rounded-2xl shadow">
          <img
            src="/images/svg/bio.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Biology
        </h1>
      </div>
    </div>

    <div className="flex flex-row gap-4 mx-auto pt-6 py-8">
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-red-200 rounded-2xl shadow">
          <img
            src="/images/svg/math.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue  opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Math
        </h1>
      </div>
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-green-100 rounded-2xl shadow">
          <img
            src="/images/svg/language.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue  opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Linguistik
        </h1>
      </div>
      <div className="w-1/4">
        <div className="w-[54px] h-[54px] bg-purple-200 rounded-2xl shadow">
          <img
            src="/images/svg/lit.svg"
            className="mx-auto py-3 mt-4"
          />
        </div>
        <h1 className="text-midblue opacity-70 font-semibold text-lg mx-auto dark:text-white">
          Literature
        </h1>
      </div>
    </div>
</div>
  )
}

export default Subjects