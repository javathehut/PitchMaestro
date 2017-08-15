import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Header from './Header.js';
import App from './App';
import SignupLogin from './SignupLogin.js';
import Stats from './Stats.js';
import Email from './Email.js';
import About from './About.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={App} />
            <Route path="signuplogin" component={SignupLogin} />
            <Route path="stats" component={Stats} />
            <Route path="email" component={Email} />
            <Route path="about" component={About} />
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();


