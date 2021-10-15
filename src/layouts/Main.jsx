import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

function Main(props) {
  const classes = useStyles();
  const { children } = props;

  return <main className={classes.root}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node,
};

export default memo(Main);
