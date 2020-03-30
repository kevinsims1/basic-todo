import { Button, IconButton, Checkbox, withStyles } from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';


//custom matieral ui Button
export const CustomButton = withStyles(() => ({
  root: {
    color: '#efefef',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
    '&:hover': {
      opacity: 0.7,
      backgroundColor: 'rgba(0, 0, 0, 0.54)',
    },
  },
}))(Button);

//custom matieral ui IconButton
export const CustomIconButton = withStyles(() => ({
  root: {
    color: 'rgba(0, 0, 0, 0.54)',
    backgroundColor: '#efefef',
    padding: 0,
    margin: '10px',
  }
}))(IconButton);



//custom matieral ui IconButton
export const CustomLit = withStyles(() => ({
  root: {
    color: 'rgba(0, 0, 0, 0.54) !important',
    fontWeight: 'bold'
  }
}))(ListItemText);


//custom matieral ui Checkbox
export const CustomCheckbox = withStyles(() => ({
  root: {
  default: 'rgba(0, 0, 0, 0.54) !important',
  '&hover': {
      color: 'rgba(0, 0, 0, 0.54) !important',
  }
  },
  colorPrimary: {
    color: 'rgba(0, 0, 0, 0.54) !important'
  },
  checked: {
      color: 'rgba(0, 0, 0, 0.54) !important'
  }
}))(Checkbox);