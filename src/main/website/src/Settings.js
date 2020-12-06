import React from 'react';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './App.css';
import { Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  const [open, setOpen] = React.useState(false);
  const [accountDialog, setaccountDialog] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenAccount = () => {
    setaccountDialog(true);
  };
  const handleCloseAccount = () => {
    setaccountDialog(false);
  };
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
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
              Usuń wszystkie lekcje
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Usunąć wszystkie lekcje?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Czy jesteś pewny? Dane utracone w wyniku tej operacji nie będą możliwe do odzyskania.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" href="/map/lesson/deleteAll">
                  Usuń
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Anuluj
                </Button>
              </DialogActions>
            </Dialog>
            <Button variant="contained" color="secondary" onClick={handleClickOpenAccount}>
              Usuń konto
            </Button>
            <Dialog
              open={accountDialog}
              onClose={handleCloseAccount}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Usunąć konto?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Czy jesteś pewny? Dane utracone w wyniku tej operacji nie będą możliwe do odzyskania.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="secondary" href="/userApi/deleteAccount">
                  Usuń
                </Button>
                <Button onClick={handleCloseAccount} color="primary" autoFocus>
                  Anuluj
                </Button>
              </DialogActions>
            </Dialog>
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
