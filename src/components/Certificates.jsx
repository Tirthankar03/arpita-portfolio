import React from "react";
import { motion } from "framer-motion";
import { containerL, containerR, containerT } from "../utils/helpers";

const CERTIFICATES = [
  {
    title: "Excel Skills for Business Specialization",
    issuer: "Coursera",
    date: "May 2024",
    img: "../src/assets/Excel-Skills-for-Business-Specialization.png",
    pdf: "../src/assets/Excel-Skills-for-Business-Specialization.pdf"
  },
  {
    title: "Dynamic Programming, Greedy Algorithm",
    issuer: "Coursera",
    date: "April 2024",
    img: "../src/assets/Dynamic-Programming-Greedy-Algorithm.png",
    pdf: "../src/assets/Dynamic-Programming-Greedy-Algorithm.pdf"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "March 2024",
    img: "../src/assets/Generative-AI-with-Large-Language-Models.png",
    pdf: "../src/assets/Generative-AI-with-Large-Language-Models.pdf"
  },
];

const Certificates = () => {
  return (
    <div className="border-b border-slate-800 pb-4">
      <motion.h1
        variants={containerT(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        {CERTIFICATES.map((cert, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? containerL(0.2) : containerR(0.2)}
            initial="hidden"
            whileInView="visible"
            className="w-full max-w-xl p-4 lg:w-1/2"
          >
            <div className="rounded-lg border border-slate-800 p-6">
              <h3 className="mb-2 text-xl font-semibold">{cert.title}</h3>
              <p className="text-neutral-400 mb-4">
                {cert.issuer} • {cert.date}
              </p>
              <img
                src={cert.img}
                alt={`${cert.title} certificate`}
                className="mb-4 rounded-md shadow-md"
              />
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded  bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
              >
                View PDF
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
