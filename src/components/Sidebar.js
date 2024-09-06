import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { text: 'Search', icon: <SearchIcon />, path: '/search' },
    { text: 'DSQs', icon: <ListIcon />, path: '/dsqs' },
    { text: 'Utilities', icon: <BuildIcon />, path: '/utilities' },
    { text: 'Status', icon: <InfoIcon />, path: '/status' },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: 'rgb(181 206 225)', 
          color: '#0d47a1', 
          borderRight: '2px solid #0d47a1',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', 
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo and App Name */}
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
        <Box component="img"
          src="https://via.placeholder.com/100"
          alt="App Logo"
          sx={{ width: 60, height: 60, marginBottom: 1, borderRadius: '50%' }} // Logo
        />
        <Typography variant="h6" sx={{ color: '#0d47a1', fontWeight: 'bold', fontSize: '18px', ml: 1 }}>My App</Typography> {/* App Name */}
      </Toolbar>
      
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={path}
            sx={{
              borderBottom: '1px solid #ccc',
              backgroundColor: location.pathname === path ? '#2196f3' : 'transparent', // Highlight active tab
              color: location.pathname === path ? '#ffffff' : '#0d47a1', // Change text color on active tab
              borderRadius: location.pathname === path ? '8px' : '0', 
              margin: location.pathname === path ? '5px 10px' : '0', 
              boxShadow: location.pathname === path ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', 
              '&:hover': {
                backgroundColor: '#1976d2',
                color: '#ffffff',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', 
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === path ? '#ffffff' : '#0d47a1' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
