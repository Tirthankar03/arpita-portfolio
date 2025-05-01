import React from "react";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";
import { containerL, containerT, iconVariants } from "../utils/helpers";
import { SiRedux } from "react-icons/si";
import reactQuery from '../assets/dmc.jpg'
import rhf from '../assets/rh3.png'
import chakra from '../assets/chakra.png'
import { SiShadcnui } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReacthookform } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
const Technologies = (Linear) => {
  return (
    <div className="border-b border-slate-800 pb-24">
      <motion.h1
        variants={containerT(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl"
      >
        Technologies | Frameworks
      </motion.h1>
      <motion.div
        variants={containerL(0)}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <RiReactjsLine className="p-2 text-7xl text-cyan-200" />
        </div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <TbBrandNextjs className="p-2 text-7xl text-slate-200" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <FaNodeJs className="p-2 text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <SiMongodb className="p-2 text-7xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <IoLogoFirebase className="text-7xl text-yellow-400 p-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <SiRedux className="p-2 text-7xl text-purple-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
        <img src={reactQuery} height={50} width={72} className="p-1" alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <SiZod className="p-2 text-7xl text-blue-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
        <img src={rhf} height={50} width={72} className="p-2 text-white " alt="" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <RiTailwindCssFill className="p-3 text-7xl text-blue-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <SiShadcnui className="p-4 text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black "
        >
                 <img src={chakra} height={100} width={72} className="object-contain p-2 text-white " alt="" />


        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-400 bg-black"
        >
          <SiMui className="p-3 text-7xl text-blue-400" />
        </motion.div>




        
      </motion.div>

      
    </div>
  );
};

export default Technologies;
