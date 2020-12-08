import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/signin/Signin';
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div>
      <h1>hello</h1>
      <BrowserRouter>        
        <Route exact path="/Signup" component={Signup} />        
        <Route exact path='/Signin' component={Signin} />        
      </BrowserRouter> 
    </div>
  );
}

export default App;
