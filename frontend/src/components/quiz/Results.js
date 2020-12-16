import React from "react";
import { Link } from "react-router-dom";

function Results() {

    return(
        <div>
            <ul>
                <li><Link to="/quiz">Try Again!</Link></li>
                <li><Link to="/leaderboard">See the Leaderboard</Link></li>
            </ul>
        </div>
    )
}

export default Results;