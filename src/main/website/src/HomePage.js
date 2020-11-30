import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MapContainer from './components/MapCard';

function HomePage() {
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime={false}>
      </NavigationBar>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            <Paper></Paper>
        </Grid>
        <Grid item xs={10}>
            <Paper>
              <MapContainer></MapContainer>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
