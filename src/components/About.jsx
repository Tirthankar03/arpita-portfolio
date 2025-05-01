import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import {  containerL, containerR } from "../utils/helpers";

const About = () => {
  return (
    <div className="border-b border-slate-800 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="ml-3 text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          variants={containerL(0.2)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="" srcset="" />
          </div>
        </motion.div>
        <motion.div
          variants={containerR(0.5,0.2)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <p className="my-2 max-w-2xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
