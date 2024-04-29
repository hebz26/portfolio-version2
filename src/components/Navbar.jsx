import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#fffde7] text-[1c1c1c] z-20">
      <div>
        <img src={Logo} alt="Logo Initials" style={{ width: "50px" }} />
      </div>

      {/* Menu */}

      <ul className="hidden md:flex text-xl ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li>
          {" "}
          <Link to="work" smooth={true} duration={500} offset={-50}>
            projects
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#fffde7] flex flex-col justify-center items-center -z-10"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            about
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            offset={-50}
          >
            projects
          </Link>
        </li>
      </ul>
      {/* Socials Menu */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#de672a] ">
            <a
              className="flex justify-between items-center w-full text-[#fffde7]"
              href="https://www.linkedin.com/in/heba-sayed6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#d682a1] ">
            <a
              className="flex justify-between items-center w-full text-[#fffde7]"
              href="https://github.com/hebz26"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9bc34f] ">
            <a
              className="flex justify-between items-center w-full text-[#fffde7]"
              href="https://www.instagram.com/hebzstudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
