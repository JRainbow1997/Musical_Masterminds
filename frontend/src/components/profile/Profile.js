import axios from "axios";
import React, { useState } from "react";
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

    const [fave_musical, setFave_Musical] = useState("")
    const [dob, setDob] = useState("")
    const [profileToggled, setProfileToggled] = useState(false);

    // const profileSubmit = (event) => {
    //     event.preventDefault()
    //     axios.post("api/users/updateprofile", {
    //         id: sessionStorage.getItem("userId"),
    //         fave_musical: fave_musical,
    //         birth_date: new Date(dob).toDateString()
    //     }).then((res) => {
    //         if (res.data.status === "OK") {
    //             alert("Profile Update")
    //         }
    //     }).catch((err) => {
    //         alert("Error")
    //     });
    // };

    const musicalSubmit = (event) => {
        event.preventDefault()
        axios.post("api/users/updatemusical", {
            id: sessionStorage.getItem("userId"),
            fave_musical: fave_musical
        }).then((res) => {
            if (res.data.status === "OK") {
                alert("Musical Updated")
            }
        }).catch((err) => {
            alert("Error")
        });
    };
    const dobSubmit = (event) => {
        event.preventDefault()
        axios.post("api/users/updatedob", {
            id: sessionStorage.getItem("userId"),
            birth_date: new Date(dob).toDateString()
        }).then((res) => {
            if (res.data.status === "OK") {
                alert("Date of Birth Update")
            }
        }).catch((err) => {
            alert("Error")
        });
    };

    const musicalHandler = (event) => {
        event.preventDefault()
        setFave_Musical(event.target.value);
    }
    const dobHandler = (event) => {
        event.preventDefault()
        setDob(event.target.value)
    }
    const proftoggle = () => {
        setProfileToggled(!profileToggled)
    }

    return (
        <div className="profileWrapper">
            {(!sessionStorage.getItem('signedIn')) ?
                <div><h1 className="title">You are not signed in</h1></div> :
                <div className="profileContent">
                    <IdleTimerContainer />
                    <div className="profile-forms">
                        <div className="profile-panel">
                            <h3>Your username: {sessionStorage.getItem("username")}</h3>
                            <h4>Your email: {sessionStorage.getItem("email")}</h4>
                            <p>Date of Birth: {sessionStorage.getItem("DOB")}</p>
                            <p>Favourite Musical: {sessionStorage.getItem("fave_musical")}</p>
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
                    
                    <div>
                        <a href="#" onClick={proftoggle}>Update Profile</a>
                        {(profileToggled) ?
                            <div id="show_hide">
                                <div className="musical-form">
                                    <form onSubmit={musicalSubmit} className="reset">
                                        <label htmlFor="fav_musical">Enter Your favourite musical</label>
                                        <input id="fave_musical" type="text" placeholder="Enter Your favourite musical" onChange={musicalHandler} value={fave_musical}></input>
                                        <input type="submit" value="submit"></input>
                                    </form>

                                </div>
                                <div className="dob-form">
                                    <br></br>
                                    <form onSubmit={dobSubmit} className="reset">
                                        <label htmlFor="DOB">Enter Your Date of Birth</label>
                                        <input type="date" placeholder="Enter Your Date of Birth" onChange={dobHandler} value={dob}></input>
                                        <input type="submit" value="submit"></input>
                                    </form>
                                </div>
                            </div> : ""
                        }
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Profile;