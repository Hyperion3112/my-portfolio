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
    <nav className={`flex flex-col space-y-2 text-sm font-medium ml-20 ${className}`}>
      <motion.ul
        className="flex flex-col space-y-8"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {navLinks.map(link => {
          const isActive = active === link.to;
          return (
            <motion.li key={link.to} variants={itemVariants} className="flex items-center group transition-all duration-150">
              <span
                className={`h-px mr-2 transition-all duration-150 ${isActive ? 'bg-white w-16' : 'bg-[#233554] w-8 group-hover:w-16 group-hover:bg-white'}`}
              ></span>
              <a
                href={link.to}
                className={`font-mono text-xs tracking-widest transform transition-all duration-150 px-2 ${isActive ? 'text-white font-bold translate-x-2' : 'text-[#8892b0] hover:text-white group-hover:translate-x-2'}`}
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