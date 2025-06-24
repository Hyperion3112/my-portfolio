import React from 'react';
import { motion } from 'framer-motion';

const experienceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const experiences = [
  {
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    period: '2024 — PRESENT',
    description:
      `Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.`,
    tech: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
    link: '#', // Example link
  },
  {
    title: 'Data Analyst',
    company: 'Elite Microsystems',
    period: 'Aug 2021 - Jul 2023',
    description:
      `Improved operational efficiency by 15% through SQL & Python analyses and stakeholder reporting. Reduced data retrieval time by 25% via optimized ETL pipelines and automated tasks. Boosted client decision-making by 30% with interactive Tableau dashboards and training.`,
    tech: ['SQL', 'Python', 'Tableau'],
    link: '#',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <motion.div
        className="flex items-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={experienceVariants}
      >
        <h2 className="text-[#ccd6f6] text-2xl font-bold mr-4">Where I've Worked</h2>
        <div className="flex-1 h-px bg-[#233554]"></div>
      </motion.div>
      <div className="flex flex-col gap-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.title}
            className="rounded-2xl p-0 max-w-3xl transition-all duration-200 bg-transparent border-transparent shadow-none hover:bg-[#112240] hover:border-[#64ffda] hover:shadow-[0_4px_32px_0_rgba(100,255,218,0.10)] border group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={experienceVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch md:gap-x-[10rem]">
              {/* Year and job title/company on the same row */}
              <div className="col-span-1 flex items-start px-6 py-4">
                <span className="text-[#8892b0] font-mono text-xs tracking-wide whitespace-nowrap mt-1">{exp.period}</span>
              </div>
              <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                <div className="flex items-center flex-wrap mb-2 w-full">
                  <span className="text-[#ccd6f6] text-base font-semibold mr-2">
                    {exp.title}
                  </span>
                  {exp.company && <span className="text-[#64ffda] text-base font-normal ml-2">· {exp.company}</span>}
                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 mt-1 inline-block">
                      <svg width="18" height="18" fill="#64ffda" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  )}
                </div>
                <div className="text-[#8892b0] leading-relaxed mb-4 max-w-2xl">
                  {exp.description}
                </div>
                {exp.tech && (
                  <div className="flex flex-wrap gap-4 mt-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="bg-[#233554] text-[#64ffda] px-2 py-0.5 rounded-full text-[11px] font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 