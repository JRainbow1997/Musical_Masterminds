import axios from "axios";
import React, { useEffect, useState } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import NotSignedIn from "../notSignedIn/NotSignedIn";
import "./Profile.css";

function Profile() {

    document.title = "Profile | Musical Masterminds";

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordToggled, setPasswordToggled] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault()
        axios.post("api/users/updatepassword", {
            id: sessionStorage.getItem("userId"),
            password: password,
            passwordCheck: passwordCheck,
        }).then((res) => {
            if (res.data.status === "OK") {
                alert("Password successfully changed")
            }
        }).catch((err) => {
            alert("Error, unable to change passwords")
        })
    };

    const onChangeHandler = (event) => {
        if (event.target.id === "password") {
            setPassword(event.target.value)
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value)
        }
    };

    const toggle = () => {
        setPasswordToggled(!passwordToggled)
    }


    return (
        <div className="profileWrapper">
            {(!sessionStorage.getItem('signedIn')) ? 
                <div><h1 className="title">You are not signed in</h1></div> :
                <div className="profileContent">
                    <IdleTimerContainer />
                    <div className="password-reset">
                    <div className="profile-panel">
                        <h3>Your username: {sessionStorage.getItem("username")}</h3>
                        <h4>Your email: {sessionStorage.getItem("email")}</h4>
                        <p>Date of Birth:</p>
                        <p>Favourite Musical:</p>
                    </div>
                    <a href="#" onClick={toggle}>Reset password</a>
                    {(passwordToggled) ? 
                    <div id="show_hide">                    
                        <form className="reset" onSubmit={onSubmit}>
                            <label htmlFor="password">New password</label>
                            <input id="password" name="password" type="password" value={password} placeholder="Reset Password" onChange={onChangeHandler}></input>
                            <br />
                            <label htmlFor="passwordCheck">Confirm password</label>
                            <input id="passwordCheck" name="passwordCheck" value={passwordCheck} type="password" placeholder="Confirm Password" onChange={onChangeHandler}></input>
                            <input value="submit" type="submit"></input>
                        </form>
                    </div> : ""
                    }
                    </div>
                </div>  
            }
        </div>
    );
};

export default Profile;