import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'ABOUT', to: '#about' },
  { label: 'EDUCATION', to: '#education' },
  { label: 'EXPERIENCE', to: '#experience' },
  { label: 'PROJECTS', to: '#projects' },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Navbar({ className = '' }) {
  const [active, setActive] = useState('');

  const handleNavClick = (e, to) => {
    // Enable smooth scroll behavior programmatically and keep URL hash in sync
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the hash without jumping
      if (window.history.pushState) {
        window.history.pushState(null, '', to);
      } else {
        window.location.hash = to;
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0.25 }
    );

    navLinks.forEach(link => {
      const section = document.querySelector(link.to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`flex flex-col space-y-2 text-sm font-medium ml-4 md:ml-20 ${className}`}>
      <motion.ul
        className="flex flex-col"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {navLinks.map(link => {
          const isActive = active === link.to;
          return (
            <motion.li key={link.to} variants={itemVariants} className="flex items-center group transition-all duration-150 py-2">
              <span
                className={`h-px mr-2 transition-all duration-150 ${isActive ? 'bg-white w-12 md:w-20' : 'bg-[#233554] w-6 md:w-8 group-hover:w-12 md:group-hover:w-20 group-hover:bg-white'}`}
              ></span>
              <a
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className={`font-mono text-xs tracking-widest transform transition-all duration-150 px-2 ${isActive ? 'text-white font-bold translate-x-2' : 'text-[#8892b0] group-hover:text-white group-hover:translate-x-2'}`}
              >
                {link.label}
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
} 