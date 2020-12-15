import React from "react";
import "./NotSignedIn.css"

const NotSignedIn = () => {
    return (
        <div className="notSignedIn-background">
            <h1 className="notSI-Content">You are not signed in and cannot veiw this page. <br></br><br></br> To be able to view this page please <br></br> <a href="/">Sign In</a> or <a href="/signup">Create an account</a>.</h1>
        </div>
    )
}

export default NotSignedIn;