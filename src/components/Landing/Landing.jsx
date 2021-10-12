import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    banner: {
        position: 'absolute',
        width: '100%',
        objectFit: 'cover',
        verticalAlign: 'middle',
        zIndex: '-1',
        [theme.breakpoints.up('md')]: {
            height: 887,
        },
    },
    row: {
        position: 'relative',
        width: '100%',
        height: 'calc(100vw / 1280 * 887 )',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            height: 887,
        },

        //100vw / heightImages * widthImages / 2
        // top: 'calc(100vw / 1280 * 887 / 2)',
        // transform: 'translate(0, -50%)',
        // [theme.breakpoints.up('md')]: {
        //   top: 443,
        // },
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text__container: {
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(10)
        },
    },
    text: {
        marginBottom: theme.spacing(4)
    },
    screenshotPhone: {
        height: '100%',
    },
}));

const FirstScreen = () => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Box className={classes.row}>
                <Container className={classes.container}>
                    <Box className={classes.text__container} align='center'>
                        <Typography variant={breakpointSM ? 'h5' : 'h4'} color='textSecondary' className={classes.text}>
                            Транспортно-логістична система «TruckUAbot» створена для клієнтів, логістів та
                            перевізників.
                        </Typography>
                        <Typography variant={breakpointSM ? 'h6' : 'h5'} color='textSecondary'>
                            використовуючи функції бота ви заощаджуєте свій час, гроші та нерви.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default memo(FirstScreen);
