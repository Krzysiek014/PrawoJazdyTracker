import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
import RegisterContainer from './components/RegisterContainer';
function Register() {
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime = {true}>
      </NavigationBar>
      <img src={loginBG} style={{height: "-webkit-fill-available"}}></img>
      <RegisterContainer></RegisterContainer>
    </div>
  );
}

export default Register;
