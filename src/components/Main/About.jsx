import React from 'react';
import '../../pages/About/AboutPage.css';
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import { FormattedMessage } from 'react-intl';

const getSkillLabel = (level) => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  if (level >= 40) return 'Moderate';
  return 'Beginner';
};

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <style>{`
      .skill-item {
        margin-bottom: 1rem;
      }

      .progress-container {
        position: relative;
        height: 10px;
        background-color: #eee;
        border-radius: 10px;
        overflow: hidden;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      .progress-container progress {
        width: 100%;
        height: 10px;
        appearance: none;
      }

      .progress-container progress::-webkit-progress-bar {
        background-color: #eee;
        border-radius: 10px;
      }

      .progress-container progress::-webkit-progress-value {
        background-color: #e06737ff;
        border-radius: 10px;
      }

      .percent-label {
  font-size: 12px;
  font-weight: bold;
  color: #987aacff; /* Golden Yellow - visible on both dark and light */
}

.level-label {
  font-size: 12px;
  font-weight: 600;
  color: #FFD700; /* Golden Yellow */
  margin-top: 2px;
  display: inline-block;
}

    `}</style>

    <h2 className="heading">
      <FormattedMessage id='about' defaultMessage='About me' />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id='im' defaultMessage='Who I am' />
        </h3>
        <h4>
          <FormattedMessage
            id='description'
            defaultMessage='My name is Sharad Jaypal Baghel and I am a full stack developer.'
          />
        </h4>
        <p>
          <FormattedMessage
            id='my-description'
            defaultMessage='As a recent graduate, I have worked on several major web design and development projects. I am committed to continuously improving my skills, staying updated with the latest technologies, and always eager to learn new tools and best practices as a developer.'
          />
        </p>
        <ul>
          <li><p><span><FormattedMessage id='years' defaultMessage='Age:' /></span> 21</p></li>
          <li><p><span>Email:</span> sharadbaghel827@gmail.com</p></li>
          <li><p><span>Mobile No:</span> 8077529654</p></li>
          <li><p><span><FormattedMessage id='from' defaultMessage='From:' /></span> Maharashtra, India</p></li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id='btn-cv' defaultMessage='Download CV' />
          </a>
          <div className='mas-info-btn'>
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>

      <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
        <h3>Skills</h3>

        <h4>Front-End</h4>
        <div className="skill">
          {[
            { name: 'HTML', level: 95, icon: 'html5/html5-original.svg' },
            { name: 'CSS', level: 90, icon: 'css3/css3-original.svg' },
            { name: 'JavaScript', level: 85, icon: 'javascript/javascript-plain.svg' },
            { name: 'Sass', level: 75, icon: 'sass/sass-original.svg' },
            { name: 'Bootstrap', level: 80, icon: 'bootstrap/bootstrap-original.svg' },
            { name: 'jQuery', level: 70, icon: 'jquery/jquery-plain-wordmark.svg' },
            { name: 'React', level: 85, icon: 'react/react-original.svg' },
            { name: 'Typescript', level: 60, icon: 'typescript/typescript-original.svg' }
          ].map(({ name, level, icon }) => (
            <div key={name} className="skill-item">
              <img alt={name} className="icons-skils" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} />
              <h5>{name}</h5>
              <div className="progress-container">
                <progress value={level} max="100"></progress>
              </div>
              <span className="percent-label">{level}%</span> <span className="level-label">({getSkillLabel(level)})</span>
            </div>
          ))}
        </div>

        <h4>Back-End</h4>
        <div className="skill">
          {[
            { name: 'NodeJs', level: 80, icon: 'nodejs/nodejs-original.svg' },
            { name: 'Express', level: 75, icon: 'express/express-original.svg' },
            { name: 'PHP', level: 70, icon: 'php/php-original.svg' },
            { name: 'Laravel', level: 65, icon: 'laravel/laravel-original.svg' },
            { name: 'MySQL', level: 80, icon: 'mysql/mysql-original-wordmark.svg' },
            { name: 'PostgreSQL', level: 70, icon: 'postgresql/postgresql-original-wordmark.svg' },
            { name: 'MongoDB', level: 75, icon: 'mongodb/mongodb-plain-wordmark.svg' }
          ].map(({ name, level, icon }) => (
            <div key={name} className="skill-item">
              <img alt={name} className="icons-skils" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`} />
              <h5>{name}</h5>
              <div className="progress-container">
                <progress value={level} max="100"></progress>
              </div>
              <span className="percent-label">{level}%</span> <span className="level-label">({getSkillLabel(level)})</span>
            </div>
          ))}
        </div>

        <h4><FormattedMessage id='tools' defaultMessage='Tools' /></h4>
        <div className="skill">
          {[
            { name: 'VS Code', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Visual_Studio_Code_1.18_icon.svg' },
            { name: 'Git', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
          ].map(({ name, level, icon }) => (
            <div key={name} className="skill-item">
              <img alt={name} className="icons-skils" src={icon} />
              <h5>{name}</h5>
              <div className="progress-container">
                <progress value={level} max="100"></progress>
              </div>
              <span className="percent-label">{level}%</span> <span className="level-label">({getSkillLabel(level)})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
