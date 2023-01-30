import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutButton from '../Common/LogoutBtn';
import StoreIcon from '@mui/icons-material/Store';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ display: {xs: 'none', md: 'flex'}, mr: 2 }}>
            BaoQuoc's Store
          </Typography>
          <LogoutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}