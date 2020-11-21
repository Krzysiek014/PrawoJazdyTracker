import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
import LoginContainer from './components/Login';
function App() {
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar>
      </NavigationBar>
      <img src={loginBG} style={{height: "-webkit-fill-available"}}></img>
      <LoginContainer></LoginContainer>
    </div>
  );
}

export default App;
