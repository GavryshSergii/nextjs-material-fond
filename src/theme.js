import { createTheme } from '@material-ui/core/styles';
import { ukUA } from '@material-ui/core/locale';

// Create a theme instance.
export default createTheme(
  {
    palette: {
      primary: {
        light: '#115E9E',
        main: '#404a7b',
        dark: '#0C183B',
      },
      secondary: {
        light: '#F50057',
        main: '#115E9E',
      },
       text: {
         primary: '#fff',
         secondary: 'rgba(0, 0, 0, 0.87)',
       },
      background: {
        default: '#fff',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920,
      },
    },
  },
  ukUA,
);
