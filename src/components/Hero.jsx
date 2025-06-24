import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-start p-8 md:p-20 -mt-8 min-h-[30vh]">
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >Shaunak Divati</motion.h1>
      <motion.h2
        className="text-lg md:text-xl font-normal text-white mb-2 leading-tight"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >Front End Engineer</motion.h2>
      <motion.p
        className="max-w-lg text-[#8892b0] mb-6 text-base leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        I build accessible, pixel-perfect digital<br />
        experiences for the web.
      </motion.p>
    </section>
  );
} 