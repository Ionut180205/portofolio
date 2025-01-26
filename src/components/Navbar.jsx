import React from 'react';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex'>
        <div className='text-2xl font-bold'>Ionut</div>
        <div className='space-x-6 ml-[58%]'>
          <button onClick={() => scrollToSection('hero')} className='hover:text-gray-400'>Home</button>
          <button onClick={() => scrollToSection('aboutme')} className='hover:text-gray-400'>About me</button>
          <button onClick={() => scrollToSection('services')} className='hover:text-gray-400'>Services</button>
          <button onClick={() => scrollToSection('projects')} className='hover:text-gray-400'>Projects</button>
          <button onClick={() => scrollToSection('contact')} className='hover:text-gray-400'>Contact</button>
        </div>
        <a href="/portofolio/login" className='hidden'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
