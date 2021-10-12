import NextApp from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';

import withReduxStore from '../src/store/with-redux-store';
import App from '../src/components/App';

import theme from '../src/theme';

class CustomApp extends NextApp {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    if (process.browser && process.env.NODE_ENV === 'production') {
      // eslint-disable-next-line no-console
    }

    const { Component, pageProps, store, router } = this.props;
    const { pathname } = router || {};

    return (
      <>
        <Head>
          <title>Фонд</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {pathname === '/_error' ? (
            <Component {...pageProps} />
          ) : (
            <Provider store={store}>
              {['/error'].includes(pathname) ? (
                <Component {...pageProps} />
              ) : (
                <App>
                  <Component {...pageProps} />
                </App>
              )}
            </Provider>
          )}
        </ThemeProvider>
      </>
    );
  }
}

export default withReduxStore(CustomApp);
