import React from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MapCardContainer from './components/MapCard';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "10px",
  }
}));

function HomePage() {
  const classes = useStyles();
  // document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime={false}>
      </NavigationBar>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2}>
            <Paper></Paper>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <MapCardContainer></MapCardContainer>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
