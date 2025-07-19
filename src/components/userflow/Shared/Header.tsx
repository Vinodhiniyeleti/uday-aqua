import { AppBar, Toolbar, Box, Typography, InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../assets/logo.png";
import colorLogo from "../../../assets/logo_color.png"
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Drawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import sidebarIcon from "../../../assets/home/sidebar_btn.svg";
import { useLocation } from "react-router-dom";

const navItems = [
  "Home",
  "About Us",
  "Cultures",
  "Training Programs",
  "Technologies",
  "News & Events",
  "Contact Us"
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeNav, setActiveNav] = useState(navItems[0]);
  const [trigger, setTrigger] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 20) {
        setTrigger(false);
      }else if(currentScrollY > 20){
        setTrigger(true)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger ? "#fff" : "transparent",
        position: "fixed",
        color: trigger ? "#000" : "#fff",
        boxShadow: trigger ? 2 : "none",
        transition: "background 0.3s, color 0.3s, box-shadow 0.3s"
      }}
    >
      {isMobile ? (
        <>
          <Box
            sx={{
              width: "100vw",
              maxWidth: "100vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              bgcolor: "#fff",
              color: theme.palette.primary.main,
              px: 0,
              py: 0.5,
              minHeight: 36,
              borderBottom: '1px solid #e0e0e0',
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 1301,
              fontSize: '12px',
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }} >
              <MailOutlineIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "12px" }}>info@Uday.com</Typography>
            </Box>
            <Box width="1px" height={16} bgcolor={theme.palette.primary.main} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }} >
              <PhoneIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "12px" }}>+91 97911 99909</Typography>
            </Box>
            <Box width="1px" height={16} bgcolor={theme.palette.primary.main} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }} >
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" sx={{ fontWeight: 500, fontSize: "12px" }}>Hyderabad</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100vw",
              maxWidth: "100vw",
              display: "flex",
              alignItems: "center",
              bgcolor: "transparent",
              px: 0,
              py: 0.5,
              minHeight: 44,
              position: 'fixed',
              top: 36,
              left: 0,
              zIndex: 1301,
            }}
          >
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{
                background: 'white',
                color: theme.palette.primary.main,
                borderRadius: "50%",
                width: 30,
                height: 30,
                boxShadow: 1,
                mt:2,
                ml: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img src={sidebarIcon} alt="sidebar" style={{ width: 14, height: 14, display: 'block' }} />
            </IconButton>
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 1.5,
              bgcolor: trigger || !isHome ? "#fff" : "transparent" ,
              color: trigger || !isHome ? theme.palette.primary.main : "#fff",
              transition: "background 0.3s, color 0.3s, border-bottom 0.3s",
              width: "100%"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "nowrap", width: "auto" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} >
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>info@Uday.com</Typography>
              </Box>
              <Box width="1px" height={20} bgcolor={trigger || !isHome ? theme.palette.primary.main : '#1976d2'} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} >
                <PhoneIcon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>+91 97911 99909</Typography>
              </Box>
              <Box width="1px" height={20} bgcolor={trigger || !isHome ? theme.palette.primary.main : '#1976d2'} />
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }} >
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>Hyderabad</Typography>
              </Box>
            </Box>
            
            <Paper
              component="form"
              sx={{
                p: "1px 6px",
                display: "flex",
                alignItems: "center",
                width: 300,
                borderRadius: 5,
                mr:6,
                border: trigger || !isHome ? `1.5px solid ${theme.palette.primary.main}` : "none",
                boxShadow: "none",
                bgcolor: "white",
                transition: "background 0.3s, border 0.3s"
              }}
            >
              <IconButton sx={{ p: "6px", color: theme.palette.primary.main }}>
                <SearchIcon sx={{ fontSize: "20px" }} />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "12px", color: "#000", '::placeholder': { color: '#9A9EA5', opacity: 1 } }}
                placeholder="Search Here....."
                inputProps={{ "aria-label": "search", style: { color: '#000' } }}
              />
            </Paper>
          </Box>
          <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 4, pt: 1, bgcolor: "transparent", minHeight: 64 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={trigger ? colorLogo : logo}
                alt="Logo"
                sx={{ height: 80, width: 80, mr: 4, borderRadius: 2 }}
              />
            </Box>
            <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-around", ml: 4, gap: 3 }}>
              {navItems.map((item) => (
                <Typography
                  key={item}
                  variant="subtitle1"
                  onClick={() => setActiveNav(item)}
                  sx={{
                    fontWeight: activeNav === item ? 700 : 500,
                    color: activeNav === item ? (trigger ? "#fff" : theme.palette.primary.main) : (trigger ? "black" : "white"),
                    bgcolor: activeNav === item ? (trigger ? theme.palette.primary.main : "#fff") : "transparent",
                    px: activeNav === item ? 3 : 0,
                    py: activeNav === item ? 0.5 : 0,
                    borderRadius: activeNav === item ? 5 : 0,
                    cursor: 'pointer',
                    transition: "all 0.2s"
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </>
      )}
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 220,
            background: '#fff',
            boxShadow: 'none',
            pt: 2
          },
          '& .MuiBackdrop-root': {
            background: 'rgba(0,0,0,0.2)'
          }
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", p: 2, gap: 2 }}>
          {navItems.map((item) => (
            <Typography
              key={item}
              variant="subtitle1"
              onClick={() => {
                setActiveNav(item);
                setDrawerOpen(false);
              }}
              sx={{
                fontWeight: activeNav === item ? 700 : 500,
                color: activeNav === item ? theme.palette.primary.main : "inherit",
                bgcolor: activeNav === item ? theme.palette.action.selected : "transparent",
                px: 2,
                py: 1,
                borderRadius: 2,
                cursor: 'pointer',
                width: '100%',
                transition: "all 0.2s"
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;