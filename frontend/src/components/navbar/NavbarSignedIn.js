import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./navBar.css";

function Navbar(props){
    return (
        <nav>
            <div className="divLogoLoggedIn">
                <img src={logo} className="logoLoggedIn" alt="logo" />
            </div>
            <div className="divLinksLoggedIn">
                <ul>
                    <li><Link to="/main">Home Page</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                    <li><Link to="/profile">Account Settings</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;