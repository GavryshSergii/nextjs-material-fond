import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import MenuHeader from '../Menu';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(4, 8, 3),
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 5),
        },
    },
    footer__column2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 'auto',
    },
    footer__button: {
        width: 230,
        marginRight: theme.spacing(3),
        textTransform: 'none',
        background: '#6a9d1a',
        [theme.breakpoints.down('sm')]: {
            width: 200,
            marginLeft: theme.spacing(2),
        },
    },
}));

function Footer(props) {
    const {main} = props;
    const classes = useStyles(props);

    return (
        <footer className={classes.footer}>
            <Grid maxWidth="lg" container>
                <div className={classes.footer__column2}>
                    <Fab
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="extended"
                        color="secondary"
                        component="a"
                        className={classes.footer__button}
                    >
                        ДОПОМОГТИ
                    </Fab>
                </div>
                <Grid item md={8}>
                    <MenuHeader inHeader={false}/>
                </Grid>
                <Grid item md={2} className={classes.footer__column2}>
                    <img
                        src="images/masterCard.svg"
                        alt="Logo"
                    />
                    <img
                        src="images/visa.svg"
                        alt="Logo"
                    />
                </Grid>
            </Grid>
        </footer>
    )
        ;
}

Footer.propTypes = {
    main: PropTypes.bool,
};

export default memo(Footer);
