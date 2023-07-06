import React from "react";

function Navbar() {
  return (
    <nav className="z-10 sticky top-0 bg-[#FFFFFF] h-14">
      <div className="flex items-center font-medium justify-around">
        <div className="px-2 font-bold text-black text-3xl py-3 ">Dev Mehta</div>
        <ul className="flex items-center gap-8">
          <li>AboutMe</li>
          <li>My Projects</li>
          <li>Certifications</li>
          <li>Work Experiences</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
