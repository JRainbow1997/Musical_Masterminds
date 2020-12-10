import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoadQuestions from "./LoadQuestions";
import Questions from "./Questions";
import "./Quiz.css";

const Quiz = () => {
    return (
        <div class="quizWrapper">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/Quiz" component={LoadQuestions} />
                    <Route exact path="/Questions" component={Questions} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Quiz;
