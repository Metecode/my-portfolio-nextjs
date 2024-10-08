import React from "react";
import Hamburger from "../public/assets/projects/hamburgerorder.png";
import Toyota from "../public/assets/projects/toyota.png";
import Weather from "../public/assets/projects/havadurumu.png";
import Person from "../public/assets/projects/crud.png";
import Cart from "../public/assets/projects/cart.png";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Toyota Modernization Project"
            backgroundImg={Toyota}
            projectUrl="/toyota"
            tech="React JS"
          />
          <ProjectItem
            title="Hamburger Order"
            backgroundImg={Hamburger}
            projectUrl="/hamburger"
            tech="React JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={Weather}
            projectUrl="/weather"
            tech="React JS"
          />
          <ProjectItem
            title="CRUD-Redux
             "
            backgroundImg={Person}
            projectUrl="/crud"
            tech="React JS"
          />
           <ProjectItem
            title="Shopping Cart
             "
            backgroundImg={Cart}
            projectUrl="/shoppingcart"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
