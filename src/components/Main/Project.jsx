// src/components/Main/Project.jsx
import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { FormattedMessage } from 'react-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';

const proyectImg = require.context('../../img', true);

const projects = [
  {
    id: 1,
    title: "Face And Motion Detection",
    shortDesc: "Real-time detection using Python & OpenCV.",
    fullDesc: "Desktop surveillance system using Haar Cascades & Tkinter GUI.",
    technologies: ["Python", "OpenCV", "Tkinter"],
    img: "face.png",
    repo: "https://github.com/SharadBaghel/Face-and-Motion-Detection"
  },
  {
    id: 2,
    title: "FindIt",
    shortDesc: "Connecting People with People",
    fullDesc: "Matching platform based on interests, location, and background.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    img: "findit.png",
    repo: "https://github.com/SharadBaghel/FindIt"
  },
  {
    id: 3,
    title: "Frozed",
    shortDesc: "Work Smartly with Endless Possibility",
    fullDesc: "Landing page with AOS animation and JS interactivity.",
    technologies: ["AOS", "JavaScript", "HTML", "CSS"],
    img: "frozed.png",
    repo: "https://github.com/SharadBaghel/rou_main"
  },
  {
    id: 4,
    title: "Easy Study",
    shortDesc: "AI-Based Study Material Generator",
    fullDesc: "Auto-generate study notes using OpenAI APIs. Includes auth & export.",
    technologies: ["React", "Next.js", "Drizzle ORM"],
    img: "easy-study.png",
    repo: "https://github.com/SharadBaghel/Ai-study-material-generator"
  }
];

const Project = () => {
  const navigate = useNavigate();

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id='projects' defaultMessage='Projects' />
      </h2>

      <Swiper
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className='proyectos-slider mySwiper'
      >
        {projects.map((project) => (
          <SwiperSlide
            className='caja'
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <img src={proyectImg(`./${project.img}`)} alt={project.title} />
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.shortDesc}</p>
              <p className="technologies">{project.technologies.join(" - ")}</p>
              <span className="click-more">Click for more</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Project;
