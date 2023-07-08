import React, { useState } from "react";
import Blue from "../assets/BlueSection.png";
import Yellow from "../assets/Yellow2.png";
import Pink from "../assets/Pink1.png";
export default function SectionCard() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div
        className="relative px-8 pt-8 w-[24rem] h-[24rem] rounded-[24px] border overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!hovered && (
          <img
            src={Yellow}
            alt="Blue Section"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {hovered && (
          <div className="absolute inset-0 ">
            <img
              src={Pink}
              alt="Blue Section"
              className="relative w-full h-full object-cover"
            />
            <div className="absolute top-12 left-12 font-bold text-xl flex items-center justify-center w-[6em] h-[2em] rounded-full text-yellow-600 font-poppins border bg-white">Who Am I?</div>
            <div className="absolute bottom-28 left-12 text-3xl font-poppins font-bold ">About Me</div>
            <div className="absolute bottom-20 left-12 font-poppins text-slate-400">Learn more about me ......[read more]</div>
          </div>
        )}
      </div>
      {/* <div className="px-28 py-8 flex flex-col-3 gap-20">
        <div
          className="w-[24rem] h-[24rem] rounded-[28px] border"
          style={{
            backgroundImage: `url(${Blue})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[24rem] h-[24rem] rounded-[28px] border"
          style={{
            backgroundImage: `url(${Yellow})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="w-[24rem] h-[24rem] rounded-[28px] border"
          style={{
            backgroundImage: `url(${Pink})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* <div className=" flex items-center justify-around w-40 bg-white rounded-full h-12 font-bold font-poppins text-blue-600">
          Work Experiences
        </div>
        <div className="pt-48 text-4xl font-poppins font-semibold">
          Work Experiences
        </div>
        <div className="pt-8 text-slate-400 font-poppins font-medium text-lg">
          This is all the internships and jobs... [read more]
        </div> */}
      {/* </div> */}
    </>
  );
}
