import React from "react";
import LinkedIn from "../assets/LinkedIn.png"
import Github from "../assets/github.png"
import Instagram from "../assets/Instagram.png"
export default function Footer() {
  return (
    <>
      <div className="w-full z-0 h-60 bg-gradient-to-l from-yellow-100">
        <div className="flex py-8 justify-center items-center w-full">
          <div className="bg-[#FFDDBF] w-48 h-16 text-xl flex justify-center items-center rounded-lg font-semibold font-poppins">
            Follow me on 👇
          </div>
        </div>
        <div className="flex justify-center items-center pt-8">
          <a href="https://www.linkedin.com/in/devmehta30/">
            <img src={LinkedIn} alt="" className="h-14"/>
          </a>
          <a href="https://github.com/DevMehta-30">
            <img src={Github} alt="" className="h-14"/>
          </a>
          <a href="https://www.instagram.com/dev_mehta_03/">
            <img src={Instagram} alt="" className="h-14"/>
          </a>
        </div>
      </div>
    </>
  );
}
