import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='bg-black h-screen text-white py-20' id='resume'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <Link to="/portofolio" className="absolute top-4 left-4 bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        <span className="text-2xl mr-2">{"<"}</span> 
        <span className="text-base">Return Home</span>
      </Link>
        <h2 className='text-4xl font-bold text-center mb-12'>Resume</h2>
        <div className='space-y-12'>
            {/*Freelance experience*/}
        <div className='flex flex-col md:flex-row items-start md:space-x-12'>
            <div className='md:w-2/12 mb-4 md:mb-0'>
              <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Freelance Experience</h3>
            </div>
            <div className='flex-1'>
              <p className='text-lg'>
                <span className='font-bold'>Friends, family and small local businesses</span> - since 2019
              </p>
              <p className='text-gray-400'>Worked at numerous projects for close people or small local businesses since I was in High School.
                I've managed to create, improve or adjust many projects and helped some bussineses to get a better approach on web.
              </p>
            </div>
          </div>
          {/* High School */}
          <div className='flex flex-col md:flex-row items-start md:space-x-12'>
            <div className='md:w-2/12 mb-4 md:mb-0'>
              <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>High School</h3>
            </div>
            <div className='flex-1'>
              <p className='text-lg'>
                <span className='font-bold'>"Moise Nicoara" National College</span> - Graduated 2021
              </p>
              <p className='text-gray-400'>Specialized in Informatics and Mathematics.</p>
            </div>
          </div>

          {/* University */}
          <div className='flex flex-col md:flex-row items-start md:space-x-12'>
            <div className='md:w-2/12 mb-4 md:mb-0'>
              <h3 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>University</h3>
            </div>
            <div className='flex-1'>
              <p className='text-lg'>
                <span className='font-bold'>West University of Timisoara</span> - Graduation 2026
              </p>
              <p className='text-gray-400'>Bachelor's Degree in Computer Science. Focused on software development, data structures, and algorithms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
