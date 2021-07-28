import React from 'react';
import Header from './components/Header'
import Home from'./components/Home' 
import Details from'./components/Details'
import LogIn from './components/LogIn'
import Log from './components/Log'
import sigup from'./components/signup'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";
import signup from './components/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route path="/signup">
            <signup/>
          </Route>
          <Route path="/Log">
            <Log/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/">
           <LogIn/>
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
