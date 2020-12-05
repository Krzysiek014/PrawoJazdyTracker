import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginIcon from '@material-ui/icons/VpnKeyRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import car from './../car.png';


const NavigationBar = ({firstTime}) => {
    if(firstTime){
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position='static'>
                    <ToolBar>
                        <img src={car} style={{height: '20px', filter: 'brightness(0) invert(1)', marginRight: '20px'}}></img>
                        <Typography variant='h5' style={{flexGrow: 1}}>
                            Prawo Jazdy Tracker
                        </Typography>
                        <ButtonGroup color="primary" aria-label="secondary button group">
                            <Button variant='contained' href="/website/register/index.html">
                                Rejestracja
                            </Button>
                            <Button variant='contained' href="/website/login/index.html">
                                Logowanie
                            </Button>
                        </ButtonGroup>
                    </ToolBar>
                </AppBar>
            </div>
        )
    }else{
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position='static'>
                    <ToolBar>
                        <img src={car} style={{height: '20px', filter: 'brightness(0) invert(1)', marginRight: '20px'}}></img>
                        <Typography variant='h5' style={{flexGrow: 1}}>
                            Prawo Jazdy Tracker
                        </Typography>
                        <ButtonGroup color="primary" aria-label="secondary button group">
                            <Button variant='contained' href="/website/settings/index.html">
                                Ustawienia
                            </Button>
                            <Button variant='contained' href="/logout">
                                Wyloguj
                            </Button>
                        </ButtonGroup>
                    </ToolBar>
                </AppBar>
            </div>
        )
        
    }
}

export default NavigationBar;