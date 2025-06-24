import React from 'react';
import { motion } from 'framer-motion';

const projectsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const projects = [
  {
    title: 'University Admissions Dashboard',
    image: '/placeholder.png',
    tech: ['Salesforce', 'Tableau'],
    description: 'Improved data accuracy by 25% on 1000+ records with advanced preprocessing. Delivered actionable insights optimizing recruitment strategies.',
    link: '',
  },
  {
    title: 'Traffic & Conversion Analysis',
    image: '/placeholder.png',
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
      <div className="flex flex-col gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            className="group relative rounded-lg border border-transparent bg-transparent transition-all duration-200 p-0 hover:bg-[#112240] hover:shadow-[0_4px_32px_0_rgba(100,255,218,0.10)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={projectsVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch md:gap-x-[10rem]">
              {/* Left: GitHub Logo */}
              <div className="col-span-1 flex items-center justify-center px-6 py-4">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-200"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .318.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z" />
                </svg>
              </div>
              {/* Right: Content */}
              <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                <div className="flex items-center flex-wrap mb-2 w-full">
                  <h3 className="text-[#ccd6f6] font-semibold text-xl mr-2 group-hover:text-[#64ffda] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-2 mt-1 inline-block text-[#64ffda] hover:text-[#64ffda]/80 transition-colors duration-200"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-[#8892b0] leading-relaxed mb-4 flex-grow group-hover:text-white transition-colors duration-200">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech && proj.tech.length > 0 ? (
                    proj.tech.map(tech => (
                      <span key={tech} className="bg-[#233554] text-[#64ffda] px-2 py-0.5 rounded-full text-[11px] font-mono group-hover:text-white transition-colors duration-200">
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#8892b0] text-xs font-mono group-hover:text-white transition-colors duration-200">—</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 