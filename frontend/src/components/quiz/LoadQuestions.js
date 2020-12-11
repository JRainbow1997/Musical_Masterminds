import axios from "axios";
import React, { useState, } from "react";
import { useHistory } from "react-router-dom"
import "./Quiz.css";

const LoadQuestions = () => {
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
        </div>
    );
};

export default LoadQuestions;
