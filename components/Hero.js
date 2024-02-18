import React, { useState, useRef, useEffect } from "react";
import ImageOne from "../public/images/house1.jpg";
import ImageTwo from "../public/images/house2.jpg";
import ImageThree from "../public/images/house3.jpg";
import ImageFour from "../public/images/house4.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export const sliderData = [
  {
    title: "Luxury Villa 1",
    price: "N 200,000,000",
    path: "#",
    label: "View Home",
    image: ImageOne,
    alt: "house",
  },
  {
    title: "Luxury Villa 2",
    price: "N 300,000,000",
    path: "#",
    label: "View Home",
    image: ImageTwo,
    alt: "house",
  },
  {
    title: "Luxury Villa 3",
    price: "N 400,000,000",
    path: "#",
    label: "View Home",
    image: ImageThree,
    alt: "house",
  },
  {
    title: "Luxury Villa 4",
    price: "N 500,000,000",
    path: "#",
    label: "View Home",
    image: ImageFour,
    alt: "house",
  },
];

/* ${
  index < current
    ? isNext
      ? "-translate-x-full"
      : "translate-x-full"
    : index > current
    ? isNext
      ? "translate-x-full"
      : "-translate-x-full"
    : ""
} 
for slide
*/
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const length = sliderData.length;
  const timeout = useRef(null);

  useEffect(() => {
    const slide = () => {
      if (isNext) {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setIsNext(true);
      } else {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setIsNext(false);
      }
    };
    timeout.current = setTimeout(slide, 5000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    setIsNext(true);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    setIsNext(false);
  };
  return (
    <div className="h-screen w-screen max-h-1100 relative top-0 left-0 columns-1 overflow-hidden">
      <div className="w-full bg-gradient-to-r from-blue-500 to-transparent h-full flex justify-center items-center overflow-hidden relative">
        {sliderData.map((slides, index) => (
          <div
            className={`h-screen w-screen overflow-hidden absolute top-0 left-0 transition-all duration-1000 ${
              index === current
                ? "transform scale-100 opacity-100"
                : "transform scale-150 opacity-50"
            }`}
            key={index}
          >
            {index === current && (
              <div className="absolute top-0 left-0 w-screen h-full cursor-pointer overflow-hidden flex items-center justify-center">
                <Link href={slides.path} className="">
                  <Image
                    src={slides.image}
                    alt={slides.alt}
                    sizes="100vh, 100vw"
                    className="absolute w-screen h-screen object-cover top-0 lg:top-10 left-0 overflow-hidden"
                    placeholder="blur"
                  />

                  <div className="absolute bottom-28 mb-0 bg-gradient-to-r from-red-300 to-transparent rounded-xl max-w-7xl grid-cols-1">
                    <h1 className="text-4xl text-clampsize shadow-slate-50 mb-3 text-left uppercase">
                      {slides.title}
                    </h1>
                    <div className=" w-40 cursor-pointer flex items-center content-between whitespace-nowrap primary-button">
                      {" "}
                      {slides.label}
                      <IoMdArrowRoundForward />
                    </div>
                    <p>{slides.price}</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-12 z-10 right-12 flex">
        {" "}
        <div onClick={prevSlide} className="arrowBtn">
          <IoArrowBack />
        </div>
        <div onClick={nextSlide} className="arrowBtn">
          <IoArrowForward />
        </div>
      </div>
    </div>
  );
}
