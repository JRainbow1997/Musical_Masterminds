import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  const getResponse = () => {
    // let userId = sessionStorage.getItem("userId");
    axios
      .post("http://localhost:5000/leaderboard")
      .then((res) => {
        setLeaderboard(res.data.results);
        console.log(res.data.results)
      })
      .catch((err) => {
        alert(err, "No Leader");
      });
  };

  useEffect(() => {
    if (leaderboard.length === 0) {
      getResponse();
    //   console.log(leaderboard)
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
          {leaderboard.map((playerResult, index) => (
              {playerResult.map((result, index) => (
               <tr>
              <td key={index}>{playerResult.username}</td>
              <td key={index}>{playerResult.results}</td>
              <td key={index}>{playerResult.difficulty}</td>
              <td key={index}>{playerResult.date}</td>
            </tr>   
              ))}
          ))}
          ; 
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
