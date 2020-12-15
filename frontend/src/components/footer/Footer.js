import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-phone"></i>
          <p> Email us:</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> musical_masterminds@gmail.com</a>
          </p>
        </div>
      </div>
      <div class="footer-left col-md-4 col-sm-6">
        <div class="icons">
          <a href="#">
            <i class="fa fa-facebook">
              <FaFacebook />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-twitter">
              <FiTwitter />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin">
              <FaLinkedin />
            </i>
          </a>
          <a href="#">
            <i class="fa fa-instagram">
              <FaInstagramSquare />
            </i>
          </a>
        </div>
      </div>

      <div class="footer-right col-md-4 col-sm-6">
        <p class="menu">
          <a href="#"> Home</a> | <a href="/about"> About </a> |
          <a href="/profile"> Settings </a> | <a href="#"> Contact</a>
        </p>
        <p class="name"> CodeNation &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
