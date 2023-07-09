import React, { useState } from "react";
import Section1 from "../assets/Section1.png";
import VerticalText from "./Vertical";

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
        className="relative px-8 pt-8 w-auto h-[24rem] lg:h-[24rem] md:h-[20rem] rounded-[24px] border overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!hovered && (
          <div>
            <img
              src={Section1}
              alt="Blue Section"
              className="absolute inset-0 w-full h-full object-cover "
            />
            <div className="absolute">
              <VerticalText text="EXPERIENCES" />
            </div>
          </div>
        )}

        {hovered && (
          <div className="absolute inset-0 ">
            <img
              src={Section1}
              alt="Blue Section"
              className="relative w-full h-full object-cover opacity-25"
            />
            <div className="absolute top-12 left-12 font-bold text-xl flex items-center justify-center w-[8em] h-[2em] rounded-full text-orange-600 font-poppins border bg-white">
              Proficiencies
            </div>
            <div className="absolute bottom-28 left-12 text-3xl font-poppins font-bold ">
              Work Experiences
            </div>
            <div className="absolute bottom-20 left-12 font-poppins text-slate-700">
              Check my previous jobs and internships here......
            </div>
          </div>
        )}
      </div>
    </>
  );
}
