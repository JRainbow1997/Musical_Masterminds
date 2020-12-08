import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
    return(
    <div class="errorWrapper">
        <h1>ERROR 404</h1>
        <h3>You've gone off track!
            <br/>
            <br/>
        Click below to get back where you need to be.
        </h3>
        <a id="errorLink" href="/#"><Link to="/main">Bring me home!</Link></a>
    </div>
    );
};

export default PageNotFound;