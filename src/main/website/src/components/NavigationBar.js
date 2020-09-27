import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginIcon from '@material-ui/icons/VpnKeyRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import car from './../car.png';


const NavigationBar = () => {
    return (
        <div style={{flexGrow: 1}}>
            <AppBar position='static'>
                <ToolBar>
                    <img src={car} style={{height: '20px', filter: 'brightness(0) invert(1)', marginRight: '20px'}}></img>
                    <Typography variant='h5' style={{flexGrow: 1}}>
                        Prawo Jazdy Tracker
                    </Typography>
                    <ButtonGroup color="primary" aria-label="secondary button group">
                        <Button variant='contained' href="/rejestracja">
                            Rejestracja
                        </Button>
                        <Button variant='contained' href="/logowanie">
                            Logowanie
                        </Button>
                    </ButtonGroup>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavigationBar;