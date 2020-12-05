import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const LoginContainer = () => {
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
        </Card>
    )
}

export default LoginContainer;