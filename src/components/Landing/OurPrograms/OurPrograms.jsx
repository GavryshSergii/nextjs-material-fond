import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F7FCFF',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(10)
    },
    card__container: {
        display: 'flex',
        justifyContent: 'space-around',
        height: 300,
    },
    text_title:{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        color: '#152883',
    },
    program__card:{
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    image__container:{
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    image: {
      width: '80%',
    },
    button:{
        color: '#6A9D1A',
        border: '3px solid #466E06',
        borderRadius: '100px',
        '&:hover': {
            borderWidth: 3,
        }
    },
}));

const programs = [
    {
        image: 'images/church_1.svg',
        title: 'Побудова храмів'
    },
    {
        image: 'images/helping_hand.svg',
        title: 'Допомага ближньому'
    },
    {
        image: 'images/children.svg',
        title: 'Робота з дітьми'
    },
]

const FirstScreen = () => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Typography variant={breakpointSM ? 'h5' : 'h3'} color='textSecondary' align='left' className={classes.text_title}>
                    Наші програми
                </Typography>
                <Grid container>
                    <Grid item md={2}/>
                    <Grid item md={8} className={classes.card__container} align='center'>
                        {
                            programs.map((item) => (
                                <div className={classes.program__card} key={item.title}>
                                    <div  className={classes.image__container}>
                                            <img className={classes.image}
                                                src={item.image}
                                                alt={item.title}
                                            />
                                    </div>
                                    <Typography color='textSecondary' variant='h6'>
                                        {item.title}
                                    </Typography>
                                    <Button size='large' variant='outlined' color='primary' className={classes.button}>ПІДТРИМАТИ</Button>
                                </div>
                            ))
                        }
                    </Grid>
                    <Grid item md={2}/>
                </Grid>
            </Container>
        </Box>
    );
};

export default memo(FirstScreen);
