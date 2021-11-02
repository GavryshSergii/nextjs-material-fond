import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import MenuHeader from '../Menu';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    footer: {
        position: 'relative',
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
    footer__column2: {
        width: 210,
        display: 'flex',
        alignItems: 'center',
    },
    footer__button: {
        width: 170,
        background: '#6A9D1A',
        boxShadow: '0px 3px 0px #466F06',
        borderRadius: '100px',
        textTransform: 'none',
        '&:hover': {
            boxShadow: `0px 3px 0px ${theme.palette.primary.dark}`,
        }
    },
}));

function Footer(props) {
    const {main} = props;
    const classes = useStyles(props);

    return (

        <footer className={classes.footer}>
            <Container disableGutters className={classes.container}>
                <div>
                    <div className={classes.footer__column2}>
                        <Button size='large' color='primary' variant='contained'
                                className={classes.footer__button}>
                            ДОПОМОГТИ
                        </Button>
                    </div>
                </div>
                <MenuHeader inHeader={false}/>
                <div className={classes.footer__column2}>
                    <img
                        src="images/masterCard.svg"
                        alt="Logo"
                    />
                    <img
                        src="images/visa.svg"
                        alt="Logo"
                    />
                </div>
            </Container>
        </footer>

    );
}

Footer.propTypes = {
    main: PropTypes.bool,
};

export default memo(Footer);
