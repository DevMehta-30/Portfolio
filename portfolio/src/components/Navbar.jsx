import React from "react";
import DD from "../components/DropDown";

function Navbar() {
  return (
    <nav className="z-10 sticky top-0 bg-white h-16 w-full">
      <div className="flex flex-rows-2 font-medium md:items-center justify-around">
        <div className="absolute left-0 px-4 font-bold text-black text-3xl py-3 md:relative">
          Dev Mehta
        </div>
        <div className="md:hidden absolute right-0 top-0">
          {" "}
          <DD />
        </div>
        <div className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>AboutMe</li>
            <li>My Projects</li>
            <li>Certifications</li>
            <li>Work Experiences</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
