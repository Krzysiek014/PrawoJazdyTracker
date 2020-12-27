import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import loginBG from './login.jpg';
import NavigationBar from './components/NavigationBar';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress'
import MapCardContainer from './components/MapCard';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "10px",
  }
}));


// console.log(new URLSearchParams(window.location.search).get('id'));

function Profile() {
  const classes = useStyles();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/map/lessons/" + new URLSearchParams(window.location.search).get('name'))
    .then(res => res.json())
    .then(
      (result) => {
          setData(result);
      }
    ).catch(e => setError(e))
    .finally(() => setLoading(false))
  }, [])

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
            {error ? <Typography>Wystąpił błąd: {error}</Typography>
            : loading ? <CircularProgress />
            : data.length>0 ?
              data.map(i =>(
                <Grid item>
                  <Paper>
                    <MapCardContainer owner={false} id={i.id} name={i.name} date={moment(new Date(i.date)).format('DD.MM.YYYY')}></MapCardContainer>
                  </Paper>
                </Grid>
                ))
              : <Grid item>
                <Paper style={{width: '60vw', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant='h4'>Ten użytkownik jeszcze nie ma żadnych zarejestrowanych lekcji</Typography>
                </Paper>
              </Grid>
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
