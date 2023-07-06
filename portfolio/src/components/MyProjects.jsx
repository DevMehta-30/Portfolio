import React from "react";
import Bg from "../assets/MyProject_Bg.png";
import Card from "./Project_Card"
function MyProjects() {
  return (
    <>
      <div className="z-0 relative">
        <img src={Bg} alt="NB" />
        <div className="absolute top-24 left-24 right-24 bottom-24 flex flex-col">
            <div className="relative font-bold text-5xl font-poppins">My Recent Projects</div>
            <div className="relative py-8">See All -{">"}</div>
            <div className="pb-8"><Card/></div>
        </div>
      </div>
    </>
  );
}
export default MyProjects;
