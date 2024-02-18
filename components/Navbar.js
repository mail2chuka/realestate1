import Image from "next/image";
import Link from "next/link";
import React from "react";
import Bars from "../public/images/barsImage.svg";
export const menuData = [
  { title: "About", link: "/about" },
  { title: "Homes", link: "/homes" },
  { title: "Rentals", link: "/rentals" },
];
export default function Navbar({ toggle }) {
  return (
    <nav className="lg:bg-red-600 bg-white bg-opacity-80 h-16 flex justify-between items-center mb-4 b px-0 lg:pl-10 lg:pr-28 py-8 w-screen top-0 fixed z-50">
      <div className="left-0 ml-0 ">
        {" "}
        <Link
          href="#"
          className=" text-3xl italic flex items-center py-0 px-4 h-full text-blue-900  lg:text-blue-900  outline-zinc-950 outline-8"
        >
          {" "}
          Zody Properties
        </Link>
      </div>
      <Image
        src={Bars}
        height={50}
        width={50}
        alt="menu"
        className="lg:collapse bg-gray-900 opacity-80 absolute 
        top-0 right-0 transform -translate-x-1/2 translate-y-1/4 
         shadow-black shadow-xl outline-zinc-950 outline-8"
        onClick={toggle}
      />

      <div className="text-white flex items-center collapse lg:visible">
        {menuData.map((item) => (
          <Link key={item.link} href={item.link}>
            <div className="flex items-center py-0 px-4 h-full">
              {item.title}
            </div>
          </Link>
        ))}
        <div
          className="flex  w-28 h-9 border-0 cursor-pointer items-center font-semibold 
        justify-center p-0 uppercase text-white bg-black transition duration-700 
        ease-in-out hover:bg-white hover:text-black"
        >
          <Link href="#">Contact us</Link>
        </div>
      </div>
    </nav>
  );
}
