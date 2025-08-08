import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects'; // ✅ Correct way to import named export



const ProjectList = () => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          {/* Know More → links to project detail page */}
          <Link to={`/project/${project.id}`} className="know-more-btn">
            Know More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
