import React from 'react';
import { motion } from 'framer-motion';

const experienceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const experiences = [
  {
    title: 'Data Engineer (Contract)',
    company: 'Blue Horse Digital',
    period: 'FEB 2026 – PRESENT',
    description:
      "Engineered automated ETL pipelines to centralize siloed enterprise datasets into a single data warehouse, accelerating executive reporting and reducing manual data preparation. Orchestrated data integration workflows to standardize information and minimize reporting errors. Developed executive-facing Tableau dashboards to track supply chain performance, and led data governance initiatives to ensure high data quality and consistency.",
    tech: ['Python', 'Snowflake', 'dbt', 'Tableau', 'ETL/ELT', 'Data Governance'],
    link: 'https://www.bluehorse.ai',
  },
  {
    title: 'Research Assistant (Data Analytics)',
    company: 'George Mason University: School of Computing',
    period: 'JUL 2025 – FEB 2026',
    description:
      "Designed SQL-based data pipelines and automated recurring data workflows using Python to analyze student performance records. Built interactive Power BI dashboards that helped faculty actively engage with students and improve on-time submission rates. Synthesized complex analytical findings into executive-ready 'State of the College' reports to guide major enrollment, retention, and budget decisions.",
    tech: ['SQL', 'Python', 'Apache Airflow', 'Power BI', 'Data Analytics'],
    link: 'https://computing.gmu.edu',
  },
  {
    title: 'Data Analyst',
    company: 'Elite Micro Systems',
    period: 'AUG 2021 - JUL 2023',
    description:
      "Optimized complex SQL queries and database structures to improve transaction success rates for smart payment terminals. Automated routine compliance reporting using Python to eliminate manual effort. Developed interactive Tableau dashboards to proactively monitor the health of regional kiosk deployments, and analyzed retail usage trends to deliver optimization reports that increased terminal ROI.",
    tech: ['SQL', 'Python', 'Tableau', 'REST APIs', 'Data Visualization'],
    link: 'https://emplindia.com/',
  },
  {
    title: 'Data Intern',
    company: 'U&I Trust',
    period: 'NOV 2020 – JAN 2021',
    description:
      "Analyzed student attendance and academic performance data across multiple locations using Excel and data validation techniques. Built reporting frameworks to identify critical learning gaps and consolidate data from multiple sources. Evaluated engagement metrics for newly launched digital libraries, improving visibility for leadership teams and contributing to a successful transition to remote learning.",
    tech: ['Excel', 'Data Analysis', 'Reporting'],
    link: 'https://uandi.org.in/',
  },
];

export default function Experience() {
  return (
    <>
      {/* Education Section */}
      <section id="education" className="pt-6 md:pt-12">
        <motion.div
          className="mb-10 sticky top-0 md:relative bg-[#081529]/60 md:bg-transparent backdrop-blur-sm py-4 md:py-0 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={experienceVariants}
        >
          <h2 className="text-[#ccd6f6] text-xl md:text-2xl font-bold">Education</h2>
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
                <span className="text-[#8892b0] font-mono text-xs tracking-wide whitespace-nowrap mt-1 group-hover:text-white transition-colors duration-200">AUG 2017 – JUL 2023</span>
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
      <section id="experience" className="py-12 md:py-24">
        <motion.div
          className="mb-10 sticky top-0 md:relative bg-[#081529]/60 md:bg-transparent backdrop-blur-sm py-4 md:py-0 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={experienceVariants}
        >
          <h2 className="text-[#ccd6f6] text-xl md:text-2xl font-bold">Where I've Worked</h2>
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
                            className="text-base font-normal text-white group-hover:text-[#64ffda] transition-colors duration-200 hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span className="text-base font-normal text-white group-hover:text-[#64ffda] transition-colors duration-200">
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