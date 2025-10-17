import React from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Hyperion3112',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .318.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/shaunak-divati-79ba59194/',
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    )
  },
  {
    name: 'Email',
    url: 'mailto:sdivati@gmu.edu',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.72.53a.75.75 0 0 0-.47.69v.08l8.25 6.35c.27.21.65.21.92 0l8.25-6.35v-.08a.75.75 0 0 0-.47-.69.75.75 0 0 0-.75.07l-7.79 6-7.79-6a.75.75 0 0 0-.75-.07z" />
      </svg>
    )
  }
];

export default function Sidebar({ className = '' }) {
  return (
    <div className={`w-full flex justify-center md:justify-start ml-0 md:ml-4 lg:ml-8 ${className}`}>
      <div className="flex flex-row space-x-5 md:space-x-6 self-center">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name === 'Email' ? undefined : '_blank'}
            rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
            className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 font-mono"
            aria-label={link.name}
          >
            <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
              {link.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 