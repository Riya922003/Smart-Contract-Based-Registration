import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
  Tooltip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import DescriptionIcon from '@mui/icons-material/Description';
import RealEstateIcon from '@mui/icons-material/Business';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(25, 118, 210, 0.12)',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1.5, 0),
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent 0%, #1976d2 50%, transparent 100%)',
  },
}));

const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  textDecoration: 'none',
  position: 'relative',
  padding: theme.spacing(1),
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(25, 118, 210, 0) 100%)',
    borderRadius: theme.shape.borderRadius,
    transform: 'skew(-15deg)',
    transition: 'all 0.3s ease',
  },
  '&:hover:before': {
    transform: 'skew(-15deg) translateX(5px)',
    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.2) 0%, rgba(25, 118, 210, 0) 100%)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.5px',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  color: '#1976d2',
  textTransform: 'none',
  fontSize: '0.95rem',
  padding: theme.spacing(1.5, 2.5),
  borderRadius: theme.shape.borderRadius * 2,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: active 
      ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.12) 0%, rgba(25, 118, 210, 0.08) 100%)'
      : 'transparent',
    transform: 'skew(-15deg)',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    '&:before': {
      background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.15) 0%, rgba(25, 118, 210, 0.1) 100%)',
    },
  },
  '& .MuiButton-startIcon': {
    transition: 'all 0.3s ease',
  },
  '&:hover .MuiButton-startIcon': {
    transform: 'scale(1.1) rotate(-10deg)',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    borderRadius: theme.shape.borderRadius * 2,
    border: '1px solid rgba(25, 118, 210, 0.12)',
    marginTop: theme.spacing(1),
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 2.5),
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5),
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.12) 0%, rgba(25, 118, 210, 0.08) 100%)',
    '& .MuiSvgIcon-root': {
      transform: 'scale(1.1) rotate(-10deg)',
    },
  },
  '& .MuiSvgIcon-root': {
    transition: 'all 0.3s ease',
  },
}));

const navItems = [
  { title: 'Home', path: '/', icon: <HomeIcon /> },
  { title: 'Register Land', path: '/register', icon: <AccountBalanceIcon /> },
  { title: 'Transfer Land', path: '/transfer', icon: <SwapHorizIcon /> },
  { title: 'View Records', path: '/records', icon: <DescriptionIcon /> },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Container maxWidth="lg">
        <StyledToolbar>
          <LogoSection
            component={RouterLink}
            to="/"
          >
            <RealEstateIcon 
              sx={{ 
                fontSize: '2rem',
                color: '#1976d2',
                filter: 'drop-shadow(0 2px 4px rgba(25, 118, 210, 0.2))',
              }} 
            />
            <LogoText variant="h5">
              Land Registry
            </LogoText>
          </LogoSection>

          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                onClick={handleMenu}
                sx={{ 
                  color: '#1976d2',
                  border: '2px solid rgba(25, 118, 210, 0.12)',
                  borderRadius: '12px',
                  padding: '8px',
                  '&:hover': {
                    background: 'rgba(25, 118, 210, 0.08)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <StyledMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {navItems.map((item) => (
                  <StyledMenuItem
                    key={item.path}
                    onClick={handleClose}
                    component={RouterLink}
                    to={item.path}
                  >
                    {React.cloneElement(item.icon, { 
                      sx: { 
                        mr: 1.5,
                        color: '#1976d2',
                      }
                    })}
                    <Typography sx={{ color: '#1976d2' }}>
                      {item.title}
                    </Typography>
                  </StyledMenuItem>
                ))}
              </StyledMenu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Tooltip 
                  key={item.path}
                  title={item.title}
                  arrow
                  placement="bottom"
                >
                  <NavButton
                    component={RouterLink}
                    to={item.path}
                    active={location.pathname === item.path ? 1 : 0}
                    startIcon={item.icon}
                  >
                    {item.title}
                  </NavButton>
                </Tooltip>
              ))}
            </Box>
          )}
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar;
