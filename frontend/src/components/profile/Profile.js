import React, { useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Profile.css";

function Profile() {

    document.title = "Profile | Musical Masterminds";

    useEffect(() => {
        if (!sessionStorage.getItem("signedIn")) {
            return;
        }
    })
    return (
        <div className="profileWrapper">
            <IdleTimerContainer />
            {(!sessionStorage.getItem('signedIn')) ? 
                <div><h1 className="title">You are not signed in</h1></div> :
                <div>
                    <h2>{sessionStorage.getItem("username")}</h2>
                    <input type="password" placeholder="Reset Password"></input>
                </div>  
            }
        </div>
    );
};

export default Profile;