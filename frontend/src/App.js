import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Navbar from "";
import NavbarLoggedIn from "";
import Logo from "./appImages/logo.png";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          <Switch>
            <Route exact path = "/main" component = {NavbarLoggedIn}/>
            <Route exact path = "/" component = {Navbar}/>
          </Switch>
          </header>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
