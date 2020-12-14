import React, { useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import NotSignedIn from "../notSignedIn/NotSignedIn";
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
            {(!sessionStorage.getItem('signedIn')) ? <div><NotSignedIn /></div> :
                <div>
                    <IdleTimerContainer />
                    <div>
                        <h2>{sessionStorage.getItem("username")}</h2>
                        <input type="password" placeholder="Reset Password"></input>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;