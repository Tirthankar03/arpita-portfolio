import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { containerL, containerR, containerT } from "../utils/helpers";

const Projects = () => {
  return (
    <div className="border-b border-slate-800 pb-4">
      <motion.h1
        variants={containerT(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              variants={containerL(0.2)}
              initial="hidden"
              whileInView="visible"
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              variants={containerR(0.2)}
              initial="hidden"
              whileInView="visible"
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded-lg bg-slate-200 px-2 py-1 text-sm font-medium text-black"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
