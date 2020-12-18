import React from "react";
import axios from "axios";
import { Link, BrowserRouter } from "react-router-dom";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Questions.css";

const Questions = () => {
    document.title = "Quiz | Musical Masterminds";
    let textInput = React.createRef();
    let questions = JSON.parse(sessionStorage.getItem("Questions"));
    let type = JSON.parse(sessionStorage.getItem("Type"));
    let answers = JSON.parse(sessionStorage.getItem("Answers"));
    let specificAnswers = [];
    let questionNum = 0;
    let questionAnswers = 0;
    let finalScore = 0;
    let choice = '';
    let correctAnswer = '';

    const calculateFinalScore = () => {
        axios.post('api/quiz', {
            userId: sessionStorage.getItem("userId"),
            score: finalScore,
            difficulty: sessionStorage.getItem("Difficulty")
        }).then((res) => {
            if (res.data.status === 'OK') {
                document.getElementById("answer-display").style.visibility = "hidden"
                document.getElementById("3and4").style.visibility = "hidden"
                document.getElementById("displayScore").innerHTML = `You got ${finalScore}/${questionNum} correct!`;
                document.getElementById("results").style.visibility = "visible"
            }
        }).catch((err) => {
            alert(err, "Unable to send data to leaderboard")
        })
    }

    const curtains = () => {
        document.getElementById("start").style.visibility = "hidden"
    }

    const shuffleAnswers = (event) => {
        event.preventDefault();
        if (event.target.id === "start"){
            curtains();
        }
        if (questionAnswers < answers.length) {
            choice = '';
            specificAnswers = [];
            document.getElementById("question").innerHTML = questions[questionNum];
            questionNum += 1;
            correctAnswer = answers[questionAnswers]
            if (type[questionNum - 1] === "multiple") {
                document.getElementById("3and4").style.visibility = "visible"
                questionAnswers += 4;
                for (let x = questionAnswers - 4; x < questionAnswers; x++) {
                    specificAnswers.push(answers[x]);
                }
                for (let i = specificAnswers.length - 1; i > 0; i--) { //fisher-yates shuffle
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = specificAnswers[i];
                    specificAnswers[i] = specificAnswers[j];
                    specificAnswers[j] = temp;
                }
                for (let i = 0; i < 4; i++){
                    document.getElementById(`answer${i+1}`).innerHTML = specificAnswers[i];
                }
            } else if (type[questionNum - 1] === "boolean") {
                questionAnswers += 2;
                for (let x = questionAnswers - 2; x < questionAnswers; x++) {
                    specificAnswers.push(answers[x]);
                }
                if (specificAnswers[0] === "False") {
                    specificAnswers.reverse();
                }
                for (let i = 0; i < 2; i++){
                    document.getElementById(`answer${i+1}`).innerHTML = specificAnswers[i];
                }
                document.getElementById("3and4").style.visibility = "hidden"
            }
        } else {
            console.log("end");
            calculateFinalScore();    
        }
    };

    const chooseAnswer = (event) => {
        choice = event.target.innerHTML;
    }
    
    const submit = (event) => {
        if (choice === '') {
            alert("You must select an answer first!")
        } else {
            if (choice === correctAnswer) {
                finalScore += 1;
            }
            shuffleAnswers(event);
        }
    }

    return (
        <div data-animation="curtain">
            <div></div>
                <div className="questions-wrapper" id="questions-wrapper">
                <IdleTimerContainer />
                    <div id="answer-display">
                        <p id="question">{questions[questionNum - 1]}</p>
                        <div id="1and2">
                            <button type="button" className="answer" id="answer1" ref={textInput} onClick={chooseAnswer}>1</button>
                            <button type="button" className="answer" id="answer2" ref={textInput} onClick={chooseAnswer}>2</button>
                        </div>
                        <div id="3and4">
                            <button type="button" className="answer" id="answer3" ref={textInput} onClick={chooseAnswer}>3</button>
                            <button type="button" className="answer" id="answer4" ref={textInput} onClick={chooseAnswer}>4</button>
                        </div>
                        <button type="submit" id="lock-in" className="lock-in" onClick={submit}>Lock in!</button>
                    </div>
                    <div id="results" className="results">
                        <p id="displayScore"></p>
                        <Link to="/quiz">Try Again!</Link>
                    </div>
                    <div />
                </div>
            <div>
                <p>Are you ready to take center stage?</p>
                <button className="start" id="start" onClick={shuffleAnswers}>I WAS BORN READY</button>
            </div>
        </div>
    )
}

export default Questions;