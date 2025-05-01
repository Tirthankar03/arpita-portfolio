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
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
