import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";

function Main() {
    let history = useHistory();

    useEffect(() => {
      setTimeout(() => {
        history.push("/signout");
      }, 3600000); //Signs user out after 60 minutes
    });
  
    useEffect(() => {
        if (!sessionStorage.getItem("signedIn")) {
          return;
        }
    })

    return(
    <div class="mainWrapper">
        {(!sessionStorage.getItem('signedIn')) ? <div><h1 className="title">You are not signed in</h1></div> :
        <h1>Main Page</h1>
        }
    </div>
  );
}

export default Main;
