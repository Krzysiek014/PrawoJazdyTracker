import React, { useState, useEffect } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const LoginContainer = () => {
    const [status, setStatus] = useState(null)
    const [message, setMessage] = useState(null)
  
    const handleClose = () => {
        setStatus(false);
    };

    useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      // setStatus(params.get('status'));
      if(params.get('status')){
        setStatus(true);
        switch(params.get('status')){
            case 'registration':
                setMessage('Rejestracja zakończona pomyślnie');
                break;
            case 'delete':
                setMessage('Konto zostało pomyślnie usunięte');
                break;
        }
        console.log(params.get('status'));
      }else if(params.get('error')){
        setStatus(true);
        setMessage('Dane do logowania niepoprawne');
      }else{
        setStatus(false);
      }
    }, [])
    return (
        <Card style={{minWidth: '250px', top: '50%', transform: 'translateY(-50%)', position: 'absolute', right: '10%', opacity: '75%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <form action="/login" method="POST">
                <CardContent>
                    <Typography variant='h6' style={{textAlign: 'center'}}>
                        LOGOWANIE
                    </Typography>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <TextField required variant="outlined" label="Login" name="username"></TextField>
                        <TextField required variant="outlined" label="Hasło" type="password" style={{marginTop: '20px'}} name="password"></TextField>
                    </div>
                    <CardActions>
                        <Button variant='contained' color='primary' style={{width: '100%'}} type='submit'>Zaloguj</Button>
                    </CardActions>
                </CardContent>
            </form>
            <Dialog
              open={status}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
                {/* <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default LoginContainer;