import React from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const skills = [
  'Python',
  'SQL / PostgreSQL',
  'Tableau',
  'Power BI',
  'Pandas & NumPy',
  'AWS Redshift',
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 flex flex-col items-start max-w-2xl">
      <motion.div
        className="mb-10 w-full sticky top-0 md:relative bg-[#081529]/60 md:bg-transparent backdrop-blur-sm py-4 md:py-0 z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={aboutVariants}
      >
        <h2 className="text-[#ccd6f6] text-xl md:text-2xl font-bold">About Me</h2>
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={aboutVariants}
      >
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          I'm a data professional specializing in analytics and business intelligence, and I love building clear, easy-to-understand data narratives. I really enjoy working at the intersection of business strategy and engineering, where I can take messy datasets and turn them into insights that actually mean something to people.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          Right now, I'm working as a Data Analytics Consultant for Blue Horse Digital, focusing on enterprise AI projects. Basically, my job is to dig into the data, set up reliable ETL pipelines, and work with leadership to build dashboards that track the performance of their new AI tools. It's all about making sure the data is accurate and the ROI is clear.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          Before this, I had the chance to work in a bunch of different places, from doing research at George Mason University to working at a startup like Elite Micro Systems and an NGO like U&I Trust. Along the way, I've also spent some free time building my own machine learning projects and interactive dashboards. These experiences really shaped my approach to data: it needs to be technically solid, but it's completely useless if the people running the business can't understand it.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          When I'm completely offline, you can usually find me playing video games, totally locked into a game of chess, hiking a new trail, or on the squash court.
        </p>
        <p className="text-[#8892b0] leading-relaxed mb-4">
          Here are a few tools and technologies I work with most:
        </p>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-[#8892b0] text-sm font-mono">
          {skills.map(skill => (
            <li key={skill} className="flex items-center">
              <span className="text-[#64ffda] mr-2">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
} 