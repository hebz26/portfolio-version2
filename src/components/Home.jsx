import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import doodle from "../assets/doodle-computer.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen  bg-[#fffde7]">
      <div className="max-w-[1200px] mx-auto px-8 flex justify-center h-full">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#1c1c1c]">
            <span className="title-font">Hi, I'm Heba! 👋</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl text-[#1c1c1c]">
            i'm a <span style={{ color: "#9bc34f" }}>developer</span> and{" "}
            <span style={{ color: "#d682a1" }}>designer</span>
          </h2>
          <p className=" text-[#636363] text-xl pb-4 mt-2 max-w-[700px]">
            {" "}
            I'm a Software Engineering student passionate about crafting
            impactful and visually appealing software. I combine development and
            design expertise to create functional, user-friendly solutions that
            stand out.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500} offset={-50}>
              <button className="group text-[#1c1c1c] border-2 border-[#1c1c1c] rounded-[50px] px-4 py-2 my-2 flex items-center hover:bg-[#de672a] hover:border-[#de672a]  hover:text-[#ffffff]">
                View Work
                <span className="duration-300">
                  <HiArrowNarrowDown className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <img src={doodle} alt="computer image" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
