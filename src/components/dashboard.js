import React, { Component } from 'react';
//import { CardDeck, Container, Row } from 'reactstrap';
import AdCard from '../components/adcard';
import { Grid, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

class Dashboard extends Component {
    
    constructor() {
        super();
        this.state = {
            ads: [
                {
                    id: 0,
                    postDate: "19-09-1992",
                    smallImg: require("../img/Rectangle25.jpg"),
                    largeImg: "https://res.cloudinary.com/derbiet/image/upload/v1566583838/StartNg/my_guy_rud2c8.jpg",
                    daysCount: "99",
                    rating: "4.8/5",
                    publisher: "StartUp",
                    title: "BuzzUp",
                    subtitle: "Starting a business requires dedication, one that BuzzUp can provide",
                },
                {
                    id: 1,
                    postDate: "19-09-1992",
                    smallImg: "./src/img/Rectangle 25.jpg",
                    largeImg: "./src/img/Rectangle 25.jpg",
                    daysCount: "99",
                    rating: "4.8/5",
                    publisher: "StartUp",
                    title: "BuzzUp",
                    subtitle: "Starting a business requires dedication, one that BuzzUp can provide",
                },
                {
                    id: 2,
                    postDate: "19-09-1992",
                    smallImg: "./src/img/Rectangle 25.jpg",
                    largeImg: "./src/img/Rectangle 25.jpg",
                    daysCount: "99",
                    rating: "4.8/5",
                    publisher: "StartUp",
                    title: "BuzzUp",
                    subtitle: "Starting a business requires dedication, one that BuzzUp can provide",
                },
            ],
        }
    }

    render() {
        let adCards = this.state.ads.map(ad => {
            return (
                <Grid key={ad.id} item>
                    <Paper>
                        <AdCard key={ad.id} ad={ad} />
                    </Paper>
                </Grid>
            );
        });

        return (
            <div>
                <div style={styles.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={styles.menuButton}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={styles.title} variant="h6" noWrap>
                                Material-UI
                            </Typography>
                            <div className={styles.search}>
                                <SearchIcon style={styles.searchIcon} />
                                <InputBase
                                    placeholder="Search…"
                                    styles={{
                                        root: styles.inputRoot,
                                        input: styles.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <Grid container style={{ margin: 10 }} alignItems='center'>
                    <Grid container spacing={1}>
                        {adCards}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;