import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WebIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import '../styles/sidebar.css'; 
import Logo from '../../../assets/admin/logo.png';

const DashboardSidebar = () => {
  return (
    <Box className="sidebarContainer">
      <Box className="sidebarTopSection">
        <img src={Logo} alt="Uday Aqua Logo" className="sidebarLogo" />
        <Typography className="sidebarTitle" component="div">Admin</Typography>

        <List className="sidebarNavList">
          <ListItem button className="sidebarNavItem sidebarActiveItem">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button className="sidebarNavItem">
            <ListItemIcon><WebIcon /></ListItemIcon>
            <ListItemText primary="User End Web" />
          </ListItem>
          <ListItem button className="sidebarNavItem">
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </Box>
      <List>
      <ListItem button className="sidebarLogoutItem" onClick={() => window.location.href = '/admin/login'}>
        <ListItemIcon><LogoutIcon color="error" /></ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
    </Box>
  );
};

export default DashboardSidebar;
