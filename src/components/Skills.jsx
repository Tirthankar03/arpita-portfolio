import React from "react";
import { motion } from "framer-motion";
import { containerL, containerR, containerT } from "../utils/helpers";

const SKILLS = {
  languages: ["Python", "C", "C++", "Java", "R"],
  frameworks: ["NumPy", "Pandas", "Matplotlib"],
  tools: ["MySQL", "Excel", "Tableau", "Git"],
  softSkills: ["Leadership", "Adaptability", "Problem Solving"]
};

const Skills = () => {
  return (
    <div className="border-b border-slate-800 pb-4">
      <motion.h1
        variants={containerT(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-8">
        <motion.div
          variants={containerL(0.2)}
          initial="hidden"
          whileInView="visible"
          className="w-full max-w-md rounded-lg border border-slate-800 p-6 lg:w-1/4"
        >
          <h3 className="mb-4 text-xl font-semibold">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.languages.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerL(0.3)}
          initial="hidden"
          whileInView="visible"
          className="w-full max-w-md rounded-lg border border-slate-800 p-6 lg:w-1/4"
        >
          <h3 className="mb-4 text-xl font-semibold">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.frameworks.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerL(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-full max-w-md rounded-lg border border-slate-800 p-6 lg:w-1/4"
        >
          <h3 className="mb-4 text-xl font-semibold">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.tools.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerL(0.5)}
          initial="hidden"
          whileInView="visible"
          className="w-full max-w-md rounded-lg border border-slate-800 p-6 lg:w-1/4"
        >
          <h3 className="mb-4 text-xl font-semibold">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.softSkills.map((skill, index) => (
              <span
                key={index}
                className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 