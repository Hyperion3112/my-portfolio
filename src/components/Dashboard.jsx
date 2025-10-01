import React from 'react';
import { motion } from 'framer-motion';

const dashboardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Dashboard() {
  // Extract the Tableau Public URL for iframe embedding
  const tableauUrl = "https://public.tableau.com/views/AdmissionsExplorer/AdmissionsExplorer?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:toolbar=yes";

  return (
    <section id="dashboard" className="py-24">
      <motion.div
        className="flex items-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={dashboardVariants}
      >
        <h2 className="text-[#ccd6f6] text-2xl font-bold mr-4">Admissions Dashboard</h2>
        <div className="flex-1 h-px bg-[#233554]"></div>
      </motion.div>
      
      <motion.div
        className="rounded-lg border border-[#233554] bg-[#112240] p-6 shadow-[0_4px_32px_0_rgba(100,255,218,0.10)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={dashboardVariants}
      >
        <div className="mb-4">
          <h3 className="text-[#ccd6f6] font-semibold text-lg mb-2">University Admissions Explorer</h3>
          <p className="text-[#8892b0] text-sm leading-relaxed">
            Interactive dashboard analyzing GRE vs TOEFL scores by admission status. 
            Click on data points to filter and explore admission patterns across different score ranges.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-[#233554] text-[#64ffda] px-2 py-0.5 rounded-full text-[11px] font-mono">
              Salesforce
            </span>
            <span className="bg-[#233554] text-[#64ffda] px-2 py-0.5 rounded-full text-[11px] font-mono">
              Tableau
            </span>
          </div>
        </div>
        
        <div className="w-full rounded-md overflow-hidden border border-[#233554]">
          <iframe
            src={tableauUrl}
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="rounded-md"
            title="University Admissions Dashboard"
          />
        </div>
        
        <div className="mt-4 text-center">
          <a
            href="https://public.tableau.com/views/AdmissionsExplorer/AdmissionsExplorer?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors duration-200 text-sm"
          >
            <span>View Full Dashboard</span>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="ml-1">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
