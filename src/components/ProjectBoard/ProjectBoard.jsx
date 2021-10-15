import React, {memo} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery/useMediaQuery';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#404A7B',
    },
}))(LinearProgress);

const activeProjects = [
    {
        image: 'images/defaultImage.svg',
        name: 'с. Боянчук: система водостока храма Рождества Богородицы',
        fundsRaised: 400000,
        needFunds: 30000,
    },
    {
        name: 'с. Товтри. Побудова храму',
        fundsRaised: 50000,
        needFunds: 100000,
    },
    {
        name: 'с. Боянчук: система водостока храма Рождества Богородицы',
        fundsRaised: 5000,
        needFunds: 45000,
    },
    {
        name: 'с. Боянчук: система водостока храма Рождества Богородицы',
        fundsRaised: 10000,
        needFunds: 30000,
    },
    {
        name: 'с. Товтри. Побудова храму',
        fundsRaised: 50000,
        needFunds: 100000,
    },
    {
        name: 'с. Боянчук: система водостока храма Рождества Богородицы',
        fundsRaised: 5000,
        needFunds: 45000,
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#E5E5E5',
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
    text_title: {
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        color: '#152883',
    },
    program__card: {
        width: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    image: {
        width: '80%',
    },
    button: {
        color: '#6A9D1A',
        border: '3px solid #466E06',
        borderRadius: '100px',
        marginTop: theme.spacing(4),
        '&:hover': {
            borderWidth: 3,
        }
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    card_action: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    card_image_container: {
        padding: theme.spacing(2.5),
    },
    card_content: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingTop: theme.spacing(0),
    },
    card_title: {
        flexGrow: 1,
        marginBottom: theme.spacing(2),
        color: '#313059',
    },
    line__progress: {
        margin: theme.spacing(4, 0, 1, 0),
    },
    card_button__container: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1, 1, 2.5),
    },
    card_button: {
        width: 200,
        background: '#6A9D1A',
        boxShadow: '0px 3px 0px #466F06',
        borderRadius: '100px',
        textTransform: 'none',
        '&:hover': {
            boxShadow: `0px 3px 0px ${theme.palette.primary.dark}`,
        }
    }
}));

const FirstScreen = ({title}) => {
    const classes = useStyles();
    const breakpointSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box className={classes.root}>
            <Container className={classes.container}>
                <Typography variant={breakpointSM ? 'h5' : 'h3'} color='textSecondary' align='left'
                            className={classes.text_title}>
                    {title}
                </Typography>
                <Grid container spacing={5}>
                    {activeProjects.map((item) => {
                        const {image = 'images/defaultImage.svg', name, fundsRaised, needFunds} = item;
                        const percentСollected = (fundsRaised < needFunds) ? Math.trunc(fundsRaised / needFunds * 100) : 100;

                        return (
                            <Grid item md={3} lg={4}>
                                <Card className={classes.card}>
                                    <CardActionArea className={classes.card_action}>
                                        <CardMedia
                                            component="img"
                                            alt={name}
                                            image={image}
                                            title={name}
                                            className={classes.card_image_container}
                                        />
                                        <CardContent className={classes.card_content}>
                                            <Typography color='textSecondary' variant='h6' className={classes.card_title}>
                                                {name}
                                            </Typography>
                                            <Grid container>
                                                <Grid item sm={6}>
                                                    <Typography variant="h5" color="textSecondary">
                                                        {fundsRaised}
                                                    </Typography>
                                                    <Typography variant="body1" color="textSecondary">
                                                        Зібрано
                                                    </Typography>
                                                </Grid>
                                                <Grid item sm={6}>
                                                    <Typography variant="h5" color="textSecondary">
                                                        {(needFunds > fundsRaised) ? needFunds - fundsRaised : 0 }
                                                    </Typography>
                                                    <Typography variant="body1" color="textSecondary">
                                                        Залишилось зібрати
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <BorderLinearProgress variant="determinate" value={percentСollected}
                                                                  className={classes.line__progress}/>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions className={classes.card_button__container}>
                                        <Button size='large' color='primary' variant='contained' disableRipple
                                                className={classes.card_button}>
                                            Підтримати
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
                <Button size='large' variant='outlined' color='primary' className={classes.button}>ВСІ ПРОЕКТИ</Button>
            </Container>
        </Box>
    );
};

export default memo(FirstScreen);
