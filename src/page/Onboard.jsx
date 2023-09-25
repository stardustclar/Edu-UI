import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { data } from "../comp/Pics";
import Navbar from "../comp/Navbar";

function Onboard() {
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
    <>
    <Navbar />
    <div className="max-w-[375px] h-[812x] m-auto pt-16 px-10 relative group">
      {/* <div className='mb-8'>
          <h1 className='text-md uppercase text-center'>adoption pet</h1>
          <h2 className='text-3xl lg:text-4xl text-center'>Adopt the pet that has waited too long</h2>
          <p className='text-sm text-slate-500 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. It ac purus eget. Sit dolor est proin vestibulum, duis. im dolor sit amet, consectetur adipisci.</p>
        </div> */}

      <div
        style={{ backgroundImage: `url(${data[currentIndex].img})` }}
        className="w-[343px] h-[298px] rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="inset-0 py-4 pt-6 flex items-center justify-center">
        <p className="text-zinc-800 text-5xl font-extrabold font-Poppins text-center">{data[currentIndex].sub}</p>
      </div>

      <div className="inset-0 flex items-center justify-center">
        <p className="text-zinc-800 text-md font-normal font-Poppins text-center">{data[currentIndex].text}</p>
      </div>

      <button className="bg-blue-500 text-white rounded-full px-7 py-2 my-4 mx-20">Get Started</button>

      {/* Left Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className="flex top-40 mx- justify-center py-2">
        {data.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled color="grey" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Onboard;
