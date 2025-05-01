import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import arpitaCV from "../assets/arpitaCV.pdf";
import { CONTACT } from "../constants";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-end py-6">
      {/* <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="" srcset="" />
      </div> */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={CONTACT.github}>
        <FaGithub />
        </a>
        <a href={CONTACT.linkedin}>
        <FaLinkedin />
        </a>
        <a href={arpitaCV} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm hover:bg-slate-700">
          <FaFilePdf />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
