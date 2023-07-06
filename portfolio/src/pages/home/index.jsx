import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/landing";
import MyProjects from "../../components/MyProjects";
function index() {
  return (
    <>
      <Navbar />
      <Landing />
      <MyProjects />
    </>
  );
}
export default index;
