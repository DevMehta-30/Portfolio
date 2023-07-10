// import React from "react";
// import Card from "./Project_Card";
// import { Link } from "react-router-dom";

// function MyProjects() {
//   return (
//     <div className="bg-gradient-to-b from-orange-100">
//       <div className="container mx-auto py-16 px-8 md:px-16">
//         <h1 className="text-5xl font-bold font-poppins mb-8">
//           My Recent Projects
//         </h1>
//         <div className="flex justify-between items-center mb-8 text-xl text-blue-600">
//           <Link to={"/projects"}>See All &rarr;</Link>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="w-full">
//             <Card />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyProjects;

import React from "react";
import Card from "./Project_Card";
import { Link } from "react-router-dom";

function MyProjects() {
  return (
    <div className="bg-gradient-to-b from-orange-100">
      <div className="container mx-auto py-16 px-8 md:px-16">
        <h1 className="text-5xl font-bold font-poppins mb-8">
          My Projects
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
