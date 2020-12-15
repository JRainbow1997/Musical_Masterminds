import axios from "axios";
import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import Oklahoma from "./images/Oklahoma.jpg";
import Wicked from "./images/Wicked.png";
import Hercules from "./images/Hercules.jpg";
import "./Quiz.css";

const LoadQuestions = () => {

    document.title = "Quiz | Musical Masterminds";

    let history = useHistory();
    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState(4);

    const submitForm = (event) => {
        let i = 0;
        event.preventDefault()
        axios
            .get(`https://opentdb.com/api.php?amount=${amount}&category=13&difficulty=${difficulty}`)
            .then((res) => {
                let questions = [];
                let type = [];
                let answers = [];
                while (i !== (amount)) {
                    questions.push(res.data.results[i].question);
                    type.push(res.data.results[i].type);
                    answers.push(res.data.results[i].correct_answer);
                    if (type[i] === "boolean") {
                        answers.push(res.data.results[i].incorrect_answers[0]);
                    } else if (type[i] === "multiple") {
                        for (let j = 0; j < 3; j++) {
                            answers.push(res.data.results[i].incorrect_answers[j]);
                        }
                    }
                    i += 1;
                }
                sessionStorage.setItem("Questions", JSON.stringify(questions));
                sessionStorage.setItem("Type", JSON.stringify(type));
                sessionStorage.setItem("Answers", JSON.stringify(answers));
                history.push("/Questions");
            })
            .catch((err) => {
                alert((err))
            })
    }
    const onChangeHandler = (event) => {
        if (event.target.id === "difficulty") {
            setDifficulty(event.target.value)
            document.getElementById("portrait").style.visibility = "visible"
            if ((event.target.value) === "easy"){
                document.getElementById("portrait").src = Oklahoma;
                document.getElementById("quote").innerHTML = "\"I've got a wonderful feeling,\n everything's going my way!\" ~ Richard Rodgers";
            }else if ((event.target.value) === "medium"){
                document.getElementById("portrait").src = Wicked;
                document.getElementById("quote").innerHTML = "\"It's time to trust my instincts\n close my eyes and LEAP\" ~ Stephen Schwartz";
            }else if ((event.target.value) === "hard"){
                document.getElementById("portrait").src = Hercules;
                document.getElementById("quote").innerHTML = "\"I will beat the odds, I can go the distance, I will face\n the world fearless, proud & strong!\" ~ Alan Menken";
            }
        } else if (event.target.id === "amount") {
            setAmount(event.target.value);
        }
    }
    const lookup = {
        "easy":[
            {id: '4', text: 'Half of the Questions (4)'},
            {id: '6', text: 'Most of the Questions (6)'},
            {id: '8', text: 'All of the Questions (8)'},
        ],
        "medium":[
            {id: '6', text: 'Half of the Questions (6)'},
            {id: '10', text: 'Most of the Questions (10)'},
            {id: '13', text: 'All of the Questions (13)'},
        ],
        "hard":[
            {id: '5', text: 'Half of the Questions (5)'},
            {id: '8', text: 'Most of the Questions (8)'},
            {id: '10', text: 'All of the Questions (10)'},
        ]
    }
    const options = lookup[difficulty];
    return (
        <div class="quizWrapper">
            <form className="quizForm" onSubmit={submitForm}>
                <label name="difficulties">Select Difficulity</label>
                <select name="difficulties" id="difficulty" onChange={onChangeHandler} value={difficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <label name="amount">Select Number of Questions</label>
                <select name="amount" id="amount" onChange={onChangeHandler} value={amount}>
                    {options.map(o => <option key={o.id} value={o.id}>{o.text}</option>)}
                </select>
                <input type="submit" value="submit" id="submit"></input>
            </form>
            <div className="photoAndQuote">
                <img id="portrait" src={Oklahoma} className="portrait" alt="logo" />
                <h3 id = "quote">"I've got a wonderful feeling,<br/> everything's going my way!" ~ Richard Rodgers"</h3>
            </div>
        </div>
    );
};

export default LoadQuestions;
