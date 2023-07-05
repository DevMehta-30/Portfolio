import React from "react";
import Navbar from "./Navbar";
import Background from "../assets/Background.png"

function landing() {
  return (
    <>
      <body>
        <Navbar />
        <img className="w-full h-full" src={Background} alt="Bckground" />
      </body>
    </>
  );
}
export default landing;
