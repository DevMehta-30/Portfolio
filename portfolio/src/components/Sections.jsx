import React from "react";
// import Background from "../assets/Below_Project.png";
import SectionCard from "./SectionCard";
import SectionCard2 from "./SectionCard2";
import SectionCard3 from "./SectionCard3";
function Sections() {
  return (
    <>
      <div className="z-0 relative pb-8">
        <div className="flex flex-col-3 gap-20 px-24 pb-16">
          <div><SectionCard/></div>
          <div><SectionCard2/></div>
          <div><SectionCard3/></div>
        </div>
      </div>
    </>
  );
}

export default Sections;
