import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

function Materials() {
  const data = [
    {
      img: "/images/doc.png",
    },
    {
      img: "/images/exam.png",
    },
    {
      img: "/images/passed.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[550px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
      <div className="flex flex-row gap-20 mx-auto">
        <h1 className="text-midblue text-2xl">Materials</h1>
        <img src="/images/prof.svg" className="pb-2" />
      </div>

      <div
        style={{ backgroundImage: `url(${data[currentIndex].img})` }}
        className="rounded-2xl w-72 h-64 bg-center bg-auto mx-auto duration-500"
      ></div>

      {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-40 mx-auto justify-center py-2">
        {data.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {/* <RxDotFilled color="grey" /> */}

            <h1 className="bg-slate-300 rounded-full w-full h-12 my-2 ">Document</h1>
            <h1 className="bg-slate-300 rounded-full w-full h-12 my-2 ">Exam</h1>
            <h1 className="bg-slate-300 rounded-full w-full h-12 my-2 ">Passed</h1>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Materials;
