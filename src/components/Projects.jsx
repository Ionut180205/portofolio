import React from 'react';

const Projects = () => {
  // Hardcoded static projects
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      technologies: 'React, Tailwind CSS, JavaScript, Flask',
      image: '../src/assets/Portofoliu.png',
      link: 'https://github.com/Ionut180205/portofolio',
    },
    {
      id: 2,
      name: 'E-commerce App',
      technologies: 'Node.js, Express, MongoDB',
      image: 'https://via.placeholder.com/400x300', // Replace with a URL or Base64 image
      link: 'https://your-ecommerce-app.com',
    },
    {
      id: 3,
      name: 'Blog Platform',
      technologies: 'Django, PostgreSQL, Python',
      image: 'https://via.placeholder.com/400x300', // Replace with a URL or Base64 image
      link: 'https://your-blog-platform.com',
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image} // Static image URL or Base64 string
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.link}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
