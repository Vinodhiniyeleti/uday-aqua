import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import heroImg from '../../../assets/home/hero_img.png';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: isMobile ? '40vh' : '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'radial-gradient(circle at 60% 40%, #1758B4 0%, #0A264E 100%)',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
        }}
      >
        <IconButton
          sx={{
            width: isMobile ? 40 : 150,
            height: isMobile ? 40 : 150,
            borderRadius: '50%',
            border: `3px solid #FFFFFF7D`,
            bgcolor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            boxShadow: 'none',
            p: 0,
            mx: 0,
            '&:hover': {
              bgcolor: 'rgba(4,99,238,0.08)',
              boxShadow: 'none',
            },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: isMobile ? 8 : 32, mr: isMobile ? 1 : 4, color: theme.palette.primary.main }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: 1400,
          minHeight: isMobile ? '40vh' : '60vh',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <Box
          sx={{
            flex: isMobile ? '0 0 40%' : '0 0 60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box
            component="img"
            src={heroImg}
            alt="Hero"
            sx={{
              mt: isMobile ? 0 : 10,
              ml:isMobile ? 8 : 0,
              maxHeight: '80vh',
              maxWidth: isMobile ? '120%' : '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>
        <Box sx={{display:"flex",justifyContent:"flex-end",width:"100%"}} >
          <Box
            sx={{
              flex: isMobile? '0 0 100%' : '0 0 40%',
              display: 'flex',
              maxWidth:isMobile ? "300px" : "600px",
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100%',
              pl: isMobile ? 0 :{ xs: 2, md: 6 },
              color: '#fff',
              mr:isMobile ? 0 : 15,
              textAlign: 'right',
              fontFamily: 'DM Serif Display',
            }}
          >
            {isMobile ? (
              <>
                <Typography variant={isMobile ? "h6" : "h2"} sx={{ fontSize: isMobile ? "16px" : "60px" , maxWidth: isMobile ? '210px' : '430px', lineHeight: isMobile ? '26px' : '80px', textShadow: '0px 4px 24px rgba(0, 0, 0, 0.18)',letterSpacing:isMobile ? "1px" : "0",mt:0,mr:3 }} fontWeight={700}>
                  <span style={{color:"#2B7BFF"}} >Uday Aqua</span> <RemoveIcon sx={{ color: 'white', fontSize: isMobile ? 12 : 40, verticalAlign: 'middle',mr:0.5 }} />
                  Your Platform to Sustainable Aquaculture
                </Typography>
              </>
            ) : (
              <>
                <Typography variant={isMobile ? "h6" : "h2"} fontWeight={700} my={2} sx={{ color: '#2B7BFF', minWidth: isMobile ? '0' : '430px', textShadow: '0px 4px 24px rgba(0, 0, 0, 0.18)' }}>
                  Uday Aqua <RemoveIcon sx={{ color: 'white', fontSize: isMobile ? 20 : 40, verticalAlign: 'middle', mx: 1 }} />
                </Typography>
                <Typography variant={isMobile ? "h6" : "h2"} sx={{ fontSize: isMobile ? "14px" : "60px" , maxWidth: isMobile ? '120px' : '430px', lineHeight: isMobile ? '20px' : '80px', textShadow: '0px 4px 24px rgba(0, 0, 0, 0.18)',letterSpacing:isMobile ? "1px" : "0" }} fontWeight={700}>
                  Your Platform to Sustainable Aquaculture
                </Typography>
              </>)}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translate(50%, -50%)',
          zIndex: 2,
        }}
      >
        <IconButton
          sx={{
            width: isMobile ? 40 : 150,
            height: isMobile ? 40 : 150,
            borderRadius: '50%',
            border: `3px solid #FFFFFF7D`,
            bgcolor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            boxShadow: 'none',
            p: 0,
            mx: 0,
            '&:hover': {
              bgcolor: 'rgba(4,99,238,0.08)',
              boxShadow: 'none',
            },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: isMobile ? 8 : 32, ml: isMobile ? 1 : 4, color: theme.palette.primary.main }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;