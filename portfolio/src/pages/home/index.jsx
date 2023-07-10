import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "../../components/landing";
import MyProjects from "../../components/MyRecProjects";
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
        <div className="pt-8 md:pt-0">
          <MyProjects />
        </div>
        <div>
          <Sections />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
