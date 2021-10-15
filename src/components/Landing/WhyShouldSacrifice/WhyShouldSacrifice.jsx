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
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(10)
    },
    text_title:{
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        color: '#152883',
    },

}));


const FirstScreen = () => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Typography variant={breakpointSM ? 'h5' : 'h3'} color='textSecondary' align='left' className={classes.text_title}>
                    Чому людина повинна пожертвувати
                </Typography>

            </Container>
        </Box>
    );
};

export default memo(FirstScreen);
