import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import GDCard from "./GDCard";
import projects from "./projects-list";
import gdProjects from "./gd-list";
import ClipLoader from "react-spinners/ClipLoader";

const Work = () => {
  const [activeTab, setActiveTab] = useState("dev");
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setActiveTab(tab); // Switch tab
      setLoading(false); // Stop loading
    }, 500); // Simulated loading delay
  };

  return (
    <div
      name="work"
      className="bg-[#fffde7] w-full h-full text-[#1c1c1c] pb-[100px]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="title-font text-4xl font-bold inline border-b-4 text-[#1c1c1c] border-[#de672a]">
            work
          </p>
          <p className="py-6 text-xl">check out some of my recent work 👀</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handleTabChange("dev")}
            className={`px-4 py-2 rounded ${
              activeTab === "dev"
                ? "bg-[#de672a] text-white"
                : "bg-gray-300 text-[#1c1c1c]"
            }`}
          >
            Development
          </button>
          <button
            onClick={() => handleTabChange("gd")}
            className={`px-4 py-2 rounded ${
              activeTab === "gd"
                ? "bg-[#de672a] text-white"
                : "bg-gray-300 text-[#1c1c1c]"
            }`}
          >
            Design
          </button>
        </div>

        {/* Show Spinner While Loading */}
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <ClipLoader color="#de672a" size={50} />
          </div>
        ) : (
          <>
            {/* Display disclaimer if Graphic Design tab is active */}
            {activeTab === "gd" && (
              <p className="text-center text-lg mb-6">
                For more work, check my{" "}
                <a
                  href="https://www.instagram.com/hebzstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#de672a] font-bold hover:underline"
                >
                  Instagram
                </a>
                .
              </p>
            )}

            {/* Grid Container */}
            <div
              className={`grid gap-4 z-10 ${
                activeTab === "dev"
                  ? "sm:grid-cols-2 md:grid-cols-3"
                  : "sm:grid-cols-1 md:grid-cols-2"
              }`}
            >
              {/* Render Dev Work or Graphic Design */}
              {activeTab === "dev"
                ? projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      codeLink={project.codeLink}
                      demoLink={project.demoLink}
                      videoLink={project.videoLink}
                    />
                  ))
                : gdProjects.map((project, index) => (
                    <GDCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      behanceLink={project.behanceLink}
                    />
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Work;
