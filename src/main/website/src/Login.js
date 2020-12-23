import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import logoutBG from './logout.jpg'
import NavigationBar from './components/NavigationBar';
import './App.css';
import LoginContainer from './components/LoginContainer';
function Login() {
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime = {true}>
      </NavigationBar>
      <img src={window.location.search=='?logout' ? logoutBG : loginBG} style={{height: "-webkit-fill-available"}}></img>
      <LoginContainer></LoginContainer>
    </div>
  );
}

export default Login;
