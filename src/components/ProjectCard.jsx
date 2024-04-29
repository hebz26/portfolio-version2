import React from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  codeLink,
  videoLink,
  demoLink,
}) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-md shadow-md p-6 mb-4 mx-auto max-w-[300px] max-h-[500px] transition-transform duration-300 transform hover:scale-105 -z-10">
      <img src={imageUrl} alt={title} className="mt-4 rounded-lg" />

      <h3 className="text-2xl font-semibold mb-2 pt-5 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>

      <div className="mt-4 flex justify-center">
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#9bc34f] text-white px-4 py-2 mr-2 rounded-lg">
              Code
            </button>
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#d682a1] text-white px-4 py-2 mr-2 rounded-lg">
              Demo
            </button>
          </a>
        )}
        {videoLink && (
          <a href={videoLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-[#de672a] text-white px-4 py-2 rounded-lg">
              Video Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
