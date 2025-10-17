import React from 'react';

export default function RightSidebar() {
  return (
    <div className="fixed right-10 inset-y-0 z-30 hidden lg:flex flex-col justify-center items-center w-10">
      <a
        href="mailto:sdivati@gmu.edu"
        className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 writing-mode-vertical font-mono text-xs"
        aria-label="Email"
      >
        <span className="writing-mode-vertical-rl transform rotate-180 tracking-widest">
          sdivati@gmu.edu
        </span>
      </a>
      <div className="w-px h-24 bg-[#8892b0] mt-8"></div>
    </div>
  );
}
