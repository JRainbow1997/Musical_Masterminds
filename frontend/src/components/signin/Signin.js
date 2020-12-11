import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import axios from 'axios';
import "./Signin.css"


const Signin = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (event) => {
        if (event.target.id === "email") {
            setEmail(event.target.value);
        } else if (event.target.id === "password") {
            setPassword(event.target.value);
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        axios.post('api/users/', { email, password }).then((res) => {
            if (res.data.status === 'OK') {
                sessionStorage.setItem('signedIn', true);
                sessionStorage.setItem('email', res.data.emailAddress);
                sessionStorage.setItem('username', res.data.username);
                sessionStorage.setItem('userId', res.data.userId);
                history.push('/main');
            } else {
                history.push('/signup');
            }
        });
    }

    return (
        <div className="signin">
            <form onSubmit={onSubmit} className="signin-form">
                <h1 className="signin-title">Sign in</h1>

                <label htmlFor="email">Enter your email address</label>
                <input onChange={onChange} value={email} id="email" type="email" name="email" placeholder="Username/email"></input>

                <label htmlFor="password">Enter your password</label>
                <input onChange={onChange} value={password} id="password" type="password" name="password" placeholder="Password"></input>

                <input id="submit-signin" className="submit-signin" type="submit" value="Sign In"></input>

                <a href="/signup" className="signup-link">Create an Account</a>
            </form>
        </div>
    );
}
export default Signin;