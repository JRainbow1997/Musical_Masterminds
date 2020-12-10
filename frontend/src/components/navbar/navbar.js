import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";

function Navbar(props) {
    const [loggedin, setLoggedin] = useState(sessionStorage.getItem("signedIn"))

    useEffect(() => {
        console.log(sessionStorage.getItem("signedIn"))
        // setLoggedin(sessionStorage.getItem("signedIn"))
        if (!sessionStorage.getItem("signedIn")) {
            setLoggedin(false)
        } else {
            setLoggedin(true)
        }
    },[])

    return (
        <div>
            <nav>
                <div className="div-logo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className="div-LinksSignedIn">
                    <ul>
                        {(!loggedin) ? <div></div> :
                            <>
                                <li><Link to="/main">Home Page</Link></li>
                                <li><Link to="/quiz">Quiz</Link></li>
                                <li><Link to="/leaderboard">Leaderboard</Link></li>
                                <li><Link to="/profile">Account Settings</Link></li>
                            </>
                        }
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        {(!loggedin) ?
                            <>
                                <li><Link to="/">Sign In</Link></li>
                                <li><Link to="/Signup">Sign Up</Link></li>
                            </> :
                            <>
                                <li><Link to="/signout">Sign out</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;