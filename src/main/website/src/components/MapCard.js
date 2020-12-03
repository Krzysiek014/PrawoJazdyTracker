import React from 'react';
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
import {MapContainer ,TileLayer, Marker, Popup } from 'react-leaflet';

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
const MapCardContainer = ({name, date}) => {
   const classes = useStyles();
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

            />
            <CardMedia>
                <MapContainer center={position} zoom={11} className={classes.map}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
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