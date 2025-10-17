import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-start p-4 md:p-8 lg:p-20 md:-mt-8 min-h-[20vh] md:min-h-[30vh]">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >Shaunak Divati</motion.h1>
      <motion.h2
        className="text-base sm:text-lg md:text-xl font-normal text-white mb-2 leading-tight"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >Data Analyst</motion.h2>
      <motion.p
        className="max-w-lg text-[#8892b0] mb-4 md:mb-6 text-sm sm:text-base leading-relaxed"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        I transform complex data into actionable insights<br className="hidden sm:inline" />
        <span className="sm:hidden"> </span>that drive informed business decisions.
      </motion.p>
    </section>
  );
} 