// src/admin/dashboard/DashboardLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './sidebar';
import { Box } from '@mui/material';

const DashboardLayout = () => {
  return (
    <Box display="flex">
      <DashboardSidebar />
      <Box sx={{ flex: 1, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
