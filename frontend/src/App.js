import { BrowserRouter, Redirect, Route } from "react-router-dom";
import About from "./components/about/About";
import Error from "./components/error/Error";
import Faq from "./components/faq/Faq";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import NavbarSI from "./components/navbar/NavbarSignedIn";
import Profile from "./components/profile/Profile";
import Quiz from "./components/quiz/Quiz";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path = "/About" component = {NavbarSI}/>
              <Route path = "/Faq" component = {NavbarSI}/>
              <Route path = "/Leaderboard" component = {NavbarSI} />
              <Route path = "/Main" component = {NavbarSI} />
              <Route path = "/Profile" component = {NavbarSI} />
              <Route path = "/Quiz" component = {NavbarSI} />
              <Route path = "/" component = {Navbar} />
              <Route path = "/Signin" component = {Navbar} />
              <Route path = "/Signout" component = {Navbar} />
            </Switch>
          </header>
          <body className="AppBody">
            <h1>hello</h1>
            <Switch>
              <Route exact path="/About" component={About} />        
              <Route exact path="/Faq" component={Faq} /> 
              <Route exact path="/Leaderboard" component={Leaderboard} />        
              <Route exact path="/Main" component={Main} /> 
              <Route exact path="/Profile" component={Profile} />        
              <Route exact path="/Quiz" component={Quiz} /> 
              <Route exact path="/" component={Signin} />        
              <Route exact path="/Signup" component={Signup} />
              <Route path = "/404" component={ Error } />
              <Redirect to="404" />
            </Switch>
          </body>              
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
