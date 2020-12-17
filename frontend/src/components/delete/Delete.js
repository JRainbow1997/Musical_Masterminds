import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Delete.css";

function Delete() {

    const email = sessionStorage.getItem("email");
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    
    const handleChange = (event) => {
        if (event.target.id === "password"){setPassword(event.target.value)};
        if (event.target.id === "verifyPassword"){setVerifyPassword(event.target.value)};
    }
    const sendDataToExpress = (event) => {
        event.preventDefault();
        console.log(password);
        let loggedInPassword = sessionStorage.getItem('password');
        console.log(loggedInPassword);
        if ((password == loggedInPassword) && (password == verifyPassword)){
            axios.delete('api/users/', {data: {
                id: sessionStorage.getItem("userId"),
            }}).then((res) => {
                console.log(res.data);
                if (res.data.message === "Account deleted") {
                    alert("Account deleted");
                    history.push('/');
                } else {
                    alert(res.data.message);
                    setPassword("");
                    setVerifyPassword("");
                }
            }).catch((err) => {
                alert("Account not deleted.")
            })
        }else{alert("Password is incorrect")}
    }
    return(
        <div ClassName ="delete-wrapper">
            <form onSubmit={sendDataToExpress} className="delete-form">
                <h2>WOAAAHHHHH THERE PLASTIC HORSE ~ Shrek the Musical<br/> Are you sure you want to delete your Musical Masterminds account?</h2>
                <label htmlFor="email" name="email" id="email" value={email}>{email}</label>
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} id="password" className="deleteUserInput" onChange={handleChange}></input>
                <label htmlFor="verifyPassword">Verify Password: </label>
                <input type="password" name="verifyPassword" value={verifyPassword} className="deleteUserInput" id="verifyPassword" onChange={handleChange}></input>
                <input type="submit" name="submit" className="delete-submit"></input>
            </form>
        </div>
    );
};

export default Delete;