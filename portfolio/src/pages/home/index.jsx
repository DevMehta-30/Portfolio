import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/landing";
import MyProjects from "../../components/MyProjects";
import Sections from "../../components/Sections";
import Footer from "../../components/Footer";

function Index() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <div>
          <Landing />
        </div>
        <div className="pt-12 md:pt-0">
          <MyProjects />
        </div>
        <div className="pt-24 md:pt-0">
          <Sections />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
