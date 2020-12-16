import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import "./Signup.css";

const Signup = () => {

    document.title = "Signup | Musical Masterminds";

    let history = useHistory();
    const [username, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const getResponse = (event) => {
        event.preventDefault();
        axios.post('api/users/Signup', {
            username: username,
            emailAddress: email,
            password: password,
            passwordCheck: passwordCheck
        }).then((res) => {
            if (res.data.status === 'OK') {
                sessionStorage.setItem('signedIn', true);
                sessionStorage.setItem('email', res.data.emailAddress);
                sessionStorage.setItem('userId', res.data.userId);
                sessionStorage.setItem("fave_musical", res.data.fave_musical);
                sessionStorage.setItem("DOB", res.data.birth_date);
                history.push('/main');
            }
        }).catch((err) => {
            alert( "Unable to set up account.")
        })
    };

    const onChangeHandler = (event) => {
        if (event.target.id === "username") {
            setUser(event.target.value)
        } else if (event.target.id === "email") {
            setEmail(event.target.value)
        } else if (event.target.id === "password") {
            setPassword(event.target.value)
        } else if (event.target.id === "passwordCheck") {
            setPasswordCheck(event.target.value)
        }
    }

    return (
        <div className="signup">
            <form onSubmit={getResponse} className="signup-form">
                <h1 className="signup-title">Create Account</h1>

                <label htmlFor="username">Create a username</label>
                <input id="username" type="text" name="username" placeholder="username" onChange={onChangeHandler}></input>

                <label htmlFor="email">Enter an email</label>
                <input id="email" type="email" name="email" placeholder="email" onChange={onChangeHandler}></input>

                <label htmlFor="password">Create a password</label>
                <input id="password" type="password" name="password" placeholder="password" onChange={onChangeHandler}></input>

                <label htmlFor="passwordCheck">Re-enter the password</label>
                <input id="passwordCheck" type="password" name="passwordCheck" placeholder="verify password" onChange={onChangeHandler}></input>

                <input type="submit" value="Create Your Account" className="Submit"></input>

                <a href="/" className="signin-page">Already have an account, Sign-in?</a>
            </form>
        </div>
    );
}

export default Signup;