import { Box, Typography, Button, InputBase, InputAdornment, useTheme, useMediaQuery, IconButton } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../../../assets/logo.png";
import footerBg from "../../../assets/home/footer.png";
import footerMap from "../../../assets/home/footer_map.png";

const navLinks1 = ["Home", "About US", "New & Events", "Contact Us"];
const navLinks2 = ["Training Program", "Technologies"];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', minHeight: isMobile ? 700 : 550, position: 'relative', pt: 0, pb: 0, overflow: 'hidden' }}>
      <Box component="img" src={footerBg} alt="Footer Waves" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: isMobile ? '100%' : '120%', objectFit: 'cover', objectPosition: 'top', zIndex: 0 }} />
      <Box sx={{ position: 'relative', mt: isMobile ? '40px' : '100px', zIndex: 1, px: { xs: 1, md: 8 }, pt: isMobile ? 3 : 8, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Box sx={{ width: '100%', display: isMobile ? 'flex' : 'none', justifyContent: isMobile ? 'flex-start' : 'center', mb: isMobile ? 2 : 0 }}>
          <Box component="img" src={logo} alt="Logo" sx={{ width: isMobile ? 120 : 180, mt:20 }} />
        </Box>
        
        <Box sx={{ width: '100%', maxWidth: 600, display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', mb: 4, mt: 2, gap: isMobile ? 2 : 0, justifyContent: 'center' }}>
          <InputBase
            placeholder="Enter Email"
            endAdornment={
              <InputAdornment position="end">
                <Button variant="contained" sx={{
                  background: "#0463EE",
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: isMobile ? 14 : 16,
                  borderRadius: 999,
                  mr: 2,
                  px: 2,
                  height: "fit-content",
                  boxShadow: '0 2px 8px 0 #0A4FA422',
                  textTransform: 'none',
                  letterSpacing: 0.5,
                  minWidth: 0,
                  '&:hover': { background: '#1251a3' }
                }}>Subscribe</Button>
              </InputAdornment>
            }
            sx={{
              flex: 1,
              background: '#fff',
              borderRadius: 3,
              px: 2,
              py: 1.5,
              fontSize: isMobile ? 16 : 22,
              boxShadow: '0 2px 8px 0 #0A4FA422',
              height: isMobile ? 44 : 56,
              pr: 0,
              width: isMobile ? '100%' : 'auto',
              minWidth: 0,
              mb: isMobile ? 1 : 0
            }}
          />
        </Box>
        
        {isMobile ? (
          <Box sx={{ width: '100%', mt: 1, mb: 2,pb:2, display: 'flex', flexWrap: 'wrap' }}>
            <Box sx={{ width: '50%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', pl: 1 }}>
              {navLinks1.map(link => (
                <Typography key={link} sx={{ color: '#fff', fontSize: 14, fontWeight: 400, mb: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Box>
            <Box sx={{ width: '50%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', pl: 1 }}>
              {navLinks2.map(link => (
                <Typography key={link} sx={{ color: '#fff', fontSize: 14, fontWeight: 700, mb: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Box>
            <Box sx={{ width: '50%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start', pl: 1, mt: 2 }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 15, mb: 1 }}>Contact Us</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <MailOutlineIcon fontSize="small" />
                <Typography sx={{ fontSize: 13 }}>info@Uday.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <PhoneIcon fontSize="small" />
                <Typography sx={{ fontSize: 13 }}>+91 97911-99909</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <LocationOnIcon fontSize="small" />
                <Typography sx={{ fontSize: 13 }}>Mulapolam, Srikakulam</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <IconButton sx={{ color: '#fff' }}><TwitterIcon /></IconButton>
                <IconButton sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
              </Box>
            </Box>
            <Box sx={{ width: '50%', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 0, mt: 2 }}>
              <Box component="img" src={footerMap} alt="Map" sx={{ width: 120, height: 90, borderRadius: 3, boxShadow: 2, objectFit: 'cover' }} />
            </Box>
          </Box>
        ) : (
          <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mt: 2,
            gap: 4,
            mb: 2
          }}>
            <Box sx={{ minWidth: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Box component="img" src={logo} alt="Logo" sx={{ width: 180, mb: 2 }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
              {navLinks1.map(link => (
                <Typography key={link} sx={{ color: '#fff', fontSize: 16, fontWeight: 400, mb: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
              {navLinks2.map(link => (
                <Typography key={link} sx={{ color: '#fff', fontSize: 16, fontWeight: 700, mb: 0.5, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}>{link}</Typography>
              ))}
            </Box>
            <Box sx={{ minWidth: 160, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: 18, mb: 1, textAlign: 'center' }}>Contact Us</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <MailOutlineIcon fontSize="small" />
                <Typography sx={{ fontSize: 15 }}>info@Uday.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <PhoneIcon fontSize="small" />
                <Typography sx={{ fontSize: 15 }}>+91 97911-99909</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#fff', mb: 0.5 }}>
                <LocationOnIcon fontSize="small" />
                <Typography sx={{ fontSize: 15 }}>Mulapolam, Srikakulam</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'center' }}>
                <IconButton sx={{ color: '#fff' }}><TwitterIcon /></IconButton>
                <IconButton sx={{ color: '#fff' }}><FacebookIcon /></IconButton>
                <IconButton sx={{ color: '#fff' }}><InstagramIcon /></IconButton>
              </Box>
            </Box>
            <Box sx={{ minWidth: 120, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box component="img" src={footerMap} alt="Map" sx={{ width: 220, height: 160, borderRadius: 3, boxShadow: 2, objectFit: 'cover' }} />
            </Box>
          </Box>
        )}
      </Box>
      <Box sx={{ width: '100%', borderTop: '1px solid #e0e7ef', py: 1, mt: 0, textAlign: 'center', color: '#fff', fontSize: isMobile ? 13 : 17, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, position: 'absolute', left: 0, bottom: 0, background: 'transparent' }}>
        <span>Copyright</span>
        <span style={{ fontSize: isMobile ? 16 : 22, margin: '0 4px' }}>©</span>
        <span>Uday Aqua all rights reserved.</span>
      </Box>
    </Box>
  );
};

export default Footer;