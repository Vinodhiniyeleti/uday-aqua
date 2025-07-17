import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import aboutImg from "../../../assets/home/about_image.png";
import aboutVideo from "../../../assets/home/video.mp4";

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box sx={{
        width: '100%',
        background: '#fff',
        boxShadow: '0 0 0 2px #e0e7ef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 2 : 4,
        minHeight: 380,
        py:isMobile ? 6 : 0,
        flexDirection: isMobile ? 'column' : 'row',
      }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: isMobile ? 'center' : 'flex-start', height: '100%', p: isMobile ? 1.5 : 4 }}>
          <Box sx={{ width:"100%", display: 'flex', flexDirection: 'row', gap: isMobile ? 1.5 : 3, mb: isMobile ? 2 : 3, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Box sx={{
              px: isMobile ? 2 : 6,
              py: isMobile ? 1 : 1.5,
              borderRadius: 999,
              background: 'linear-gradient(180deg, #0A4FA4 0%, #041E3E 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: isMobile ? 16 : 40,
              boxShadow: '0 2px 8px 0 #0A4FA422',
              border: '2px solid #0A4FA4',
              transition: 'all 0.2s',
              textAlign: 'center',
              minWidth: isMobile ? 90 : 'unset',
            }}>
              About Us
            </Box>
            <Box sx={{
              px: isMobile ? 2 : 6,
              py: isMobile ? 1 : 1.5,
              borderRadius: 999,
              background: '#fff',
              color: '#0A4FA4',
              fontWeight: 700,
              fontSize: isMobile ? 16 : 40,
              border: '2px solid #e0e7ef',
              boxShadow: "0 2px 10px 0 #0463EE66",
              transition: 'all 0.2s',
              textAlign: 'center',
              minWidth: isMobile ? 90 : 'unset',
            }}>
              Why Choose Us
            </Box>
          </Box>
          <Typography sx={{ color: theme.palette.primary.dark, p: isMobile ? 0.5 : 2, letterSpacing: "0.5px", fontSize: isMobile ? 15 : 20, mb: isMobile ? 1.5 : 2, maxWidth: isMobile ? "98%" : "90%", lineHeight: 1.6, fontWeight: 400 , px:isMobile ? 2 : 0}}>
              Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting, and comprehensive training programs.
          </Typography>
          <Button variant="outlined" sx={{ color: theme.palette.primary.main, mx: isMobile ? 2 : 0, borderColor: '#0A4FA4', fontWeight: 400, px: 4, py: 1, fontSize: isMobile ? 10 : 14, borderRadius: 999, width: "fit-content", alignSelf: 'flex-start', '&:hover': { borderColor: '#0A4FA4', background: '#eaf2fb' }, mt: isMobile ? 1 : 0 }}>
            Learn More
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Box component="img" src={aboutImg} alt="About Uday Aqua" sx={{ width: isMobile ? '90%' : '100%', borderRadius: 5, objectFit: 'cover', mt: isMobile ? 2 : 0, maxWidth: isMobile ? 340 : 540 }} />
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'relative', overflow: 'visible' }}>
          <Box component="video" src={aboutVideo} autoPlay muted loop playsInline sx={{ 
            width: '100%', 
            height: '100vh', 
            objectFit: 'cover',
            top: 0, 
            left: 0,
            minWidth: '100%',
            minHeight: '100%'
          }} />
      </Box>
    </>
  );
};

export default AboutUs; 