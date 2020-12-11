import axios from "axios";
import React, { useState, useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./Leaderboard.css";


const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [LBFilter, setLBFilter] = useState("all");

  const parseData = (data) => {
    const changedResults = data.map((item) => {
      return item.results.map((res) => {
        return { "username": item.username, "score": res.score, "difficulty": res.difficulty, "date": new Date(res.date).toDateString() };
      });
    });
    const result = [].concat.apply([], changedResults).sort((a, b) => { return b.score - a.score }).slice(0, 9);
    if (LBFilter != "all") {
      return (result.filter((result) => { return (result.difficulty == LBFilter) }));
    } 
    return result
  };

  const getResponse = () => {
    axios
      .post("api/leaderboard")
      .then((res) => {
        setLeaderboard(parseData(res.data.results));
      })
      .catch((err) => {
        alert(err, "No Leader");
      });
  };

  const onSubmit = (event) => {
    event.preventDefault()
    getResponse()
  }
  const onChangeHandler = (event) => {
    setLBFilter(event.target.value)
  }

  useEffect(() => {
    if (leaderboard.length === 0) {
      getResponse();
    }
  });
  useEffect(() => {
    if (!sessionStorage.getItem("signedIn")) {
      return;
    }
  })

  return (
    <div className="leaderboardWrapper">
      <IdleTimerContainer />
      {(!sessionStorage.getItem('signedIn')) ? <div><h1 className="title">You are not signed in</h1></div> :
        <div>
          <div>
            <p>Which leaderboard would you like to view?</p>
            <form onSubmit={onSubmit}>
              <select name="difficulties" id="difficulty" onChange={onChangeHandler}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="all" selected>All</option>
              </select>
              <input type="submit" value="submit"></input>
            </form>
          </div>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
                <th>Difficulty</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((playerResult, index) => {
                return (
                  <tr>
                    <td key={index}>{playerResult.username}</td>
                    <td key={index}>{playerResult.score}</td>
                    <td key={index}>{playerResult.difficulty}</td>
                    <td key={index}>{playerResult.date}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Leaderboard;
