import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import PageNotFound from "./components/error/PageNotFound";
import Faq from "./components/faq/Faq";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Quiz from "./components/quiz/Quiz";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Signout from "./components/signout/Signout"
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="AppHeader">
            <Navbar />
          </header>
          <body className="AppBody">
            <Switch>
              <Route exact path="/About" component={About} />
              <Route exact path="/Faq" component={Faq} />
              <Route exact path="/Leaderboard" component={Leaderboard} />
              <Route exact path="/Main" component={Main} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Quiz" component={Quiz} />
              <Route exact path="/" component={Signin} />
              <Route exact path="/Signup" component={Signup} />
              <Route path="/signout" component={Signout} />
              <Route path="/404" component={PageNotFound} />
              <Redirect to="404" />
            </Switch>
          </body>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
