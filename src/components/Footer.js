import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="Footer">
        <footer>
    <div className="container-fluid">
      <i className="social-icon fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i>
      <i className="social-icon fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></i>
      <i className="social-icon fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></i>
      <i className="social-icon fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i>
      <p>© Copyright 2021 Narong Shop</p>
    </div>
  </footer>
        </div>
    );

}

export default Footer;