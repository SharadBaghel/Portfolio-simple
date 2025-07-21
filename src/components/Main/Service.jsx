import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';


const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id="services"
                defaultMessage="Services"
            />
        </h2>
        <div className="row">

            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-layer-group"></i>
                <h3>
                    <FormattedMessage
                        id="fullstack"
                        defaultMessage="Full Stack Web Development"
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id="fullstack-info"
                        defaultMessage="End-to-end web application development, covering both frontend and backend, database integration, and deployment for dynamic, scalable solutions."
                    />
                </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-code"></i>
                <h3>
                    <FormattedMessage
                        id="frontend"
                        defaultMessage="Frontend Development"
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id="frontend-info"
                        defaultMessage="Building modern, responsive, and visually appealing user interfaces using React, HTML5, CSS3, and JavaScript."
                    />
                </p>
            </div>

            
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-cloud-upload-alt"></i>
                <h3>
                    <FormattedMessage
                        id="deployment"
                        defaultMessage="Deployment & Hosting"
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id="deployment-info"
                        defaultMessage="Deploying and hosting web applications on reliable cloud platforms, ensuring high availability, security, and seamless updates."
                    />
                </p>
            </div>

            
        </div>

        

        {/* Button to services detail page */}
        <div className="portafolio-btn">
            <Link to="/service">
                <ButtomGet />
            </Link>
        </div>
    </section>
);

export default React.memo(Service);
