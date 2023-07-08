import React, { useState } from "react";
import Section3 from "../assets/Section3.png";
import VerticalText from "./Vertical";

export default function SectionCard3() {
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
          <div>
            <img
              src={Section3}
              alt="Blue Section"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute">
              <VerticalText text="ABOUT ME" />
            </div>
          </div>
        )}

        {hovered && (
          <div className="absolute inset-0 ">
            <img
              src={Section3}
              alt="Blue Section"
              className="relative w-full h-full object-cover opacity-25"
            />
            <div className="absolute top-12 left-12 font-bold text-xl flex items-center justify-center w-[8em] h-[2em] rounded-full text-yellow-500 font-poppins border bg-white">
              WhoAmI?
            </div>
            <div className="absolute bottom-28 left-12 text-3xl font-poppins font-bold ">
              About Me
            </div>
            <div className="absolute bottom-16 left-12 font-poppins text-slate-700">
              If you want to get to know me more.....
            </div>
          </div>
        )}
      </div>
    </>
  );
}
