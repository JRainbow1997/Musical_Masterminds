import React, { useEffect } from "react";
import "./Profile.css";

function Profile() {
    useEffect(() => {
        if (!sessionStorage.getItem("signedIn")) {
            return;
        }
    })
    return (
        <div class="profileWrapper">
            {(!sessionStorage.getItem('signedIn')) ? <div><h1 className="title">You are not signed in</h1></div> :
                <h1>Profile Page</h1>
            }
        </div>
    );
};

export default Profile;