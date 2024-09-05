import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Toolbar, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';

const drawerWidth = 240;

function Sidebar() {
  const location = useLocation(); // Get the current path

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
          backgroundColor: '#e3f2fd', // Light blue background
          color: '#0d47a1', // Darker blue for text and icons
          borderRadius: '10px', // Rounded sidebar
          borderRight: '2px solid #0d47a1',
          boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow around the sidebar
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Logo and App Name */}
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
        <Box
          component="img"
          src="https://via.placeholder.com/100"
          alt="App Logo"
          sx={{ width: 60, height: 60, marginBottom: 1, borderRadius: '50%', boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)' }} // Shadow for logo
        /> {/* Logo */}
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
              backgroundColor: location.pathname === path ? '#90caf9' : 'transparent', // Highlight active tab
              color: location.pathname === path ? '#ffffff' : '#0d47a1', // Change text color on active tab
              borderRadius: location.pathname === path ? '8px' : '0', // Rounded active tab
              margin: location.pathname === path ? '5px 10px' : '0', // Add margin for active tab
              boxShadow: location.pathname === path ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // Add shadow to active tab
              '&:hover': {
                backgroundColor: '#64b5f6',
                color: '#ffffff',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)', // Hover shadow
              },
              transition: 'all 0.3s ease', // Smooth transition for hover and active state
            }}
          >
            <ListItemIcon sx={{ color: location.pathname === path ? '#ffffff' : '#0d47a1' }}> {/* Change icon color on active */}
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
