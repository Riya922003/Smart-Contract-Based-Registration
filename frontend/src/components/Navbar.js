import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  styled,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const NavButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <HomeIcon />
          Land Registry DApp
        </Typography>
        <NavButtons>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Register Land
          </Button>
          <Button color="inherit" component={RouterLink} to="/transfer">
            Transfer Land
          </Button>
          <Button color="inherit" component={RouterLink} to="/records">
            View Records
          </Button>
        </NavButtons>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
