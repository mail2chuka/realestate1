import Image from "next/image";
import React from "react";
import { sliderData } from "./Hero";

export default function Hero2() {
  return (
    <div className=" h-screen max-h-1100 relative overflow-hidden">
      <div className="w-full h-full flex justify-center overflow-hidden relative">
        {sliderData.map((slider, index) => {
          <div className=" z-1 w-full h-full" key={index}>
            <div
              className="absolute top-0 left-0 w-full h-full flex 
            items-center justify-center before:content before:absolute
            before:z-[2] before:w-full before:h-full before:bottom-[0vh] before:left-0 before:overflow-hidden before:opacity-40
            before:bg-[linear-gradient (0deg, rgba(0,0,0,0.2)0%, rgba(0,0,0,0.2)50%, rgba(0,0,0,0.6)100%)]  }"
            >
              {" "}
              where all my content
              <Image
                className="absolute left-0 top-0 w-screen h-screen object-cover"
                src={slider.image}
                alt={slider.alt}
              />
              <div className="content">
                <div className="button"></div>
              </div>
            </div>
          </div>;
        })}

        <div className="slider Buttons"></div>
      </div>
    </div>
  );
}
