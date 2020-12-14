import axios from "axios";
import React, { useState, useEffect } from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import NotSignedIn from "../notSignedIn/NotSignedIn";
import "./Leaderboard.css";


const Leaderboard = () => {

  document.title = "Leaderboards | Musical Masterminds";

  const [leaderboard, setLeaderboard] = useState([]);
  const [LBFilter, setLBFilter] = useState("all");

  const parseData = (data) => {
    const changedResults = data.map((item) => {
      return item.results.map((res) => {
        return { "username": item.username, "score": res.score, "difficulty": res.difficulty, "date": new Date(res.date).toDateString() };
      });
    });
    const result = [].concat.apply([], changedResults).sort((a, b) => { return b.score - a.score }).slice(0, 9);
    if (LBFilter !== "all") {
      return (result.filter((result) => { return (result.difficulty === LBFilter) }));
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

  return (
    <div className="LB-background">
      <IdleTimerContainer />
      {(!sessionStorage.getItem('signedIn')) ? <div><NotSignedIn/></div> :
        <div className="LB-Content">
          <div>
            <h1 className="LB-title">Leaderboard</h1>
            <h2>Which leaderboard would you like to view?</h2>
            <form id="forms" onSubmit={onSubmit}>
              <select name="difficulties" id="difficulty" onChange={onChangeHandler}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="all" selected>All</option>
              </select>
              <input type="submit" value="submit" id="submit"></input>
            </form>
          </div>
          <table className="LB-table">
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
