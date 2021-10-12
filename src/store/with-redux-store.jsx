/* eslint-disable no-underscore-dangle */
import React from 'react';

import { isServer } from '../utils/lib';

import { initialState, initializeStore } from './store';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(preloadedState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer()) {
    return initializeStore(preloadedState);
  }
  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(preloadedState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export default function withReduxStore(App) {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(initialState);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      return {
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
        initialReduxState: reduxStore.getState(),
      };
    }

    render() {
      const { initialReduxState } = this.props;

      return <App {...this.props} store={getOrCreateStore(initialReduxState)} />;
    }
  };
}
