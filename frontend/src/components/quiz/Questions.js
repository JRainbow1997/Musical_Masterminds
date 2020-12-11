import React from "react";
import "./Quiz.css";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";

const Questions = () => {
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

    const shuffleAnswers = () => {
        console.log(questions);
        console.log(answers);
        if (questionAnswers < answers.length) {
            choice = '';
            specificAnswers = [];
            document.getElementById("question").innerHTML = questions[questionNum];
            questionNum += 1;
            correctAnswer = answers[questionAnswers]
            if (type[questionNum - 1] === "multiple") {
                document.getElementById("answer3").style.visibility = "visible"
                document.getElementById("answer4").style.visibility = "visible"
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
                document.getElementById("answer1").innerHTML = specificAnswers[0];
                document.getElementById("answer2").innerHTML = specificAnswers[1];
                document.getElementById("answer3").innerHTML = specificAnswers[2];
                document.getElementById("answer4").innerHTML = specificAnswers[3];
            } else if (type[questionNum - 1] === "boolean") {
                questionAnswers += 2;
                for (let x = questionAnswers - 2; x < questionAnswers; x++) {
                    specificAnswers.push(answers[x]);
                }
                if (specificAnswers[0] === "False") {
                    specificAnswers.reverse();
                }
                document.getElementById("answer1").innerHTML = specificAnswers[0];
                document.getElementById("answer2").innerHTML = specificAnswers[1];
                document.getElementById("answer3").style.visibility = "hidden"
                document.getElementById("answer4").style.visibility = "hidden"
            }
        } else { alert(`Gameover! you got ${finalScore} right`) }
    };

    const chooseAnswer = (event) => {
        choice = event.target.innerHTML;
        console.log(choice);
    }

    const submit = () => {
        if (choice === '') {
            alert("You must select an answer first!")
        } else {
            if (choice === correctAnswer) {
                console.log("CORRECT")
                finalScore += 1;
            } else {
                console.log("INCORRECT")
            }
            shuffleAnswers()
        }
    }
    // const leftInspire = ["Good ", "Keep ", "Almost ", "You Are "]
    // const rightInspire = ["Job!", "Going!", "There!", "Amazing!"]
    // const inspire = Math.floor(Math.random() * leftInspire.length);
    // const leftQuote = leftInspire[inspire];
    // const rightQuote = rightInspire[inspire];

    return (
        <div className="curtai">
            <IdleTimerContainer />
            <div className="left-pane">
                {/* <h2 className="">{leftQuote}</h2> */}

            </div>

            <div className="right-pane">
                {/* <h2>{rightQuote}</h2> */}
            </div>

            <div className="content">
                <button onClick={shuffleAnswers}>Start</button>
                <p id="question">{questions[questionNum - 1]}</p>
                <div>
                    <button type="button" id="answer1" ref={textInput} onClick={chooseAnswer}>1</button>
                </div>
                <div>
                    <button type="button" id="answer2" ref={textInput} onClick={chooseAnswer}>2</button>
                </div>
                <div>
                    <button type="button" id="answer3" ref={textInput} onClick={chooseAnswer}>3</button>
                </div>
                <div>
                    <button type="button" id="answer4" ref={textInput} onClick={chooseAnswer}>4</button>
                </div>
                <div>
                    <button type="submit" onClick={submit}>Lock in!</button>
                </div>
            </div>
        </div>
    )
}

export default Questions;