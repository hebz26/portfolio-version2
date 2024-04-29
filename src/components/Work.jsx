import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects-list";

const Work = () => {
  return (
    <div name="work" className="bg-[#fffde7] w-full md:h-screen text-[#1c1c1c]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="title-font text-4xl font-bold inline border-b-4 text-[#1c1c1c] border-[#de672a]">
            projects
          </p>
          <p className="py-6 text-xl">check out some of my recent work 👀</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 z-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              videoLink={project.videoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
