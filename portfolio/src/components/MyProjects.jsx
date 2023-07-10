// import React from "react";
// import Bg from "../assets/MyProject_Bg.png";
// import Card from "./Project_Card";
// function MyProjects() {
//   return (
//     <>
//       <div className="z-0 relative h-auto">
//         <img src={Bg} alt="NB" className="max-w-full max-h-full" />
//         <div className="top-8 left-8 right-8 absolute md:top-24 md:left-24 md:right-24  flex flex-col ">
//           <div className="relative font-bold text-5xl font-poppins">
//             My Recent Projects
//           </div>
//           <div className="relative py-8">See All -{">"}</div>
//           <div className="relative">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default MyProjects;

import React from "react";
import Bg from "../assets/MyProject_Bg.png";
import Card from "./Project_Card";

function MyProjects() {
  return (
    <>
      <div className="z-0 relative h-auto">
        <img src={Bg} alt="NB" className="max-w-full max-h-full" />
        <div className="top-8 left-8 right-8 absolute md:top-24 md:left-24 md:right-24 flex flex-col">
          <div className="relative font-bold text-5xl font-poppins">
            My Recent Projects
          </div>
          <div className="relative py-8">See All -{">"}</div>
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className="w-full">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProjects;

