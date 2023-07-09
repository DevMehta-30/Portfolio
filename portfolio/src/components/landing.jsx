import React from "react";
import Background from "../assets/Background1.png";

function landing() {
  return (
    <>
      <div className="z-0 relative hidden md:flex">
        <img src={Background} alt="Bckground" />
        <div className="absolute top-44 pl-20 w-full">
          <div className="relative flex w-full">
            <div className="absolute left-0">
              <div className="flex items-center font-medium justify-around bg-[#FFDDBF] h-12 w-36 rounded-lg text-xl">
                👋 Hello All
              </div>
            </div>
            <div className="absolute top-4 right-2 pr-16">
              <div className="flex items-center font-medium border-[0.02rem] border-black font-poppins justify-around bg-[#FFFFFF] h-12 w-28 rounded-lg text-xl text-blue-500 ">
                🔔 TECH
              </div>
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="left-0">
              <div className="pt-24 pb-8 text-6xl font-bold">
                I'm Dev,
                <br /> A Problem solver <br /> and a Fun-loving man
              </div>
            </div>
            <div className="absolute pt-60 right-0 pr-10">
              <div className="flex items-center font-medium font-poppins border-[0.02rem] border-black justify-around bg-[#FFFFFF] h-12 w-28 rounded-lg text-xl text-blue-500 ">
                🧑🏻‍💼 PM
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <button className="py-4 px-16 bg-[#FCA61F] rounded-md text-white font-bold">
              About me 👻
            </button>
            <button className="py-4 px-16 border-black border-2 font-bold rounded-md">
              Contact Me📞
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default landing;
