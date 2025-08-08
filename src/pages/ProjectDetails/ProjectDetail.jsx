import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import './ProjectDetail.css'; // CSS file that includes updated styles

const proyectImg = require.context('../../img', true);

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div style={{ padding: '2rem', color: 'white' }}>Project not found.</div>;
  }

  return (
    <div className="project-detail-container">
      <button className="back-button">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>← Back to Home</Link>
      </button>

      <h1 className="project-title">{project.title}</h1>

      <div className="project-content">
        {/* Left: Details */}
        <div className="project-details">
          <div>
            <strong>Description:</strong>
            <pre className="project-desc">{project.fullDesc}</pre>
          </div>

          <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>

          {project.tags && (
            <p><strong>Tags:</strong> {project.tags.join(', ')}</p>
          )}

          {project.difficulty && (
            <p><strong>Difficulty:</strong> {project.difficulty}</p>
          )}

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="know-more-button"
          >
            View Source Code
          </a>
        </div>

        
        <img
          className="project-image"
          src={proyectImg(`./${project.img}`)}
          alt={project.title}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
