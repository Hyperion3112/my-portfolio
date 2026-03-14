import React from 'react';
import { motion } from 'framer-motion';

const experienceVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const experiences = [
  {
    title: 'Data Analytics Consultant (Contract)',
    company: 'Blue Horse Digital',
    period: 'FEB 2026 – PRESENT',
    description:
      `I conduct data discovery and audit phases for enterprise AI transformation projects. I build automated data pipelines in Python to bring together data from different parts of the company, making sure it's ready for AI models. I also create dashboards in Tableau for leadership to see the performance of our AI tools and understand their impact on efficiency.`,
    tech: ['Python', 'Tableau', 'ETL', 'Data Analytics'],
    link: null,
  },
  {
    title: 'Graduate Data Analyst (Research Assistant)',
    company: 'George Mason University: School of Computing',
    period: 'JUL 2025 – FEB 2026',
    description:
      `I analyzed student performance data to find grading patterns and anomalies. I built a predictive project in Power BI to help identify students who might drop out, allowing for early support. I also automated weekly data cleaning tasks using Python, which saved a lot of time, and created reports that helped guide the department's budget decisions.`,
    tech: ['SQL', 'Excel', 'Power BI', 'Python', 'Predictive Analytics'],
    link: null,
  },
  {
    title: 'Data Analyst',
    company: 'Elite Micro Systems',
    period: 'AUG 2021 - JUL 2023',
    description:
      `I optimized complex SQL queries to analyze large volumes of monthly transaction data, helping to identify bottlenecks and significantly improve our overall transaction success rates. To ensure our systems were running smoothly, I designed and built interactive Tableau dashboards that monitored the health of our pan-India kiosk deployments, which allowed our teams to proactively address issues and fix them much faster. Beyond visualization, I also wrote Python scripts to automate tedious data entry processes for our audit compliance, saving the team hours of manual work each week. Finally, I regularly analyzed retail usage trends to provide actionable insights that helped optimize the locations of our payment terminals.`,
    tech: ['SQL', 'Tableau', 'Python', 'EDA'],
    link: 'https://emplindia.com/',
  },
  {
    title: 'Data Intern',
    company: 'U&I Trust',
    period: 'NOV 2020 – JAN 2021',
    description:
      `I looked at student performance and attendance data using Excel to find areas where students were struggling and help optimize class sizes. I also tracked how students were using our new digital libraries to make sure the transition to remote learning went smoothly.`,
    tech: ['Excel', 'Data Analysis'],
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