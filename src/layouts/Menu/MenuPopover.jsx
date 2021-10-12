import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    paper: {
        overflow: 'visible',
        'header &::before': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            position: 'absolute',
            top: 0,
            left: 59,
            transform: 'translateY(-50%) rotate(-45deg)',
            border: '0 solid transparent',
            borderRightWidth: theme.spacing(2.5),
            borderBottomWidth: theme.spacing(2.5),
            borderRightColor: theme.palette.common.white,
            boxShadow: '0 0 5px -1px rgba(0, 0, 0, 0.2)',
        },
    },
    menuList: {
        backgroundColor: theme.palette.common.white,
        overflowX: 'hidden',
        overflowY: 'auto',
        '& > hr:last-child': {
            height: 0,
        },
    },
}));

function MenuPopover(props) {
    const classes = useStyles();
    const {anchorPosition, open, onClose, render, paperClassName, inHeader} = props;
    let {list} = props;
    list = list || [];

    const transformOriginVertical = (inHeader)? 'top':'bottom';

    return (
        <Menu
            anchorReference="anchorPosition"
            anchorPosition={anchorPosition}
            open={open}
            onClose={onClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
            transformOrigin={{vertical: transformOriginVertical, horizontal: 'left'}}
            getContentAnchorEl={null}
            PaperProps={{className: clsx(classes.paper, paperClassName)}}
            MenuListProps={{component: 'div', disablePadding: true, className: classes.menuList}}
            disablePortal
        >
            {list.map((item) => render({...item, onClose}))}
        </Menu>
    );
}

MenuPopover.propTypes = {
    anchorPosition: PropTypes.shape({
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
    }),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.elementType.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
    paperClassName: PropTypes.string,
};

export default memo(MenuPopover);
