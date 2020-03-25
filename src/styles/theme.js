import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
    main: '#626dbb',
    secondary: '#394199',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    
  }
}
});

export default theme