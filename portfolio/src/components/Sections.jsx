import React from "react";
// import Background from "../assets/Below_Project.png";
import SectionCard from "./SectionCard";
import SectionCard2 from "./SectionCard2";
import SectionCard3 from "./SectionCard3";
function Sections() {
  return (
    <>
      <div className="z-0 relative pb-8">
        <div className="flex flex-col md:flex-row gap-auto px-24">
          <div className="flex-1 p-2"><SectionCard/></div>
          <div className="flex-1 p-2"><SectionCard2/></div>
          <div className="flex-1 p-2"><SectionCard3/></div>
        </div>
      </div>
    </>
  );
}

export default Sections;
