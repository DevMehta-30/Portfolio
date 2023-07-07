import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/landing";
import MyProjects from "../../components/MyProjects";
import Sections from "../../components/Sections";
function index() {
  return (
    <>
      <Navbar />
      <Landing />
      <MyProjects />
      <Sections />
      {/* <Footer /> */}
    </>
  );
}
export default index;
