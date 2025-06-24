import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import RightSidebar from './components/RightSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#081529] text-white font-sans min-h-screen flex flex-col md:flex-row">
      {/* Left column: Hero, Navbar, Socials */}
      <div className="w-full md:w-1/2 flex flex-col h-auto md:h-screen py-12 px-12 md:sticky md:top-0 justify-between">
        <div>
          <Hero />
          <Navbar className="-mt-2" />
        </div>
        <div className="mb-16 ml-28">
          <Sidebar />
        </div>
      </div>
      {/* Right column: Main content */}
      <div className="w-full md:w-1/2 px-8 max-w-3xl mx-auto -ml-24 text-sm">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
      {/* <RightSidebar /> */}
    </div>
  );
}
