
import React from 'react';

const projects = [
  { title: "Project 1", description: "Description of Project 1", link: "#", img: "project1.jpg" },
  { title: "Project 2", description: "Description of Project 2", link: "#", img: "project2.jpg" },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline mt-2 block">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
