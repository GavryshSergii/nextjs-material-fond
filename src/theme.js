import { createTheme } from '@material-ui/core/styles';
import { ukUA } from '@material-ui/core/locale';

// Create a theme instance.
export default createTheme(
  {
    palette: {
      // type: 'light',
      primary: {
        // light: '#115E9E',
        main: '#404a7b',
        // dark: '#0C183B',
      },
      secondary: {
        // light: '#F50057',
        main: '#F50057',
        red: '#5383FF',

      },
       text: {
         primary: '#fff',
         secondary: 'rgba(0, 0, 0, 0.87)',
       },

      // error: {
      //   main: red[A400]
      // },
      background: {
        default: '#fff',
      },
    },
  },
  ukUA,
);
