import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import NotSignedIn from "../notSignedIn/NotSignedIn";
import LoadQuestions from "./LoadQuestions";
import Questions from "./Questions";
import "./Quiz.css";

const Quiz = () => {
    return (
        <div class="quiz-wrapper">
          {(!sessionStorage.getItem('signedIn')) ? <div><NotSignedIn /></div> :
            <BrowserRouter>
                <Switch>
                    <Route exact path="/quiz" component={LoadQuestions} />
                    <Route exact path="/questions" component={Questions} />
                </Switch>
            </BrowserRouter>
          };
        </div>
    );
};

export default Quiz;
