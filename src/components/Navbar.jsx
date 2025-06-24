import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Projects', to: '#projects' },
  // { label: 'Contact', to: '#contact' },
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
  return (
    <nav className={`flex flex-col space-y-2 text-sm font-medium text-blue-300 ml-20 ${className}`}>
      <motion.ul
        className="flex flex-col space-y-8"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        {navLinks.map((link, idx) => (
          <motion.li key={link.to} variants={itemVariants} className="flex items-center">
            <span className={`h-px w-8 mr-4 ${idx === 0 ? 'bg-white' : 'bg-[#233554]'}`}></span>
            <a
              href={link.to}
              className={`group font-mono text-xs tracking-widest transition px-2 ${idx === 0 ? 'text-white font-bold' : 'text-[#8892b0] hover:text-[#64ffda]'}`}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
} 