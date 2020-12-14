import axios from "axios";
import React, { useEffect, useState } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Profile.css";

function Profile() {

    document.title = "Profile | Musical Masterminds";

    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

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


    return (
        <div className="profileWrapper">
            <IdleTimerContainer />
            {(!sessionStorage.getItem('signedIn')) ? 
                <div><h1 className="title">You are not signed in</h1></div> :
                <div className="password-reset">
                    <form onSubmit={onSubmit}>
                        <h2>{sessionStorage.getItem("username")}</h2>
                        <label htmlFor="password">New password</label>
                        <input id="password" name="password" type="password" value={password} placeholder="Reset Password" onChange={onChangeHandler}></input>
                        <br />
                        <label htmlFor="passwordCheck">Confirm password</label>
                        <input id="passwordCheck" name="passwordCheck" value={passwordCheck} type="password" placeholder="Confirm Password" onChange={onChangeHandler}></input>
                        <input value="submit" type="submit"></input>
                    </form>
                </div>  
            }
        </div>
    );
};

export default Profile;