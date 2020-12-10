import React, { useEffect } from "react";
import "./Main.css";

function Main() {
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
};

export default Main;