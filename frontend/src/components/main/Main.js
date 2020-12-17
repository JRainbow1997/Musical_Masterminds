import React from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Main.css";
import NotSignedIn from "../notSignedIn/NotSignedIn"

function Main() {

  if (window.location.href.substr(-2) !== '?r') {
    window.location = window.location.href + '?r';
  }

  return (
    <div className="mainWrapper">
      <IdleTimerContainer />
      {(!sessionStorage.getItem('signedIn')) ? <div><NotSignedIn /></div> :
        <div className="mainContent">
          <div className="welcome">
            <h1 className="main-title">Welcome</h1>
            <br />
            <a className="user-link" href="/profile"><h2>{sessionStorage.getItem("username")}</h2></a>
            <br />
            <h3>I'm obsessed with Musicals but, it might just be a stage</h3>
            <br />
            <h3>But as far as Broadway puns go, <i>Anything goes</i></h3>
            <br />
            <h2>Get Started by hitting the TAKE QUIZ button</h2>
          </div>
          <div className="quiz-btn-div">
            <a className="quiz-btn" href="/quiz">TAKE QUIZ</a>
          </div>
          <div className="ldr-btn-div">
            <a className="ldr-btn" href="/leaderboard">LATEST LEADERS</a>
          </div>
        </div>
      }
    </div>
  );
}

export default Main;
