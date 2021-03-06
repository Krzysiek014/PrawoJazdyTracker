import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core';
import {MapContainer ,TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
    map: {
        width: "600px",
        height: "500px",
    },
    card:{
        width: '600px'
    },
    textField:{
        marginLeft: '20px',
        marginRight: '20px',
        width: '550px'
    },
  }));

const MapCardContainer = ({id, name, date, owner}) => {
   const classes = useStyles();
   const [data, setData] = useState(null)
   const [positionCenter, setPosition] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [share, setShare] = React.useState(null);
   const [favNumber, setFav] = useState(null);
   const [heartColor, setHeartColor] = useState(null);
  

   const formData = new FormData();
   formData.append('lessonID', id);


   const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteLesson = () =>{
        fetch("/map/lesson/delete/" + id)
        handleClose();
    }

    const shareOpen = () => {
        setShare(true);
    };

    const shareClose = () => {
        setShare(false);
    };

    const vote = () => {
        fetch('/voteApi/changeVote', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .then(
            (result) => {
                setHeartColor(result ? 'red' : 'rgba(0, 0, 0, 0.54)');
                setFav(result ? favNumber+1 : favNumber-1);
            }
        );
    }

   useEffect(() => {
     fetch("/map/lesson/" + id + "/points")
     .then(res => res.json())
     .then(
       (result) => {
            fetch('/voteApi/getAllVotes',{
                method: 'POST',
                body: formData
            })
            .then(votes => votes.json())
            .then(
                (votes) =>{
                    setFav(votes.length); 
                }
            );
        
            fetch('/voteApi/doVoted',{
                method: 'POST',
                body: formData
            })
            .then(vote => vote.json())
            .then(
                (vote) =>{
                    setHeartColor(vote ? 'red' : 'rgba(0, 0, 0, 0.54)');
                }
            );

           const position = [0,0];
           const route = [];
           for (let i = 0; i < result.length - 1; i++) {
                position[0] += result[i].latitude;
                position[1] += result[i].longitude;
                const segment = [
                   [result[i].latitude, result[i].longitude],
                   [result[i+1].latitude, result[i+1].longitude]
                ]
                route.push(segment)
           }
           position[0] /= result.length-1;
           position[1] /= result.length-1;
           setPosition(position);

           setData(route);
       }
     ).catch(e => setError(e))
     .finally(() => setLoading(false))
   }, [])

    return (
        <Card className={classes.card}>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <CardHeader
                avatar={
                    <Avatar>
                        {name.substring(0,2)}
                    </Avatar>
                }
                title={name}
                subheader={date}
                action={
                    owner ?
                    <div>
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={deleteLesson}>Usuń lekcję</MenuItem>
                        </Menu>
                    </div>
                    : null
                }
            />
            <CardMedia>
                        {error ? <Typography>Wystąpił błąd: {error}</Typography>
                        : loading ? <CircularProgress />
                        : <MapContainer center={positionCenter} zoom={13} className={classes.map}>
                                <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                {data.map((result, index) => {
                                        return <Polyline key={index} positions={result} color={'rgb(' + (index*255/(data.length-1)) + ',' + (255-index*255/(data.length-1)) + ',0)'} />
                                })}
                        </MapContainer>
                        }
            </CardMedia>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Badge badgeContent={favNumber} color="primary">
                        <FavoriteIcon id={"vote"+id} onClick={vote} style={{color: heartColor}}/>
                    </Badge>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon onClick={shareOpen}/>
                    <Dialog
                    open={share}
                    onClose={shareClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{'Link do udostępnienia'}</DialogTitle>
                        <DialogContentText id="alert-dialog-description">
                            <TextField className={classes.textField} id="outlined-basic" label="Outlined" variant="outlined" defaultValue={"localhost:8080/website/lesson/index.html?id=" + id}/>
                        </DialogContentText>
                        <DialogActions>
                            <Button onClick={shareClose} color="primary" autoFocus>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MapCardContainer;