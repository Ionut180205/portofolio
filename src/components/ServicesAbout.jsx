import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ServicesAbout = () => {
    return (
        <div className="bg-black min-h-screen text-white py-20" id="services">
    <Link to="/portofolio" className="absolute top-4 left-4 bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        <span className="text-2xl mr-2">{"<"}</span> 
        <span className="text-base">Return Home</span>
    </Link>
          <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              
              {/* Frontend Service */}
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500 text-center mb-4">Frontend Development</h3>
                <p className="text-lg text-gray-400 mb-4">
                  I specialize in building responsive, interactive, and user-friendly frontend applications using the latest technologies like React, HTML, CSS, and JavaScript.
                </p>
                <ul className="list-disc ml-6 text-gray-400">
                  <li>Responsive web design</li>
                  <li>Single-page applications</li>
                  <li>UI/UX optimization</li>
                </ul>
              </div>
    
              {/* Backend Service */}
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500 text-center mb-4">Backend Development</h3>
                <p className="text-lg text-gray-400 mb-4">
                  I offer backend development services, building secure, scalable, and efficient backends using Node.js, Express, and databases like MongoDB or MySQL.
                </p>
                <ul className="list-disc ml-6 text-gray-400">
                  <li>API development</li>
                  <li>Database design and management</li>
                  <li>Server-side logic implementation</li>
                </ul>
              </div>
    
              {/* Fullstack Service */}
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text
                            bg-gradient-to-r from-green-400 to-blue-500 text-center mb-4">Fullstack Development</h3>
                <p className="text-lg text-gray-400 mb-4">
                  I offer end-to-end solutions by integrating both frontend and backend technologies, ensuring seamless communication between the user interface and the database.
                </p>
                <ul className="list-disc ml-6 text-gray-400">
                  <li>Frontend + Backend integration</li>
                  <li>End-to-end application development</li>
                  <li>Deployment and optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
}

export default ServicesAbout;