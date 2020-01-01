import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Signup from "./components/signupOption"
import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/" component={root} />
            <Route path="/signup" component={Signup}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
