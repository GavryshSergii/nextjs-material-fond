import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiMenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const MenuItem = withStyles((theme) => ({
  root: {
    whiteSpace: 'unset',
  },
  gutters: {
    padding: theme.spacing(2, 4),
  },
}))(MuiMenuItem);

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    color: theme.palette.primary.main,
  },
}));

const MenuItemPopover = forwardRef((props, ref) => {
  const { href, label, onClose } = props;

  return (
    <>
      <MenuItem
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
        onClick={onClose}
      >
        <ListItemText
          primary={label}
          primaryTypographyProps={{
            variant: 'h6',
            component: 'span',
            color: 'textSecondary',
          }}
        />
      </MenuItem>
      <Divider variant="middle" />
    </>
  );
});

MenuItemPopover.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default memo(MenuItemPopover);
