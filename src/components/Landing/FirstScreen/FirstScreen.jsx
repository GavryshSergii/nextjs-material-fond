import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import clsx from 'clsx';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#E5E5E5',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(10),
    },
    text__container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text__title: {
        fontWeight: 800,
        lineHeight: '130%',
        letterSpacing: '-0.03em',
        marginBottom: theme.spacing(2)
    },
    text: {
        fontFamily: 'Montserrat',
    },
    button: {
        width: 200,
        marginTop: theme.spacing(4),
        background: '#6A9D1A',
        boxShadow: '0px 3px 0px #466F06',
        borderRadius: '100px',
        '&:hover': {
            boxShadow: `0px 3px 0px ${theme.palette.primary.dark}`,
        }
    },
    player: {
        height: '40vh',
        [theme.breakpoints.down('xs')]: {
            height: '50vw',
        },
    },
    image: {
        width: '100%',
    },
}));

const FirstScreen = () => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={2}>
                    <Grid item md={6} className={classes.text__container} align='center'>
                        <Typography variant={breakpointSM ? 'h5' : 'h3'} color='textSecondary' align='left'
                                    className={clsx(classes.text__title, classes.text)}>
                            Всі пожертви - в славу Господа нашого Ісуса Христа!
                        </Typography>
                        <Typography variant={breakpointSM ? 'h6' : 'h5'} color='textSecondary' align='left'
                                    className={classes.text}>
                            По блогословінню Митрополита Чернівецького
                            і Буковинського Мелетія
                        </Typography>
                        <Button size='large' color='primary' variant='contained' className={classes.button}>
                            ПІДТРИМАТИ
                        </Button>
                    </Grid>
                    <Grid item container md={6} alignContent='center'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/a4qgyW3KUFc?controls=1&autoplay=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                allowfullscreen/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default memo(FirstScreen);
