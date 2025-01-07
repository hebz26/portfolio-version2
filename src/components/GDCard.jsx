import React from "react";

const GDCard = ({ title, description, imageUrl, behanceLink }) => {
  return (
    <a
      href={behanceLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[960px] max-h-[540px] rounded-md overflow-hidden shadow-md mx-auto transform transition-transform duration-300 hover:scale-105"
    >
      {/* Card Background (Image) */}
      <div
        className="relative w-full h-0"
        style={{
          paddingBottom: "56.25%", // Aspect ratio 16:9 (1920x1080)
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
          <h3 className="text-white text-2xl font-semibold mb-2 text-center">
            {title}
          </h3>
          <p className="text-white text-center">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default GDCard;
