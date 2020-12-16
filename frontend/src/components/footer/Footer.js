import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-phone"></i>
          <p> Email us:</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="#"> musical_masterminds@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-left col-md-4 col-sm-6">
        <div className="icons">
          <a href="https://www.facebook.com/wearecodenation" target="/">
            <i className="fa fa-facebook">
              <FaFacebook />
            </i>
          </a>
          <a target="/"href="https://twitter.com/wearecodenation">
            <i className="fa fa-twitter">
              <FiTwitter />
            </i>
          </a>
          <a target="/" href="https://www.linkedin.com/company/wearecodenation">
            <i className="fa fa-linkedin">
              <FaLinkedin />
            </i>
          </a>
          <a target="/" href="https://github.com/JRainbow1997/Musical_Masterminds">
            <i className="fa fa-instagram">
              <FaGithub />
            </i>
          </a>
        </div>
      </div>

      <div className="footer-right col-md-4 col-sm-6">
        <p className="menu">
          <a href="/main"> Home</a> | <a href="/about"> About </a> |
          <a href="/profile"> Settings </a> | <a target="/" href="https://wearecodenation.com/?fbclid=IwAR3qBNMZQMqff3QGo1Hklz-P1yik95hzR3RZxT82_jRi6-a5jHz-v3wDKPY"> Contact</a>
        </p>
        <p className="name"> CodeNation &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
