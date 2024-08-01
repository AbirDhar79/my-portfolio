// src/components/Skills.js
import React from 'react';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h3 className="text-2xl font-bold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
