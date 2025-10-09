import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const projects = [
  {
    title: 'AI Powered Stock Forecast Model',
    image: '/placeholder.png',
    tech: ['Flutter', 'Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'yfinance'],
    description: 'Machine learning application for stock price prediction using historical market data. Built with TensorFlow and Scikit-learn for model training, integrated with yfinance API for real-time data retrieval, and deployed with a Flutter frontend for interactive forecasting and visualization.',
    link: 'https://my-portfolio-rho-coral-52.vercel.app/',
    hasEmbeddedDashboard: false,
    embedUrl: null,
  },
  {
    title: 'University Admissions Dashboard',
    image: '/AdmissionsExplorer.png',
    tech: ['Salesforce', 'Tableau', 'Excel'],
    description: 'Interactive Admissions Explorer showing applicant pipeline by term, degree, and geography. Drill into trends, segment by stage (Applied → Admitted → Enrolled), and use filters to compare cohorts. Built from Salesforce data and published in Tableau Public.',
    link: 'https://public.tableau.com/views/AdmissionsExplorer/AdmissionsExplorer?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    hasEmbeddedDashboard: true,
    embedUrl: 'https://public.tableau.com/views/AdmissionsExplorer/AdmissionsExplorer?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:toolbar=yes',
  },
  {
    title: 'Product Analytics Dashboard',
    image: '/ProductAnalytics.png',
    tech: ['Tableau', 'SQL', 'Python'],
    description: 'Interactive E-commerce Analytics tracking distinct users and weekly engagement rates. Drill into product performance, analyze user behavior patterns, and use filters to identify growth opportunities. Built from e-commerce data and published in Tableau Public.',
    link: 'https://public.tableau.com/views/ProductAnalystDashboard_17590385791200/ProductAnalytics?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    hasEmbeddedDashboard: true,
    embedUrl: 'https://public.tableau.com/views/ProductAnalystDashboard_17590385791200/ProductAnalytics?:language=en-US&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:toolbar=yes',
  },
];

// Thumbnail component with robust error handling and public URL support
function ProjectThumbnail({ src, alt, size = 'w-28 h-20' }) {
  const [hasError, setHasError] = useState(false);

  // Compute a robust URL that works locally and when deployed under a subpath
  const url = src
    ? (src.startsWith('/') ? `${process.env.PUBLIC_URL || ''}${src}` : src)
    : '';

  // Avoid stale 404s during development by adding a one-time cache buster
  const cacheBuster = React.useMemo(
    () => (process.env.NODE_ENV === 'development' ? `v=${Date.now()}` : ''),
    []
  );
  const finalUrl = React.useMemo(() => {
    if (!url) return '';
    if (!cacheBuster) return url;
    return url.includes('?') ? `${url}&${cacheBuster}` : `${url}?${cacheBuster}`;
  }, [url, cacheBuster]);

  if (!src || src === '/placeholder.png') {
    return (
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
    );
  }

  return (
    <div className={`relative ${size}`}>
      {/* Background tile to ensure visibility even before image loads */}
  <div className="absolute inset-0 rounded-lg bg-[#0e1d33] border border-[#233554] ring-1 ring-white/10 shadow" />
      {!hasError ? (
        <img
          src={finalUrl}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          onLoad={() => console.log(`Image loaded successfully: ${alt} -> ${finalUrl}`)}
          onError={() => {
            console.log(`Image failed to load: ${finalUrl}`);
            setHasError(true);
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
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
      )}
    </div>
  );
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    console.log('Opening modal for:', project.title); // Debug log
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    console.log('Closing modal'); // Debug log
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Add keyboard event listener for ESC key
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

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
              {/* Left: Project Thumbnail */}
              <div className="col-span-1 flex items-start px-6 py-4 md:min-w-[12rem] justify-start">
                <ProjectThumbnail src={proj.image} alt={`${proj.title} preview`} size="w-32 h-24 md:w-40 md:h-28" />
              </div>
              {/* Right: Content */}
              <div className="col-span-4 flex flex-col px-6 py-4 md:pl-8">
                <div className="flex items-center flex-wrap mb-2 w-full">
                  <h3 
                    className={`text-[#ccd6f6] font-semibold text-xl mr-2 group-hover:text-[#64ffda] transition-colors duration-200 ${
                      proj.hasEmbeddedDashboard ? 'cursor-pointer hover:underline' : ''
                    }`}
                    onClick={() => proj.hasEmbeddedDashboard && openModal(proj)}
                  >
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
                <p className="text-[#8892b0] leading-relaxed mb-4 flex-grow group-hover:text-white transition-colors duration-200 max-w-2xl">
                  {proj.description}
                  {proj.hasEmbeddedDashboard && (
                    <span className="text-[#64ffda] ml-2 text-xs font-mono">
                      (Click title to view dashboard)
                    </span>
                  )}
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

      {/* Modal for Dashboard */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-[#0a1525] rounded-lg border border-[#233554] shadow-2xl p-6 max-w-7xl w-full max-h-[95vh] overflow-auto relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-[#ccd6f6] text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-[#8892b0] text-sm">
                    {selectedProject.description}
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-[#8892b0] hover:text-white transition-colors duration-200 p-2"
                >
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.36 6.64a1 1 0 0 1 0 1.41L13.41 12l4.95 4.95a1 1 0 1 1-1.41 1.41L12 13.41l-4.95 4.95a1 1 0 0 1-1.41-1.41L10.59 12 5.64 7.05a1 1 0 0 1 1.41-1.41L12 10.59l4.95-4.95a1 1 0 0 1 1.41 0z"/>
                  </svg>
                </button>
              </div>

              {/* Dashboard Iframe */}
              <div className="w-full">
                <div className="rounded-md overflow-hidden border border-[#233554] bg-white">
                  <iframe
                    src={selectedProject.embedUrl}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-md"
                    title={`${selectedProject.title} - Interactive Dashboard`}
                    onLoad={() => console.log('Dashboard loaded successfully')}
                    onError={() => console.log('Dashboard failed to load')}
                  />
                </div>
                <p className="text-[#8892b0] text-xs mt-3 italic text-center">
                  Interactive dashboard - Click points to filter bars • Use filters on the right
                </p>
                
                {/* External Link */}
                <div className="mt-4 text-center">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors duration-200 text-sm"
                  >
                    <span>Open in Tableau Public</span>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="ml-1">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 