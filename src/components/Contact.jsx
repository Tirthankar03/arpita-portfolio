import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { containerL, containerR, containerT } from "../utils/helpers";

const Contact = () => {
  return (
    <div className="border-b border-slate-800 pb-20">
      <motion.h1
        variants={containerT(0)}
        initial="hidden"
        whileInView="visible"
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          variants={containerL(0.2)}
          initial="hidden"
          whileInView="visible"
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          variants={containerL(0.3)}
          initial="hidden"
          whileInView="visible"
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          variants={containerL(0.4)}
          initial="hidden"
          whileInView="visible"
          href={`mailto:${CONTACT.email}`}
          className="my-4 block border-b hover:text-white"
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          variants={containerL(0.5)}
          initial="hidden"
          whileInView="visible"
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 block border-b hover:text-white"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={containerL(0.6)}
          initial="hidden"
          whileInView="visible"
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 block border-b hover:text-white"
        >
          GitHub
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
