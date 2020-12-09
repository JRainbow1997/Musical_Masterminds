import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";

function Navbar(props){
    return (
        <nav>
            <div className="div-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="div-LinksSignedIn">
                <ul>
                    <li><Link to="/main">Home Page</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/profile">Account Settings</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/signout">Signout</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;