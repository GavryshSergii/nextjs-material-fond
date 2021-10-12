import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { Header, Main, Footer } from '../../layouts';

const useStyles = makeStyles({
  root: {
    //display: 'flex',
  },
});

export default function App(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header/>
      <Main>{children}</Main>
      <Footer/>
    </div>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
};
