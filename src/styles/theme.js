import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
    // light: will be calculated from palette.primary.main,
    main: 'rgba(0, 0, 0, 0.54)',
    secondary: '#efefef',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
    
  }
}
});

export default theme