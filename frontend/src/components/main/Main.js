import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Main.css";

function Main() {

  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/signout");
    }, 3600000); //Signs user out after 5 minutes
  });

  return (
    <div class="mainWrapper">
      <h1>Main Page</h1>
    </div>
  );
}

export default Main;
