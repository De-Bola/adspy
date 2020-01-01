import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
//import clsx from 'clsx';
//import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
//import Avatar from '@material-ui/core/Avatar';
//import IconButton from '@material-ui/core/IconButton';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import MoreVertIcon from '@material-ui/icons/MoreVert';


class AdCard extends Component {
    render() {

        let { postDate, title, subtitle, smallImg,
            largeImg, daysCount, rating, publisher } = this.props.ad;

        return (
            <Card style={styles.card}>
                <Typography>
                    {postDate}
                </Typography>
                <Grid container>
                    <Grid container style={{ margin: 10 }}>
                        <CardHeader
                            title={title}
                            subheader={postDate}
                        />
                        <div>
                            <CardMedia
                                style={{...styles.media, padding: 'none'}}
                                src={smallImg}
                                alt={publisher}
                            />
                        </div>
                    </Grid>
                </Grid>
                <CardContent>
                    <CardMedia
                        style={styles.media}
                        src={largeImg}
                        alt='lorem ipsum'
                    />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {subtitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {daysCount}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {rating}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

const styles = {
    card: {
        maxWidth: 256,
    },
    media: {
        height: 150,
    },
}

export default AdCard;