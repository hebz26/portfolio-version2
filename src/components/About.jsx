import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#fffde7] text-[#1c1c1c]">
      <div className="flex flex-col  justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold title-font inline border-b-4 border-[#9bc34f]">
              about me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hey there, it's Heba here. Let me tell you a bit <br /> about
              myself.
            </p>
          </div>
          <div>
            <p className="text-xl">
              I'm driven and enthusiastic student pursuing a Bachelor's degree
              in Software Engineering. Currently approaching my senior year, I
              am deeply passionate about front-end development and design. In my
              spare time, I'm all about getting creative – you'll find me
              doodling, editing videos, painting, and diving into other artistic
              adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
