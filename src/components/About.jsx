import React from 'react';
import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const skills = [
  'JavaScript (ES6+)',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'AWS',
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
          Hello! I'm <span className="text-[#ccd6f6] font-semibold">Shaunak</span>, a <span className="text-[#ccd6f6] font-semibold">data analyst</span> and <span className="text-[#ccd6f6] font-semibold">software engineer</span> passionate about turning data into actionable insights and building <span className="text-[#ccd6f6] font-semibold">modern web experiences</span>. I enjoy solving complex problems and collaborating with others to create impactful solutions.
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p className="text-[#8892b0] mb-4 leading-relaxed">
          Fast-forward to today, and I've had the privilege of building software for an <span className="text-[#ccd6f6] font-semibold">advertising agency</span>, a <span className="text-[#ccd6f6] font-semibold">startup</span>, a <span className="text-[#ccd6f6] font-semibold">huge corporation</span>, and a <span className="text-[#ccd6f6] font-semibold">student-led design studio</span>.
        </p>
        <p className="text-[#8892b0] leading-relaxed mb-4">
          Here are a few technologies I've been working with recently:
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