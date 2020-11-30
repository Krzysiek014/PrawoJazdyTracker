import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

const MapContainer = () => {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        T
                    </Avatar>
                }
                title="TEST USER"
                subheader="30.11.2020"

            />
        </Card>
    )
}

export default MapContainer;