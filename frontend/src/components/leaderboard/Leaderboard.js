import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const parseData = (data) => {
    const changedResults = data.map((item) => {
      return item.results.map((res) => {
        return { "username": item.username, "score": res.score, "difficulty": res.difficulty, "date": new Date(res.date).toDateString() };
      });
    });
    return [].concat.apply([], changedResults).sort((a, b) => {return b.score - a.score}).slice(0, 9);
  };

  const getResponse = () => {
    // let userId = sessionStorage.getItem("userId");
    axios
      .post("http://localhost:5000/leaderboard")
      .then((res) => {
        setLeaderboard(parseData(res.data.results));
      })
      .catch((err) => {
        alert(err, "No Leader");
      });
  };

  useEffect(() => {
    if (leaderboard.length === 0) {
      getResponse();
    }
  });

  return (
    <div className="leaderboardWrapper">
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
          ;
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
