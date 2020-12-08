import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import axios from 'axios';


function Signin() {
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
        axios.post('http://localhost:5000/users/Signin', {email, password}).then((res) => {
            if (res.data.status === 'OK') {
                sessionStorage.setItem('signedIn', 'true');
                sessionStorage.setItem('email', res.data.emailAddress);
                sessionStorage.setItem('username', res.data.username);
                history.push('/main');
            } else {
                history.push('/signup');
            }
        });
    }

    return (
        <div className="signin">
            <h1 className="signin-title">Sign in</h1>
            <form onSubmit={onSubmit} className="signInForm">

                <label htmlFor="email">Enter your email address</label>
                <input onChange = {onChange} value = {email} id="email" type="email" name="email" placeholder="Username/email"></input>

                <label htmlFor="password">Enter your Password</label>
                <input onChange = {onChange} value = {password} id="password" type="password" name="password" placeholder="Password"></input>

                <input id="submit-signin" type="submit" value="sign In"></input>
                
                <a href="/signup" className="signup-link">Create an Account</a>
            </form>
        </div>
    );
}
export default Signin;