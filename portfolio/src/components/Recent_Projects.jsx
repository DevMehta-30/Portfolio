// import React, { useEffect, useState } from "react";
// import Img1 from "../assets/Img1.png";

// const Card = ({ Name, Desc }) => {
//   return (
//     <>
//       <div className="z-0 relative mb-8 w-full bg-[#FFF8F2] rounded-[48px] overflow-hidden">
//         <div className="relative p-4 md:p-0">
//           <div className="md:flex">
//             <div className="md:w-1/2 p-12">
//               <div className="text-4xl font-bold">{Name}</div>
//               <div className="font-medium text-3xl font-poppins">
//                 <div className="w-[5rem]">{Desc}</div>
//               </div>
//               <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
//                 View more
//               </div>
//             </div>
//             <img
//               className="h-auto w-full p-4 rounded-lg md:w-1/2"
//               src={Img1}
//               alt="NB"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Project_Card = () => {
//   const [projects, setProjects] = useState([]);
//   const [currentCard, setCurrentCard] = useState(0);

//   const getProjects = () => {
//     setTimeout(() => {
//       const temp = [
//         {
//           Name: "Project1",
//           Desc: "01",
//         },
//         {
//           Name: "Project2",
//           Desc: "02",
//         },
//         {
//           Name: "Project3",
//           Desc: "03",
//         },
//       ];
//       setProjects(temp);
//     }, 3000);
//   };

//   const handleSwipeRight = () => {
//     setCurrentCard((prevCard) => (prevCard + 1) % projects.length);
//   };

//   useEffect(() => {
//     getProjects();
//   }, []);

//   return (
//     <>
//       <div className="relative w-full">
//         {projects.length > 0 ? (
//           <div className="hidden md:block">
//             {projects.map((project, index) => (
//               <Card key={index} {...project} />
//             ))}
//           </div>
//         ) : (
//           <h1>Loading</h1>
//         )}
//         {projects.length > 1 && (
//           <div className="md:hidden flex justify-end">
//             <div className="text-4xl font-bold">
//               <button onClick={handleSwipeRight}>&#10095;</button>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="md:hidden">
//         {projects.length > 0 ? (
//           <Card {...projects[currentCard]} />
//         ) : (
//           <h1>Loading</h1>
//         )}
//       </div>
//     </>
//   );
// };

// export default Project_Card;

import React, { useEffect, useState } from "react";
import Img1 from "../assets/Img1.png";

const Card = ({ Name, Desc }) => {
  return (
    <>
      <div className="z-0 relative mb-8 w-full bg-[#FFF8F2] rounded-[48px] overflow-hidden">
          <div className="relative p-4 md:p-0">
            <div className="md:flex items-center">
              <img
                className="h-auto w-full p-4 rounded-lg md:w-1/2"
                src={Img1}
                alt="NB"
              />
              <div className="md:w-1/2 p-12">
                <div className="text-4xl font-bold">{Name}</div>
                <div className="font-medium text-3xl font-poppins">
                  <div className="w-[5rem]">{Desc}</div>
                </div>
                <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
                  View more
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

const Project_Card = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    setTimeout(() => {
      const temp = [
        {
          Name: "Project1",
          Desc: "01",
        },
        {
          Name: "Project2",
          Desc: "02",
        },
        {
          Name: "Project3",
          Desc: "03",
        },
        {
          Name: "Project4",
          Desc: "04",
        },
      ];
      setProjects(temp);
    }, 3000);
  };


  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="relative w-full">
        {projects.length > 0 ? (
          <div className="hidden md:block">
            {projects.slice(-3).map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        {projects.length > 1 && (
          <div className="md:hidden">
            {projects.slice(-3).map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Project_Card;
