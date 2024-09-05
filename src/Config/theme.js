
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: blue[200],
      },   secondary: {
        main: blue[500],
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      background: {
        default: "#fff",
        paper: "#f5f5f5",
      },
    },
  });