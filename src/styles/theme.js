import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
    main: '#757575',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  secondary: {
    main: '#81D4FA',
  }
}
});

export default theme