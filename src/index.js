import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './components/signupOption';
import Signin from './components/signinOption';
import Dashboard from './components/dashboard';

const routing = (
    <Router>
        <div>
            <Route exact path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/> 
            <Route path="/dashboard" component={Dashboard}/> 
        </div>
    </Router>
);

export default routing;

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
