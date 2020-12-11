import React, { useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Profile.css";

function Profile() {
    useEffect(() => {
        if (!sessionStorage.getItem("signedIn")) {
            return;
        }
    })
    return (
        <div className="profileWrapper">
            <IdleTimerContainer />
            {(!sessionStorage.getItem('signedIn')) ? <div><h1 className="title">You are not signed in</h1></div> :
                <h1>Profile Page</h1>
            }
        </div>
    );
};

export default Profile;