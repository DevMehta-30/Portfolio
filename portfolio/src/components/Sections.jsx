import React from "react";
// import Background from "../assets/Below_Project.png";
import Blue from "../assets/BlueSection.png";
import Yellow from "../assets/Yellow2.png";
import Pink from "../assets/Pink1.png";
function Sections() {
  return (
    <>
      <div className="z-0 relative pb-8">
        {/* <img src={Background} alt="NB" className="w-full h-[96rem] object-fill" /> */}
        <div className="grid grid-row-2 gap-y-8 absolute top-24 left-24 bottom-24">
          <div className>
            <div className="flex flex-col-2">
              <div className="">
                <img
                  src={Blue}
                  alt=""
                  className="z-20 object-fill w-[48rem] h-[28rem]"
                />
                <div className="absolute top-12 left-16">
                  <div className=" flex items-center justify-around w-40 bg-white rounded-full h-12 font-bold font-poppins text-blue-600">
                    Work Experiences
                  </div>
                  <div className="pt-48 text-4xl font-poppins font-semibold">
                    Work Experiences
                  </div>
                  <div className="pt-8 text-slate-400 font-poppins font-medium text-lg">
                    This is all the internships and jobs... [read more]
                  </div>
                </div>
              </div>
              <div className="pl-8 relative">
                <img
                  src={Yellow}
                  alt=""
                  className="z-20 object-fill w-[32rem] h-[28rem]"
                />
                <div className="absolute top-12 left-16">
                  <div className=" flex items-center justify-around w-40 bg-white rounded-full h-12 font-bold font-poppins text-yellow-600">
                    Who Am I?
                  </div>
                  <div className="pt-48 text-4xl font-poppins font-semibold">
                    About Me
                  </div>
                  <div className="pt-8 text-slate-400 font-poppins font-medium text-lg">
                    Want to get to know me more... [read more]
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <img
                src={Pink}
                alt=""
                className="z-20 object-fill w-[82rem] h-[28rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
