import React from 'react';
import './AboutPage.css';

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.png';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="Sharad Jaypal Baghel" className="sobre-mi-img" />
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                <FormattedMessage
                  id='btn-cv'
                  defaultMessage='Download CV'
                />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Sharad Jaypal Baghel, a recent graduate with a passion for programming and web development. Since 2019, I have explored the world of front-end development and created my first web page using only HTML and CSS. This experience sparked my enthusiasm for web technologies, and I continue to enjoy building creative and interactive web applications using HTML, CSS, JavaScript, and React."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="I am a self-motivated learner who enjoys discovering new technologies and development methods every day. I believe in continuous learning to improve my skills and stay up-to-date in the fast-changing tech world."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="Although I am a fresher, I have completed several major web projects during my academic journey. These experiences have helped me adapt to different requirements, work collaboratively, and enhance my technical and problem-solving abilities. I am eager to contribute my skills and passion to exciting new opportunities in web development."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>
          </div>
          {/* Education Section - Timeline Style */}
<div className="education-section">
  <h1 className="heading">Education</h1>
  <div className="timeline-container">
    
    {/* Left Side - B.Tech */}
    <div className="timeline-item left">
      <div className="timeline-content">
        <h2 className="education-title">B.Tech in Information Technology</h2>
        <p className="education-institute">Parul University, Vadodara, Gujarat</p>
        <p className="education-duration">2021 - 2025</p>
        <p className="education-desc">
          <FormattedMessage
            id='about-education-1'
            defaultMessage='Completed my Bachelor of Technology in Information Technology, focusing on full-stack development, software engineering, and emerging technologies.'
          />
        </p>
      </div>
    </div>

    {/* Right Side - 12th */}
    <div className="timeline-item right">
      <div className="timeline-content">
        <h2 className="education-title">Diploma in Computer Science</h2>
        <p className="education-institute">Government Polytechnic Ratnagiri</p>
        <p className="education-duration">2019 - 2022</p>
        <p className="education-desc">
          <FormattedMessage
            id='about-education-2'
            defaultMessage='Completed a Diploma in Computer Science, gaining hands-on experience in programming, data structures, computer networks, and software engineering principles.'
          />
        </p>
      </div>
    </div>
{/* Right Side - SSC */}
<div className="timeline-item left">
  <div className="timeline-content">
    <h2 className="education-title">SSC - 10th Standard</h2>
    <p className="education-institute">Maharashtra State Board Pune</p>
    <p className="education-duration">2019</p>
    <p className="education-desc">
      <FormattedMessage
        id='about-education-4'
        defaultMessage='Completed 10th standard under the Maharashtra State Board, with a strong academic foundation in science, mathematics, and technology.'
      />
    </p>
  </div>
</div>

  </div>
</div>


          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='Strong foundation in HTML5 for building structured and accessible web pages.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='Experienced in creating responsive and visually appealing designs using CSS3.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="JavaScript" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="JavaScript" />
                <h2 className="skill-name">JavaScript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='Good understanding of JavaScript for adding interactivity and logic to web applications.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <img
    alt="MongoDB"
    className="skills-img"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    title="MongoDB"
  />
  <h2 className="skill-name">MongoDB</h2>
  <p className="skill-info">
    <FormattedMessage
      id='about-skills-mongodb'
      defaultMessage='Proficient in using MongoDB for creating and managing NoSQL databases in full-stack applications.'
    />
  </p>
</div>
<div className="skill-card" data-aos="flip-left" data-aos-delay="300">
  <img
    alt="AI"
    className="skills-img"
    src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
    title="Artificial Intelligence"
  />
  <h2 className="skill-name">AI</h2>
  <p className="skill-info">
    <FormattedMessage
      id='about-skills-ai'
      defaultMessage='Understanding and working knowledge of AI concepts including machine learning, computer vision, and generative models.'
    />
  </p>
</div>

              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Proficient in using Bootstrap for fast, responsive layouts and UI components.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
                <h2 className="skill-name">jQuery</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='Familiar with jQuery for DOM manipulation and simple animations.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="React" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='Hands-on experience building dynamic and scalable user interfaces with React.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="NodeJs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="NodeJs" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='Basic knowledge of Node.js for building scalable back-end services.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="Express" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='Familiar with Express for building RESTful APIs and server-side logic.'
                  />
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;
