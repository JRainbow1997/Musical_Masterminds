import React, { useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Main.css";
import NotSignedIn from "../notSignedIn/NotSignedIn"

function Main() {
  return (
    <div className="mainWrapper">
      <IdleTimerContainer />
      {(!sessionStorage.getItem('signedIn')) ? <div><NotSignedIn/></div> :
        <div className="mainContent">
          <div className="welcome">
            <h1>Welcome</h1>
            <br />
            <a className="user-link" href="/profile"><h2>{sessionStorage.getItem("username")}</h2></a>
            <br />
            <h3>I'm obsessed with Musicals, but it might just be a stage</h3>
            <br />
            <h3>But as far as Broadway puns go, <i>Anything goes</i></h3>
            <br />
            <h2>Get Started by hitting the TAKE QUIZ button</h2>
          </div>
          <a className="quiz-btn" href="/quiz">TAKE QUIZ</a>
          <a className="ldr-btn" href="/leaderboard">LATEST LEADERS</a>
        </div>
      }
    </div>
  );
}

export default Main;
