import React from 'react';
import './Footer.css';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="footer-brand">
          <h2 className="footer-logo">Sharad<span> Baghel </span></h2>
          <p className="footer-tagline">
            <FormattedMessage
             t
              id="footer-info"
              defaultMessage="Crafting creative and reliable digital experiences."
            />
          </p>
        </div>

        

        <div className="copyright">
          <p>&copy; {year} Sharad Baghel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
