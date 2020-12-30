import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginIcon from '@material-ui/icons/VpnKeyRounded';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import car from './../car.png';
import SearchIcon from '@material-ui/icons/Search'

const searchUrl = ((event) =>{
    if(event.keyCode === 13)
        window.location = 'http://localhost:8080/website/profile/index.html?name=' + document.querySelector('#standard-basic').value;
});

const SearchTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        }
      },
      "& .MuiInputBase-input": {
          color: 'white'
      },
      "& .MuiInput-underline:before": {
          borderColor: 'white',
      },
      "& .MuiFormLabel-root": {
          color: 'white',
      }
    },
  })(TextField);

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
                        <Typography variant='h5'>
                            Prawo Jazdy Tracker
                        </Typography>
                        <SearchTextField id="standard-basic" onKeyUp={searchUrl} label='Wyszukaj...' className='searchBox' style={{flexGrow: 1, margin: '0 20vw 0 10vw'}}>
                            <SearchIcon />
                        </SearchTextField>
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