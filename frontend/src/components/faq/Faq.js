import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div class="faq-wrapper">
      <div class="faq-header">Frequently Asked Questions</div>
      <div className="faq-header">
        <div className="faq-content">
          <div class="faq-question">
            <input id="q0" type="checkbox" class="panel" />
            <div class="plus">🎶</div>
            <label for="q0" class="panel-title">
              What is this site?
            </label>
            <div class="panel-content">
              <p>A Musical Theatre Quiz website which lets you test your knowledge on a vairety of musical based questions</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q1" type="checkbox" class="panel" />
            <div class="plus">🤔</div>
            <label for="q1" class="panel-title">
              What are the difficulties?
            </label>
            <div class="panel-content">
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
          <div class="faq-question">
            <input id="q2" type="checkbox" class="panel" />
            <div class="plus">✖</div>
            <label for="q2" class="panel-title">
              How many questions are there?
            </label>
            <div class="panel-content">
              <p>You can set the amount of questions you answer. The default is 10.</p>
            </div>
          </div>
        </div>
        <div className="faq-content">
          <div class="faq-question">
            <input id="q3" type="checkbox" class="panel" />
            <div class="plus">🏆</div>
            <label for="q3" class="panel-title">
              How does the leaderboard work?
            </label>
            <div class="panel-content">
              <p>The leaderboard displays the user with the most correct answers, the difficulty they set and what date they took the quiz.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
