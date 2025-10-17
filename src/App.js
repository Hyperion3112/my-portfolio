import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import RightSidebar from './components/RightSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#081529] text-white font-sans min-h-screen flex flex-col md:flex-row relative">
      {/* Cursor-following gradient overlay - hidden on mobile, visible on desktop */}
      <div 
        className="hidden md:block fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Left column: Hero, Navbar, Socials - Sticky on desktop, normal flow on mobile */}
      <div className="w-full md:w-1/2 flex flex-col py-8 px-6 md:py-12 md:pl-16 md:pr-12 md:h-screen md:sticky md:top-0 justify-between relative z-10">
        <div>
          <Hero />
          {/* Hide navbar on mobile, show on desktop */}
          <div className="hidden md:block">
            <Navbar className="md:-mt-2" />
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:mb-16 ml-0 md:ml-28">
          <Sidebar />
        </div>
      </div>
      {/* Right column: Main content - Scrollable */}
      <div className="w-full md:w-1/2 px-6 md:px-8 max-w-3xl md:mx-auto md:-ml-24 text-sm relative z-10 md:overflow-y-auto">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
      {/* <RightSidebar /> */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
