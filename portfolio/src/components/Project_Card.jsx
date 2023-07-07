import React from "react";
import { useEffect, useState } from "react";
import Bg from "../assets/Card.png";
import Img1 from "../assets/Img1.png";
// import {initializeApp} from "firebase";
// import { getDatabase, ref as databaseRef, set, get, child } from "firebase/database";
// import firebaseConfig from "../../src/firebase";

// const app = initializeApp(firebaseConfig);
const Card = ({ Name, Desc }) => {
  // const dbRef = databaseRef(getDatabase(app));
  // get(child(dbRef, 'users/')).then((snapshot) => {
  //   if (snapshot.exists()) {
  //       Object.keys(snapshot.val()).forEach((key) => {
  //           console.log(`Name: ${snapshot.val()[key].name}`);
  //           console.log(`Desc: ${snapshot.val()[key].desc}`);
  //       });
  //   } else {
  //       console.log("No data available");
  //   }
  //   }).catch((error) => {
  //       console.error(error);
// });
  return (
    <>
      <div className="z-0 relative pb-8">
        <img src={Bg} alt="NB" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex">
          <div className="grid grid-cols-2">
            <div>
              <div className="grid grid-rows-3 absolute top-20 left-20 content-center">
                <div className="text-4xl font-bold row-span-1">{Name}</div>
                <div className="font-medium text-3xl font-poppins row-span-2">
                  <div className="w-[5rem]">{Desc}</div>
                </div>
                <div className="text-blue-600 text-xl pt-4 font-poppins font-semibold">
                  View more
                </div>
              </div>
            </div>
            <div>
              <img className="object-fill" src={Img1} alt="NB" />
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
      ];
      setProjects(temp);
    }, 3000);
  };
  const [value, setValue] = useState("");
  useEffect(() => getProjects(), []);
  //   useEffect(()=> console.log("Changed"),[value]);
  return (
    <>
      {projects.length > 0 ? (
        projects.map((element, idx) => {
          return <Card {...element} />;
        })
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default Project_Card;
