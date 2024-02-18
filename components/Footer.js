import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-800">
      <div className="relative grid grid-cols-1 gap-2 lg:grid-cols-3 lg:place-items-center clear-right w-screen text-gray-400 bg-slate-800  overflow-hidden">
        <div className="px-4 lg:place-items-center">
          <h1 className="text-clampsize">Heading</h1>
          <p className="text-2xl">content one </p>
          <div className="text-lg">other contents</div>footer 1
        </div>
        <div className=" lg:border-gray-950 px-4 lg:border-x-[3px] lg:grid  border-y-8 lg:border-y-0 border-yellow-200 lg:place-items-center">
          <h1 className="text-clampsize">Heading</h1>
          <p className="text-2xl">content one </p>
          <div className="text-lg">other contents</div>Footer2
        </div>
        <div className="px-4 lg:place-items-center ">
          <h1 className="text-clampsize">Heading</h1>
          <p className="text-2xl">content one </p>
          <div className="text-lg">other contents</div>Footer3
        </div>
      </div>
      <p className="text-sm flex justify-center pt-5 text-white">
        &copy; Copyright 2023
      </p>
    </footer>
  );
}
