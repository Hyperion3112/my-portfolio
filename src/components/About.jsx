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
    <section id="about" className="py-24 flex flex-col items-start max-w-2xl">
      <motion.div
        className="flex items-center mb-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={aboutVariants}
      >
        <h2 className="text-[#ccd6f6] text-2xl font-bold mr-4">About Me</h2>
        <div className="flex-1 h-px bg-[#233554]"></div>
      </motion.div>
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={aboutVariants}
      >
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          Hello! I'm <span className="text-[#ccd6f6] font-semibold">Shaunak</span>, a <span className="text-[#ccd6f6] font-semibold">data analyst</span> who loves to dive deep into data and surface clear, actionable insights. From building dashboards that empower executives to automating data pipelines that save hours every week, I enjoy turning messy datasets into stories that drive business decisions.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          Over the past few years I've analysed millions of rows of marketing, product-usage, and operational data for a <span className="text-[#ccd6f6] font-semibold">fast-growing SaaS company</span> and a <span className="text-[#ccd6f6] font-semibold">non-profit organisation</span>. My work has helped reduce costs, uncover growth opportunities, and improve user experiences.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          When I'm not wrangling data you can find me reading about the latest in behavioural analytics.
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