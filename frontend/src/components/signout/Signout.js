import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"

const Signout = () => {
    let history = useHistory();
    sessionStorage.removeItem("signIn");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("username");

    useEffect(() => {        
        setTimeout(() => {
            history.push("/")
        }, 10000);    
    })

    return (
        <div>
            <h1>You have been sign out</h1>
            <h2>You will be returned to Sign-in page in 10 seconds</h2>
            <a href="/"> Return to Sign-in now?</a>
        </div>
    )
}

export default Signout;