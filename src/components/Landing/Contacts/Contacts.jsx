import React, {memo} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F7FCFF',
    },
    text_title: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        color: '#152883',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(10),
    },
    contacts__container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    column_contact__container: {
        display: 'flex',
        alignItems: 'center',
    },
    phone__container: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    phone__text: {
        textDecoration: 'none',
    },
    icons__container: {
        display: 'flex',
        gap: theme.spacing(4),
        margin: theme.spacing(1.5),
    },
    image__container: {
        height: '60%',
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(2),
    },
}));

const FirstScreen = () => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Typography variant={breakpointSM ? 'h5' : 'h3'} color='textSecondary' align='left'
                            className={classes.text_title}>
                    Контакти
                </Typography>
                <div className={classes.contacts__container}>
                    <div className={classes.column_contact__container}>
                        <a href="https://goo.gl/maps/csf4G2rL22D7qHxm7" className={classes.image__container}>
                            <img className={classes.image}
                                 src='images/location.svg'
                                 alt='розміщення на мапі'
                            />
                        </a>
                        <div>
                            <Typography color='textSecondary' variant='h6'>
                                м. Чернівці,<br/>вул. Героїв Майдану, 55
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.column_contact__container}>
                        <div className={classes.image__container}>
                            <img className={classes.image}
                                 src='images/telephone.svg'
                                 alt='Контактні телефони'
                            />
                        </div>
                        <div className={classes.phone__container}>
                            <a href="tel:+380504332266" className={classes.phone__text}>
                                <Typography color='textSecondary' variant='h6'>
                                    +380504332266
                                </Typography>
                            </a>
                            <a href="tel:+380964332266" className={classes.phone__text}>
                                <Typography color='textSecondary' variant='h6'>
                                    +380964332266
                                </Typography>
                            </a>
                        </div>
                    </div>
                    <div className={classes.column_contact__container}>
                        <Typography component='span' color='textSecondary' variant='h6'>
                            Ми в соц. мережах
                        </Typography>
                        <div className={classes.icons__container}>
                            <a href="https://uk-ua.facebook.com/" className={classes.image__container}>
                                <img className={classes.image}
                                     src='images/facebook.svg'
                                     alt='Cторіка facebook'
                                />
                            </a>
                            <a href="https://www.instagram.com/" className={classes.image__container}>
                                <img className={classes.image}
                                     src='images/instagram.svg'
                                     alt='Сторінка Instagram'
                                />
                            </a>
                            <a href="https://invite.viber.com/?g=CU7wYWH9LU4vypmjZY1gm_qi_ocVA7p7" className={classes.image__container}>
                                <img className={classes.image}
                                     src='images/viber.svg'
                                     alt='Група viber'
                                />
                            </a>
                            <a href="tg://resolve?domain=fond_Chernivchi" target="_blank" className={classes.image__container}>
                                <img className={classes.image}
                                     src='images/telegram.svg'
                                     alt='Група telegram'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Box>
    );
};

export default memo(FirstScreen);
