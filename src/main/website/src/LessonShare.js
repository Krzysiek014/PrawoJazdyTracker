import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MapCardContainer from './components/MapCard';
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "10px",
  }
}));

function LessonShare() {
  const classes = useStyles();
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/map/lesson/" + new URLSearchParams(window.location.search).get('id'))
    .then(res => res.json())
    .then(
      (result) => {
          setData(result)
      }
    ).catch(e => setError(e))
    .finally(() => setLoading(false))
  }, [])
  return (
    <div >
      <NavigationBar firstTime={true}>
      </NavigationBar>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2}>
            <Paper></Paper>
        </Grid>
        <Grid item xs={10}>
          {error ? <Typography>Wystąpił błąd: {error}</Typography>
          : loading ? <CircularProgress />
          : <Paper>
              <MapCardContainer id={data.id} name={data.name} date={moment(new Date(data.date)).format('DD.MM.YYYY')}></MapCardContainer>
            </Paper>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default LessonShare;
