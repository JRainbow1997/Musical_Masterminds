import React from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq-background">
      <IdleTimerContainer />
      <div className="faq-wrapper">
        <div className="faq-header">Frequently Asked Questions</div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q0" type="checkbox" className="panel" />
            <div className="plus">🎶</div>
            <label htmlFor="q0" className="panel-title">
              What is this site?
              </label>
            <div className="panel-content">
              <p>A Musical Theatre Quiz website which lets you test your knowledge on a vairety of musical based questions</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q1" type="checkbox" className="panel" />
            <div className="plus">🤔</div>
            <label htmlFor="q1" className="panel-title">
              What are the difficulties?
            </label>
            <div className="panel-content">
              <p>You can choose between:</p>
              <ul>
                <li>Easy</li>
                <li>Medium</li>
                <li>Hard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q2" type="checkbox" className="panel" />
            <div className="plus">✖</div>
            <label htmlFor="q2" className="panel-title">
              How many questions are there?
            </label>
            <div className="panel-content">
              <p>You can set the amount of questions you answer. The default is 10.</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div className="faq-question">
            <input id="q3" type="checkbox" className="panel" />
            <div className="plus">🏆</div>
            <label htmlFor="q3" className="panel-title">
              How does the leaderboard work?
            </label>
            <div className="panel-content">
              <p>The leaderboard displays the user with the most correct answers, the difficulty they set and what date they took the quiz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
