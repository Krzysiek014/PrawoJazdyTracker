import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress'
import { Typography } from '@material-ui/core';
import {MapContainer ,TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { SettingsRemote } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const position = [52.25, 21.00]
const useStyles = makeStyles((theme) => ({
    map: {
      width: "600px",
      height: "500px",
    },
    card:{
        width: '600px'
    },
  }));
const MapCardContainer = ({id, name, date}) => {
   const classes = useStyles();
   const [data, setData] = useState(null)
//    const [positionCenter, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
   const [anchorEl, setAnchorEl] = React.useState(null);
  
   const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteLesson = () =>{
        handleClose();
    }

   console.log(id)
   useEffect(() => {
     fetch("/map/lesson/" + id)
     .then(res => res.json())
     .then(
       (result) => {
        //    position = [0,0] 
           const route = [];
           for (let i = 0; i < result.length - 1; i++) {
            //    postion[0]
               const segment = [
                   [result[i].latitude, result[i].longitude],
                   [result[i+1].latitude, result[i+1].longitude]
               ]
               console.log(segment)
               route.push(segment)
           }
           setData(route)
           /*
           [
             {
                 id: 1,
                 name: 'asd'
             },
             {
                 id: 2,
                 name: 'Qwe'
             },
             {
                 id: 3,
                 name: "element z result"
             }
            ]
           */
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
                  }
            />
            <CardMedia>
                <MapContainer center={position} zoom={11} className={classes.map}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {error ? <Typography>Wystąpił błąd: {error}</Typography>
                        : loading ? <CircularProgress />
                        : data.map((result, index) => {
                                return <Polyline key={index} positions={result} color={'red'} />
                            // : null
                        })}
                </MapContainer>
            </CardMedia>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default MapCardContainer;