import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import NextLink from 'next/link';
import MuiLink from "@material-ui/core/Link";
import clsx from 'clsx';

import MenuItemPopover from "./MenuItemPopover";
import MenuPopover from "./MenuPopover";

import { activities, donation, aboutUs } from './meta-data';

const Link = withStyles({
    button: {
        '&$focusVisible': {
            outline: 'none',
        },
    },
    focusVisible: {},
})(MuiLink);

const useStyles = makeStyles((theme) => ({
    menu: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    menu__logo: {
        margin: theme.spacing(0, 4),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 2),
        },
    },
    menu__item: {
        padding: theme.spacing(1, 0),
        borderBottom: '2px solid transparent',
        '&:hover': {
            color: theme.palette.text.primary,
            borderBottomColor: theme.palette.text.primary,
            transitionDuration: theme.transitions.duration.enteringScreen,
            transitionTimingFunction: theme.transitions.easing.easeInOut,
            '&$menu__item-nested::after': {
                borderBottomColor: theme.palette.text.primary,
                transitionDuration: theme.transitions.duration.enteringScreen,
                transitionTimingFunction: theme.transitions.easing.easeInOut,
            },
        },
    },
    menu__item_padding: {
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(2),
        },
    },
    'menu__item-nested': {
        paddingRight: theme.spacing(2),
        '&::after': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            position: 'absolute',
            right: 2,
            top: '50%',
            border: '0 solid transparent',
            borderRightWidth: 4,
            borderLeftWidth: 4,
            borderBottom: '5px solid white',
            transform: 'translateY(-50%) rotate(180deg)',
        },
        'footer &::after':{
            transform: 'translateY(-50%)',
        },
    },

    menuCabinets: {
        width: 440,
    },
}));

function renderMenuItem(item) {
    return <MenuItemPopover key={item.href} {...item} />;
}

function Menu(props) {
    const {main, inHeader = true} = props;
    const classes = useStyles(props);
    const theme = useTheme();

    function handleOpenMenu (currentTarget, setAnchorPositionMenu) {
        const { left, bottom, top } = currentTarget.getBoundingClientRect();
        if (inHeader) {
            setAnchorPositionMenu({ top: bottom + theme.spacing(2), left });
        } else {
            setAnchorPositionMenu({ top: top - theme.spacing(2), left });
        }
    }

    const [anchorPositionMenuActivities, setAnchorPositionMenuActivities] = useState(null);
    const handleOpenMenuActivities = ({ currentTarget }) => handleOpenMenu(currentTarget, setAnchorPositionMenuActivities);
    const handleCloseMenuActivities = useCallback(() => setAnchorPositionMenuActivities(null), []);

    const [anchorPositionMenuDonation, setAnchorPositionMenuDonation] = useState(null);
    const handleOpenMenuDonation = ({ currentTarget }) => handleOpenMenu(currentTarget, setAnchorPositionMenuDonation);
    const handleCloseMenuDonation = useCallback(() => setAnchorPositionMenuDonation(null), []);

    const [anchorPositionMenuAboutUs, setAnchorPositionMenuAboutUs] = useState(null);
    const handleOpenMenuAboutUs = ({ currentTarget }) => handleOpenMenu(currentTarget, setAnchorPositionMenuAboutUs);
    const handleCloseMenuAboutUs = useCallback(() => setAnchorPositionMenuAboutUs(null), []);

    return (
        <div className={classes.menu}>
            <NextLink href="/">
                <Link
                    href="/"
                    variant="h6"
                    color="textPrimary"
                    underline="none"
                    className={classes.menu__item}
                >
                    Головна
                </Link>
            </NextLink>
            <MenuPopover
                anchorPosition={anchorPositionMenuActivities}
                open={Boolean(anchorPositionMenuActivities)}
                onClose={handleCloseMenuActivities}
                render={renderMenuItem}
                list={activities}
                paperClassName={classes.menuCabinets}
                inHeader={inHeader}
            />
            <Link
                variant="h6"
                onClick={handleOpenMenuActivities}
                component="button"
                type="button"
                color="textPrimary"
                underline="none"
                className={clsx(classes.menu__item, classes.menu__item_padding, classes['menu__item-nested'])}
            >
                Напрямки діяльності
            </Link>
            <NextLink href="/">
                <a href="/" className={classes.menu__logo}>
                    <img
                        src="images/Logo.svg"
                        alt="Logo"
                    />
                </a>
            </NextLink>
            <MenuPopover
                anchorPosition={anchorPositionMenuDonation}
                open={Boolean(anchorPositionMenuDonation)}
                onClose={handleCloseMenuDonation}
                render={renderMenuItem}
                list={donation}
                paperClassName={classes.menuCabinets}
                inHeader={inHeader}
            />
            <Link
                variant="h6"
                onClick={handleOpenMenuDonation}
                component="button"
                type="button"
                color="textPrimary"
                underline="none"
                className={clsx(classes.menu__item, classes['menu__item-nested'])}
            >
                Як пожертвувати
            </Link>
            <MenuPopover
                anchorPosition={anchorPositionMenuAboutUs}
                open={Boolean(anchorPositionMenuAboutUs)}
                onClose={handleCloseMenuAboutUs}
                render={renderMenuItem}
                list={aboutUs}
                paperClassName={classes.menuCabinets}
                inHeader={inHeader}
            />
            <Link
                variant="h6"
                onClick={handleOpenMenuAboutUs}
                component="button"
                type="button"
                color="textPrimary"
                underline="none"
                className={clsx(classes.menu__item, classes.menu__item_padding, classes['menu__item-nested'])}
            >
                Фонд
            </Link>
        </div>
    );
}

Menu.propTypes = {
    main: PropTypes.bool,
};

export default memo(Menu);
