import React from 'react';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "10px",
  },
  paper: {
    display: "flex",
    flexDirection: 'column',
    height: '20vh',
    justifyContent: 'space-around',
  }
}));

function Settings() {
  const classes = useStyles();
  document.body.style.overflow = 'hidden';
  return (
    <div >
      <NavigationBar firstTime = {true}>
      </NavigationBar>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={3}>
            <Paper/>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" style={{textAlign: 'center'}}>Ustawienia</Typography>
            <Button variant="contained" color="secondary" href="/map/lesson/deleteAll">
              Usuń wszystkie lekcje
            </Button>
            <Button variant="contained" color="secondary" href="/userApi/deleteAccount">
              Usuń konto
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={3}>
            <Paper/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
