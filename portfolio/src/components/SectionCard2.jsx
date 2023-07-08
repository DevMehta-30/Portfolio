import React, { useState } from "react";
import Section2 from "../assets/Section2.png";
import VerticalText from "./Vertical";

export default function SectionCard2() {
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
              src={Section2}
              alt="Blue Section"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute">
              <VerticalText text="CERTIFICATIONS" />
            </div>
          </div>
        )}

        {hovered && (
          <div className="absolute inset-0 ">
            <img
              src={Section2}
              alt="Blue Section"
              className="relative w-full h-full object-cover opacity-25"
            />
            <div className="absolute top-12 left-12 font-bold text-xl flex items-center justify-center w-[8em] h-[2em] rounded-full text-green-700 font-poppins border bg-white">
              Courses
            </div>
            <div className="absolute bottom-28 left-12 text-3xl font-poppins font-bold ">
              Courses and Certifications
            </div>
            <div className="absolute bottom-16 left-12 font-poppins text-slate-700">
              You can see all my Courses and Certifications here......
            </div>
          </div>
        )}
      </div>
    </>
  );
}
