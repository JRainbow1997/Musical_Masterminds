import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoadQuestions from "./LoadQuestions";
import Questions from "./Questions";
import "./Quiz.css";

const Quiz = () => {
    return (
        <div class="quiz-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/quiz" component={LoadQuestions} />
                    <Route exact path="/questions" component={Questions} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Quiz;
