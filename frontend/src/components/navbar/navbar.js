import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";

const Navbar = props => {
    return (
        <nav>
            <div className="div-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className = "div-links">
                <ul className = "navbar-links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/">Sign In</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;