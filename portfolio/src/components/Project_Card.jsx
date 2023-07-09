// import React from "react";
// import { useEffect, useState } from "react";
// import Bg from "../assets/Card.png";
// import Img1 from "../assets/Img1.png";

// const Card = ({ Name, Desc }) => {
//   return (
//     <>
//       <div className="z-0 relative mb-8 w-full h-[24rem] bg-[#FFF8F2] rounded-lg ">
//         <div className="absolute top-0 left-0 right-0 bottom-0 flex">
//           <div className="grid grid-rows-3 absolute top-20 left-20 content-center">
//             <div className="text-4xl font-bold row-span-1">{Name}</div>
//             <div className="font-medium text-3xl font-poppins row-span-2">
//               <div className="w-[5rem]">{Desc}</div>
//             </div>
//             <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
//               View more
//             </div>
//           </div>
//         </div>
//         <img className="pl-[48rem] max-h-full max-w-full" src={Img1} alt="NB" />
//       </div>
//     </>
//   );
// };

// const Project_Card = () => {
//   const [projects, setProjects] = useState([]);

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
//   const [value, setValue] = useState("");
//   useEffect(() => getProjects(), []);
//   //   useEffect(()=> console.log("Changed"),[value]);
//   return (
//     <>
//       {projects.length > 0 ? (
//         projects.map((element, idx) => {
//           return <Card {...element} />;
//         })
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </>
//   );
// };
// export default Project_Card;

// import React from "react";
// import { useEffect, useState } from "react";
// import Bg from "../assets/Card.png";
// import Img1 from "../assets/Img1.png";

// const Card = ({ Name, Desc }) => {
//   return (
//     <>
//       <div className="z-0 relative mb-8 w-full h-auto bg-[#FFF8F2] rounded-lg ">
//         <div className="relative p-4 md:p-0">
//           <img
//             className="max-h-full max-w-full border border-2 rounded-lg md:border-0 lg:ml-[48rem]"
//             src={Img1}
//             alt="NB"
//             style={{ maxHeight: '24rem' }} // Restrict the image height for consistency
//           />
//           <div className="md:absolute md:bottom-0 md:p-8">
//             <div className="text-4xl font-bold">{Name}</div>
//             <div className="font-medium text-3xl font-poppins">
//               <div className="w-[5rem]">{Desc}</div>
//             </div>
//             <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
//               View more
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const Project_Card = () => {
//   const [projects, setProjects] = useState([]);

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

//   useEffect(() => {
//     getProjects();
//   }, []);

//   return (
//     <>
//       {projects.length > 0 ? (
//         projects.map((element, idx) => {
//           return <Card key={idx} {...element} />;
//         })
//       ) : (
//         <h1>Loading</h1>
//       )}
//     </>
//   );
// };

// export default Project_Card;

import React from "react";
import { useEffect, useState } from "react";
import Img1 from "../assets/Img1.png";

const Card = ({ Name, Desc }) => {
  return (
    <>
      <div className="z-0 relative mb-8 w-full bg-[#FFF8F2] rounded-[48px] overflow-hidden">
        <div className="relative p-4 md:p-0 ">
          <div className="md:flex">
            <div className="md:w-1/2 p-12">
              <div className="text-4xl font-bold">{Name}</div>
              <div className="font-medium text-3xl font-poppins">
                <div className="w-[5rem]">{Desc}</div>
              </div>
              <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
                View more
              </div>
            </div>
            <img
              className="h-auto w-full p-4 rounded-lg md:w-1/2 "
              src={Img1}
              alt="NB"
            />
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
      ];
      setProjects(temp);
    }, 3000);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {projects.length > 0 ? (
        projects.map((element, idx) => {
          return <Card key={idx} {...element} />;
        })
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default Project_Card;
