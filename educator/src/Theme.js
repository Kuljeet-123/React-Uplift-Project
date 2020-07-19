import {createMuiTheme} from '@material-ui/core/styles';

const instablue = '#002244';
const instaorange = '#C99A57';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${instablue}`,
      orange: `${instaorange}`,
    },
    primary: {
      main: `${instablue}`,
    },
    secondary: {
      main: `${instaorange}`,
    },
  },
  typography: {
    tab: {
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
  },
});
