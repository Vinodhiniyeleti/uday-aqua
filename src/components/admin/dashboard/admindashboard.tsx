import React from 'react';
import { Box, Typography, TextField, Card, CardMedia, CardContent, Grid } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import bannerImage from '../../../assets/admin/banner.png';
import '../styles/dashboard.css';

const Dashboard = () => {
  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 33 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 35 },
    { month: 'Jun', value: 50 },
    { month: 'Jul', value: 35 },
    { month: 'Aug', value: 36 },
    { month: 'Sep', value: 50 },
    { month: 'Oct', value: 30 },
    { month: 'Nov', value: 33 },
    { month: 'Dec', value: 33 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <Box className="dashboardContainer">
      <Box className="dashboardHeader">
        <Typography className="dashboardTitle">Admin Dashboard</Typography>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          className="searchInput"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* New Wrapper for Banner and Stats Grid */}
      <Box className="bannerAndStatsWrapper">
        <Card className="imageCard">
          <CardMedia
            component="img"
            image={bannerImage}
            alt="Dashboard Banner"
            height="200"
          />
        </Card>

        {/* Removed 'overlappingStatsGrid' from the container Grid, as it's a styling class and shouldn't interfere with the prop typing. The CSS handles the overlap. */}
        <Grid container spacing={3} className="statsGrid">
          <Grid item xs={12} md={6}>
            <Card className="statCard">
              <CardContent className="statCardContent">
                <Box className="statIcon">
                  <PeopleIcon className="statIconSvg" />
                </Box>
                <Box>
                  <Typography className="statNumber">2,500</Typography>
                  <Typography className="statLabel">Total Subscribers</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="statCard">
              <CardContent className="statCardContent">
                <Box className="statIcon">
                  <PersonAddIcon className="statIconSvg" />
                </Box>
                <Box>
                  <Typography className="statNumber">530</Typography>
                  <Typography className="statLabel">Training Program Registered</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box> {/* End New Wrapper */}

      <Grid container spacing={3} className="chartsGrid">
        <Grid item xs={12} md={8}>
          <Card className="chartCard">
            <CardContent>
              <Typography className="chartTitle">Training Program Registrations</Typography>
              <Box className="chartContainer">
                <Box className="chartYAxis">
                  <span>60</span>
                  <span>50</span>
                  <span>40</span>
                  <span>30</span>
                  <span>20</span>
                  <span>10</span>
                </Box>
                <Box className="chartArea">
                  <Box className="chartBars">
                    {chartData.map((item, index) => (
                      <Box key={index} className="chartBarContainer">
                        <Box
                          className="chartBar"
                          style={{ height: `${(item.value / maxValue) * 100}%` }}
                        />
                        <Typography className="chartBarLabel">{item.month}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="registerCard">
            <CardContent>
              <Box className="registerHeader">
                <Typography className="registerTitle">Training Program Register</Typography>
                <Typography className="registerToday">Today</Typography>
              </Box>
              
              <Box className="registerStats">
                <Box className="registerStatItem">
                  <Box className="registerStatLeft">
                    <TrendingUpIcon className="registerStatIcon" />
                    <Typography className="registerStatLabel">Total Members Joined</Typography>
                  </Box>
                  <Typography className="registerStatNumber">20</Typography>
                </Box>
                
                <Box className="registerStatItem">
                  <Box className="registerStatLeft">
                    <TrendingUpIcon className="registerStatIcon" />
                    <Typography className="registerStatLabel">Total Members Joined</Typography>
                  </Box>
                  <Box className="registerStatRight">
                    <Typography className="registerStatNumber">7</Typography>
                    <Typography className="registerStatDate">Yesterday</Typography>
                  </Box>
                </Box>
                
                <Box className="registerStatItem">
                  <Box className="registerStatLeft">
                    <TrendingUpIcon className="registerStatIcon" />
                    <Typography className="registerStatLabel">Total Members Joined</Typography>
                  </Box>
                  <Box className="registerStatRight">
                    <Typography className="registerStatNumber">10</Typography>
                    <Typography className="registerStatDate">10/07/2025</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;