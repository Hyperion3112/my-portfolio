import React from 'react';
import { motion } from 'framer-motion';

const projectsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const projects = [
  {
    title: 'University Admissions Dashboard',
    tech: ['Salesforce', 'Tableau'],
    description: 'Improved data accuracy by 25% on 1000+ records with advanced preprocessing. Delivered actionable insights optimizing recruitment strategies.',
    link: '',
  },
  {
    title: 'Traffic & Conversion Analysis',
    tech: ['Python', 'SQL', 'Tableau'],
    description: 'Identified a 35% funnel drop-off and optimized UX to increase conversions. Revealed 20% higher conversion rates from organic channels.',
    link: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        className="flex items-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={projectsVariants}
      >
        <h2 className="text-[#ccd6f6] text-2xl font-bold mr-4">Some Things I've Built</h2>
        <div className="flex-1 h-px bg-[#233554]"></div>
      </motion.div>
      <div className="grid gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="group relative bg-[#112240] p-8 rounded-lg border border-[#233554] hover:border-[#64ffda]/50 transition-colors duration-200 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={projectsVariants}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[#ccd6f6] font-semibold text-xl group-hover:text-[#64ffda] transition-colors duration-200">
                  {proj.title}
                </h3>
                {proj.link && (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#64ffda] hover:text-[#64ffda]/80 transition-colors duration-200"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-[#8892b0] leading-relaxed mb-4 flex-grow">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto">
                {proj.tech.map(tech => (
                  <span key={tech} className="text-[#8892b0] text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 