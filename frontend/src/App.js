import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RegisterLand from './components/RegisterLand';
import TransferLand from './components/TransferLand';
import ViewRecords from './components/ViewRecords';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8',
      light: '#4285f4',
      dark: '#0052cc',
    },
    secondary: {
      main: '#34a853',
      light: '#41c363',
      dark: '#2d8e47',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '8px 16px',
        },
        contained: {
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
          '&:hover': {
            boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html, body': {
    overscrollBehavior: 'none',
    backgroundColor: '#f8f9fa',
    scrollbarWidth: 'thin',
    scrollbarColor: '#1a73e8 #f8f9fa',
    backgroundImage: 'url("/subtle-grid.svg")',
    backgroundRepeat: 'repeat',
    position: 'relative',
  },
  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    background: '#f8f9fa',
  },
  '::-webkit-scrollbar-thumb': {
    background: '#1a73e8',
    borderRadius: '4px',
    '&:hover': {
      background: '#1557b0',
    },
  },
  '#root': {
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  '@keyframes float': {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
    '100%': { transform: 'translateY(0px)' },
  },
  '.background-bubbles': {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: -1,
    overflow: 'hidden',
  },
  '.bubble': {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: 'rgba(25, 118, 210, 0.05)',
    animation: 'float 10s ease-in-out infinite',
    boxShadow: '0 4px 6px rgba(0,0,0,0.01)',
    aspectRatio: '1/1', // Ensures perfect circle
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <div className="background-bubbles">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100}px`, // Increased size variation
              height: `${Math.random() * 100}px`, // Increased size variation
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterLand />} />
          <Route path="/transfer" element={<TransferLand />} />
          <Route path="/records" element={<ViewRecords />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
