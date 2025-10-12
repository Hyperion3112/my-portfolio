import React from 'react';
import { motion } from 'framer-motion';

const experienceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Elite Microsystems',
    period: 'AUG 2021 - JUL 2023',
    description:
      `Improved operational efficiency by 15% through SQL & Python analyses and stakeholder reporting. Reduced data retrieval time by 25% via optimized ETL pipelines and automated tasks. Boosted client decision-making by 30% with interactive Tableau dashboards and training.`,
    tech: ['SQL', 'Python', 'Tableau'],
    link: 'https://emplindia.com/',
  },
  {
    title: 'Data Analyst Intern',
    company: 'U&I Trust',
    period: 'Nov 2020 – Jan 2021',
    description:
      `Analyzed and cleaned over 500 candidate profiles using Excel and SQL, improving data accuracy by 40% and standardizing onboarding templates. Automated data workflows with Python and VBA, reducing manual effort by 50% and accelerating weekly report generation. Performed exploratory data analysis on candidate metrics, presented findings to HR, and increased engagement rates by 20% through targeted outreach. Developed Power BI dashboards, documented ETL processes, and facilitated knowledge transfer to junior interns.`,
    tech: ['Excel', 'SQL', 'Python', 'VBA', 'Power BI'],
    link: 'https://uandi.org.in/',
  },
];

export default function Experience() {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="pt-12">
        <motion.div
          className="flex items-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={experienceVariants}
        >
          <h2 className="text-[#ccd6f6] text-2xl font-bold mr-4">Education</h2>
          <div className="flex-1 h-px bg-[#233554]"></div>
        </motion.div>
        <div className="flex flex-col gap-12">
          {/* GMU Entry */}
          <motion.div
            className="rounded-2xl p-0 max-w-3xl transition-all duration-200 bg-transparent border-transparent shadow-none border group hover:bg-[#112240] hover:shadow-[0_4px_32px_0_rgba(100,255,218,0.10)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={experienceVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch md:gap-x-[10rem]">
              {/* Left: Years */}
              <div className="col-span-1 flex items-start px-6 py-4">
                <span className="text-[#8892b0] font-mono text-xs tracking-wide whitespace-nowrap mt-1 group-hover:text-white transition-colors duration-200">AUG 2023 – MAY 2025</span>
              </div>
              {/* Right: Content */}
              <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                <span className="text-[#ccd6f6] text-base font-semibold mb-1 group-hover:text-[#64ffda] transition-colors duration-200">George Mason University: College of Engineering and Computing</span>
                <span className="text-white text-base font-normal mb-1 group-hover:text-[#64ffda] transition-colors duration-200">MS in Computer Science</span>
                <span className="text-[#8892b0] text-sm group-hover:text-white transition-colors duration-200">Fairfax, VA, USA</span>
              </div>
            </div>
          </motion.div>
          {/* Mumbai Entry */}
          <motion.div
            className="rounded-2xl p-0 max-w-3xl transition-all duration-200 bg-transparent border-transparent shadow-none border group hover:bg-[#112240] hover:shadow-[0_4px_32px_0_rgba(100,255,218,0.10)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={experienceVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 items-stretch md:gap-x-[10rem]">
              {/* Left: Years */}
              <div className="col-span-1 flex items-start px-6 py-4">
                <span className="text-[#8892b0] font-mono text-xs tracking-wide whitespace-nowrap mt-1 group-hover:text-white transition-colors duration-200">AUG 2017 – JUL 2021</span>
              </div>
              {/* Right: Content */}
              <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                <span className="text-[#ccd6f6] text-base font-semibold mb-1 group-hover:text-[#64ffda] transition-colors duration-200">University of Mumbai: Vidyalankar Institute of Technology</span>
                <span className="text-white text-base font-normal mb-1 group-hover:text-[#64ffda] transition-colors duration-200">BE in Computer Engineering</span>
                <span className="text-[#8892b0] text-sm group-hover:text-white transition-colors duration-200">Mumbai, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Experience Section */}
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
              className="rounded-2xl p-0 max-w-3xl transition-all duration-200 bg-transparent border-transparent shadow-none border group hover:bg-[#112240] hover:shadow-[0_4px_32px_0_rgba(100,255,218,0.10)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={experienceVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 items-stretch md:gap-x-[10rem]">
                {/* Year and job title/company on the same row */}
                <div className="col-span-1 flex items-start px-6 py-4">
                  <span className="text-[#8892b0] font-mono text-xs tracking-wide whitespace-nowrap mt-1 group-hover:text-white transition-colors duration-200">{exp.period}</span>
                </div>
                <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                  <div className="flex items-center flex-wrap mb-2 w-full">
                    <span className="text-[#ccd6f6] text-base font-semibold group-hover:text-[#64ffda] transition-colors duration-200">
                      {exp.title}
                    </span>
                    {exp.company && (
                      <>
                        <span className="text-[#8892b0] mx-2 text-base">·</span>
                        {exp.link ? (
                          <a 
                            href={exp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`text-base font-normal ${exp.company === 'Elite Microsystems' || exp.company === 'U&I Trust' ? 'text-white group-hover:text-[#64ffda]' : 'text-[#64ffda] group-hover:text-white'} transition-colors duration-200 hover:underline`}
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className={`text-base font-normal ${exp.company === 'Elite Microsystems' || exp.company === 'U&I Trust' ? 'text-white group-hover:text-[#64ffda]' : 'text-[#64ffda] group-hover:text-white'} transition-colors duration-200`}>
                            {exp.company}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <div className="text-[#8892b0] leading-relaxed mb-4 max-w-2xl group-hover:text-white transition-colors duration-200">
                    {exp.description}
                  </div>
                  {exp.tech && (
                    <div className="flex flex-wrap gap-4 mt-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="bg-[#233554] text-[#64ffda] px-2 py-0.5 rounded-full text-[11px] font-mono group-hover:text-white transition-colors duration-200">
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
    </>
  );
} 