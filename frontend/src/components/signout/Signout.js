import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"
import './Signout.css'

const Signout = () => {

    document.title = "Signed Out | Musical Masterminds";

    let history = useHistory();
    sessionStorage.removeItem("signedIn");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("username");

    useEffect(() => {
        setTimeout(() => {
            history.push("/")
        }, 10000);
    })

    return (
        <div className="signedout-background">
            <div className="SO-Content">
                <h1>You have been signed out</h1>
                <br/>
                <h2>You will be returned to the Sign-in page in 10 seconds</h2>
                <br />
                <a href="/"> Return to Sign-in now?</a>
            </div>
        </div>
    )
}

export default Signout;