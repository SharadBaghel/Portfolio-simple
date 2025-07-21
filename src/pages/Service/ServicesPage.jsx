import React from 'react';
import './ServicesPage.css'

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage
              id='services'
              defaultMessage='Services'
            />
          </h2>
          <div className="row">

            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-layer-group"></i>
              <h3>
                <FormattedMessage
                  id='fullstack'
                  defaultMessage='Full Stack Web Development'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='fullstack-info'
                  defaultMessage='End-to-end web application development, covering both frontend and backend, database integration, and deployment for dynamic, scalable solutions.'
                />
              </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-code"></i>
              <h3>
                <FormattedMessage
                  id='frontend'
                  defaultMessage='Frontend Development'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='frontend-info'
                  defaultMessage='Building modern, responsive, and visually appealing user interfaces using React, HTML5, CSS3, and JavaScript.'
                />
              </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-server"></i>
              <h3>
                <FormattedMessage
                  id='backend'
                  defaultMessage='Backend Development'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='backend-info'
                  defaultMessage='Designing and implementing robust server-side logic, RESTful APIs, and scalable services using Node.js, Express, and other backend technologies.'
                />
              </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-plug"></i>
              <h3>
                <FormattedMessage
                  id='api-integration'
                  defaultMessage='API Integration'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='api-integration-info'
                  defaultMessage='Connecting web applications with third-party APIs for features like payments, authentication, and data synchronization.'
                />
              </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-cloud-upload-alt"></i>
              <h3>
                <FormattedMessage
                  id='deployment'
                  defaultMessage='Deployment & Hosting'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='deployment-info'
                  defaultMessage='Deploying and hosting web applications on reliable cloud platforms, ensuring high availability, security, and seamless updates.'
                />
              </p>
            </div>

      

            <div className="columns" data-aos="fade-up" data-aos-delay="600">
              <i className="fas fa-briefcase"></i>
              <h3>
                <FormattedMessage
                  id='freelancing'
                  defaultMessage='Freelancing'
                />
              </h3>
              <p>
                <FormattedMessage
                  id='freelancing-info'
                  defaultMessage='Offering freelance web development services, delivering custom solutions tailored to client needs, timelines, and budgets.'
                />
              </p>
            </div>
            

          </div>
          
        </section>

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequent questions'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='What is a responsive web page?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='It is a page that adapts to any device, such as cell phones, tablets, or laptops, without losing appearance or usability.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='What is a Domain and a Hosting?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage='Both are essential elements of a website. The domain is the address of the web page, while hosting provides the space and resources necessary to launch the website.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='Is monthly maintenance necessary?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='Regular maintenance of your website allows you to attract and retain customers with new information, products, and services, and helps maintain or improve your Google ranking.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Services;
