import React from "react";
import Card from "./Recent_Projects";

function MyRecProjects() {
  return (
    <div className="bg-gradient-to-b from-orange-100">
      <div className="container mx-auto py-16 px-8 md:px-16">
        <h1 className="text-5xl font-bold font-poppins mb-8">My Recent Projects</h1>
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl">See All -&gt;</span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRecProjects;