import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import Register from './Register';
import HomePage from './HomePage';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Settings from './Settings';
import LessonShare from './LessonShare';
import Profile from './Profile';


ReactDOM.render(
  (
  <BrowserRouter>
    <Switch>
      <Route path="/website/login" component={Login}/>
      <Route path="/website/register" component={Register}/>
      <Route path="/website/home" component={HomePage}/>
      <Route path="/website/settings" component={Settings}/>
      <Route path="/website/lesson/" component={LessonShare}/>
      <Route path="/website/profile/" component={Profile}/>
    </Switch>
  </BrowserRouter>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
