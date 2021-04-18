import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./header/Header";

function App() {
  return (
    <Router> <div className="App">
  <Header />    
<Switch>

<Route path="/login"></Route>
<Route path="/register"></Route>
<Route path="/">home</Route>
</Switch>
{/* ucuncugit*/}
    
    
    </div>
    </Router>
   
  );
}

export default App;
