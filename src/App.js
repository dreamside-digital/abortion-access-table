import { createTheme, ThemeProvider, useTheme } from '@mui/material';
import { frFR, enUS } from '@mui/material/locale';
import Table from './Table';


const App = (props) => {
  const theme = {
    palette: {
      primary: {
        main: '#ff9800'
      },
      background: {
        default: '#ffffff'
      },
      secondary: {
        main: '#eefcfa'
      }
    },
    typography: {
      fontFamily: [
        'Inter',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    },
    components: {
      MuiTableRow: {
        styleOverrides: {
          root: {
            '&.MuiTableRow-root:hover td': { 
                backgroundColor: '#eefcfa',
            }
          } 
        }
      }
    }
  }

  const locale = props.locale === "fr" ? frFR : enUS

  return (
    <ThemeProvider theme={createTheme(theme, locale)}>
      <Table {...props} />
    </ThemeProvider>
  );
};

export default App;