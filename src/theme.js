import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d2d2f', // Dark Gray
    },
    secondary: {
      main: '#f5f5f7', // Light Gray
    },
    background: {
      default: '#f5f5f7', // Light Gray
      paper: '#ffffff', // White
    },
    text: {
      primary: '#2d2d2f', // Dark Gray
      secondary: '#ffffff', // White
    },
  },
  typography: {
    fontFamily: 'SF Pro Display, Arial, sans-serif',
  },
});

export default theme;
