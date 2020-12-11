import axios from "axios";
import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import Oklahoma from "./images/Oklahoma.jpg";
import Wicked from "./images/Wicked.jpg";
import Hercules from "./images/Hercules.jpg";
import "./Quiz.css";

const LoadQuestions = () => {

    document.title = "Quiz | Musical Masterminds";

    let history = useHistory();
    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState("5");

    const submitForm = (event) => {
        let i = 0;
        event.preventDefault()
        axios
            .get("api/quiz", { params: { questions: amount, category: 13, difficulty: difficulty } })
            .then((res) => {
                let questions = [];
                let type = [];
                let answers = [];
                while (i != amount) {
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
                alert((err, "No difficulty"))
            })
    }
    const onChangeHandler = (event) => {
        if (event.target.id === "difficulty") {
            setDifficulty(event.target.value)
            document.getElementById("portrait").style.visibility = "visible"
            if ((event.target.value) === "easy"){
                document.getElementById("portrait").src = Oklahoma;
                document.getElementById("quote").innerHTML = "\'I\'ve got a wonderful feeling, everything's going my way!\' ~ Richard Rodgers"
            }else if ((event.target.value) === "medium"){
                document.getElementById("portrait").src = Wicked;
                document.getElementById("quote").innerHTML = "\'It\'s time to trust my instincts close my eyes and LEAP\' ~ Stephen Schwartz"
            }else if ((event.target.value) === "hard"){
                document.getElementById("portrait").src = Hercules;
                document.getElementById("quote").innerHTML = "\'I will beat the odds, I can go the distance, I will face the world fearless, proud & strong!\' ~ Alan Menken"
            }
        } else if (event.target.id === "amount") {
            setAmount(event.target.value)
        }
    }

    return (
        <div class="quizWrapper">
            <p>Select difficulity</p>
            <form onSubmit={submitForm}>
                <select name="difficulties" id="difficulty" onChange={onChangeHandler} value={difficulty}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select name="amount" id="amount" onChange={onChangeHandler} value={amount}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                </select>
                <input type="submit" value="submit"></input>
            </form>
            <div>
                <img id="portrait" className="portrait" alt="logo" />
                <h3 id = "quote"></h3>
            </div>
        </div>
    );
};

export default LoadQuestions;
