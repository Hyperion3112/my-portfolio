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
      {/* Cursor-following gradient overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Left column: Hero, Navbar, Socials - Sticky */}
      <div className="w-full md:w-1/2 flex flex-col md:h-screen py-12 px-12 md:sticky md:top-0 justify-between relative z-10">
        <div>
          <Hero />
          <Navbar className="-mt-2" />
        </div>
        <div className="mb-16 ml-28">
          <Sidebar />
        </div>
      </div>
      {/* Right column: Main content - Scrollable */}
      <div className="w-full md:w-1/2 px-8 max-w-3xl mx-auto -ml-24 text-sm relative z-10 md:overflow-y-auto">
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
