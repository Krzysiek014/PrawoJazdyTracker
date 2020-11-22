import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
function HomePage() {
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime={false}>
      </NavigationBar>
      <img src={loginBG} style={{height: "-webkit-fill-available"}}></img>
    </div>
  );
}

export default HomePage;
