import React from "react";
import { FaInstagram } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";


export default function Footer2() {
  return (
    <div className="footer-fixo">
      <div className="container">
        <div className="footer-content">
          <h2>Contatos</h2>
          <div className="social-media">
            <SlSocialInstagram className="icon" />
            <FaFacebook className="icon" />
          </div>
          <p>LC Sport © 2023. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};