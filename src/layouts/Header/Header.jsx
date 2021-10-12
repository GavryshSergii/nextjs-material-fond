import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import MenuHeader from '../Menu';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    header: () => ({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(4, 8, 3),
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 5),
        },
    }),
    header__column2: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    header__button: {
        width: 230,
        marginLeft: theme.spacing(4),
        textTransform: 'none',
        background: '#6a9d1a',
        [theme.breakpoints.down('sm')]: {
            width: 200,
            marginLeft: theme.spacing(2),
        },
    },
}));

function Header(props) {
    const {main} = props;
    const classes = useStyles(props);

    return (
        <header className={classes.header}>
            <Grid container>
                <Grid item md={2} />
                <Grid item md={8}>
                    <MenuHeader/>
                </Grid>
                    <div className={classes.header__column2}>
                        <Fab
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="extended"
                            color="secondary"
                            component="a"
                            className={classes.header__button}
                        >
                            ДОПОМОГТИ
                        </Fab>
                    </div>
            </Grid>
        </header>
    )
        ;
}

Header.propTypes = {
    main: PropTypes.bool,
};

export default memo(Header);
