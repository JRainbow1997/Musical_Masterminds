import axios from "axios";
import React, { useState, } from "react";
import "./Quiz.css";

const Quiz = () => {

    const [difficulty, setDifficulty] = useState("easy");
    const [amount, setAmount] = useState("5");


    const submitForm = (event) => {
        event.preventDefault()
        axios
            .get("http://localhost:5000/quiz", { params: { questions: amount, category: 13, difficulty: difficulty } })
            .then((res) => {
                console.log(res.data.results)
            })
            .catch((err) => {
                alert((err, "No difficulty"))
            })
        console.log(difficulty)
        console.log(amount)
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
            <h1>Quiz Page</h1>
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

            <h1>questions</h1>
            
        </div>
    );
};

export default Quiz;
