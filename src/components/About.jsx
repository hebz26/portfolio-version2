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
              I knew I had a creative mind from a very young age. I loved to
              draw, paint, write, video edit, and even film fake movies. I
              enjoyed the creative process behind these little hobbies. This
              pushed me to pursue a Bachelor's degree in Software Engineering. I
              love having the ability to implement creative ideas and
              potentially make an impact. Pursuing this field has even given me
              the chance to practice my design skills. It's the perfect blend of
              technical problem-solving and artistic expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
