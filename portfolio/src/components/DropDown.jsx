import React, { useState } from 'react';
import Menu from "../assets/Menu.png";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 text-white rounded"
        onClick={toggleDropdown}
      >
        <img src={Menu} alt="" className='h-10 w-10'/>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            AboutMe
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            My Projects
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Certifications
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Work Experiences
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDown;
