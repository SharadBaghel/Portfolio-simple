// src/components/Content/Content.jsx
import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';
import SharadPhoto from '../../img/Sharad.jpeg'; // Correct relative path to your photo

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg />
        <section className="inicio" id="inicio">
            <div className="titulo">

                {/* Text content container */}
                <div className="text-content">
                    <p data-aos="fade-up" data-aos-delay="600">
                        <FormattedMessage id="greeting" defaultMessage="Hello" />
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="800">
                        <FormattedMessage id="name" defaultMessage="I am Sharad Baghel" />
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="1000">
                        <FormattedMessage id="rol" defaultMessage="Full-stack developer" />
                    </p>

                    <div className="wrapper">
                        <a
                            className="button"
                            href="https://github.com/SharadBaghel/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="1400"
                        >
                            <div className="icon">
                                <i className="fab fa-github"></i>
                            </div>
                            <span>Github</span>
                        </a>
                        <a
                            className="button"
                            href="https://www.linkedin.com/in/sharad-baghel-925b2b333/"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="1600"
                        >
                            <div className="icon">
                                <i className="fab fa-linkedin"></i>
                            </div>
                            <span>Linkedin</span>
                        </a>
                        <a
                            className="button"
                            href="https://api.whatsapp.com/send?phone=8077529654"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos="fade-up"
                            data-aos-delay="1800"
                        >
                            <div className="icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>
                            <span>Whatsapp</span>
                        </a>
                    </div>
                </div>

                {/* Image on the right side */}
                <img
                    src={SharadPhoto}
                    alt="Sharad Baghel"
                    className="profile-photo"
                    data-aos="fade-up"
                    data-aos-delay="400"
                />

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;
