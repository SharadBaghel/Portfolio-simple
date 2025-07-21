import React, { useState, useRef } from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const handleOpenVideo = (videoPath) => {
    setActiveVideo(videoPath);
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveVideo(null);
  };

  const handleVideoEnd = () => {
    handleCloseVideo();
  };

  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id='projects' defaultMessage='Projects' />
      </h2>

      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='proyectos-slider mySwiper'
        >
          {/* Project 1 */}
          <SwiperSlide className='caja'>
            <img src={proyectImg(`./face.png`)} alt='proyectos' />
            <div className="content">
              <h3>Face And Motion Detection</h3>
              <p>Real-time detection system using Python and OpenCV.</p>
              <p className="technologies">
                Python
                <span> -</span> OpenCV
                <span> -</span> Haar Cascades
                <span> -</span> Numpy
                <span> -</span> Tkinter
              </p>
              
              <a href="https://github.com/SharadBaghel/Face-and-Motion-Detection" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </SwiperSlide>

          {/* Project 2 */}
          <SwiperSlide className='caja'>
            <img src={proyectImg(`./findit.png`)} alt='proyectos' />
            <div className="content">
              <h3>FindIt</h3>
              <p>Connecting People with People</p>
              <p className="technologies">
                <span> -</span> React
                <span> -</span> JavaScript
                <span> -</span> HTML
                <span> -</span> CSS
              </p>
              
              <a href="https://github.com/SharadBaghel/FindIt" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </SwiperSlide>

          {/* Project 3 */}
          <SwiperSlide className='caja'>
            <img src={proyectImg(`./frozed.png`)} alt='proyectos' />
            <div className="content">
              <h3>Frozed</h3>
              <p>Work Smartly with Endless Possibility</p>
              <p className="technologies">
                <span> -</span> AOS (Animate on Scroll)
                <span> -</span> JavaScript
                <span> -</span> HTML
                <span> -</span> CSS
              </p>
              
              <a href="https://github.com/SharadBaghel/rou_main" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </SwiperSlide>

          {/* Project 4 */}
          <SwiperSlide className='caja'>
            <img src={proyectImg(`./easy-study.png`)} alt='proyectos' />
            <div className="content">
              <h3>Easy Study</h3>
              <p>AI-Based Study Material Generator</p>
              <p className="technologies">
                <span> -</span> React
                <span> -</span> Next.js
                <span> -</span> Drizzle ORM
                <span> -</span> JavaScript
                <span> -</span> HTML
                <span> -</span> CSS
              </p>
              
              <a href="https://github.com/SharadBaghel/Ai-study-material-generator" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>

      

      {/* Video Modal */}
      {activeVideo && (
        <div className="modal-overlay" onClick={handleCloseVideo}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <video
              ref={videoRef}
              src={activeVideo}
              controls
              autoPlay
              onEnded={handleVideoEnd}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <button className="close-btn" onClick={handleCloseVideo}>×</button>
          </div>
        </div>
      )}

      {/* Modal CSS */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 12px;
          position: relative;
          max-width: 800px;
          width: 90%;
        }
        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          border: none;
          background: none;
          color: #000;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default React.memo(Project);
