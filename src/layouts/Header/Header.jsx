import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import MenuHeader from '../Menu';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    header: {
        background: theme.palette.primary.main,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 0),
        },
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(4, 10, 3),
        gap: theme.spacing(4),
    },
    header__column2: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    header__button: {
        width: 170,
        textTransform: 'none',
        background: '#6a9d1a',
        boxShadow: '0px 3px 0px #466F06',
        borderRadius: '100px',
        '&:hover': {
            boxShadow: `0px 3px 0px ${theme.palette.primary.dark}`,
        },
        [theme.breakpoints.down('sm')]: {
            width: 200,
        },
    },
    div:{
        width: 170,
    },
}));

function Header(props) {
    const {main} = props;
    const classes = useStyles(props);

    return (
        <header className={classes.header}>
            <Container disableGutters className={classes.container}>
                <div >
                    <div className={classes.div}></div>
                </div>
                <MenuHeader/>
                <div className={classes.header__column2}>
                    <Button size='large' color='primary' variant='contained'
                            className={classes.header__button}>
                        ДОПОМОГТИ
                    </Button>
                </div>
            </Container>
        </header>
    )
        ;
}

Header.propTypes = {
    main: PropTypes.bool,
};

export default memo(Header);
