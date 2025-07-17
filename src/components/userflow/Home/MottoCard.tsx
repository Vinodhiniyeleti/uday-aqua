import { Box, Typography, Button } from "@mui/material";
import mottoHead from "../../../assets/home/motto_head.svg";

interface MottoCardProps {
  img: string;
  fishText: string;
  title: string;
  button?: boolean;
  buttonText?: string;
}

const MottoCard = ({ img, fishText, title, button, buttonText }: MottoCardProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 300 }}>
      <Box sx={{ position: 'relative', width: 240, height: 70, mb: -3, zIndex: 2 }}>
        <Box component="img" src={mottoHead} alt="fish" sx={{ width: '100%', height: '100%' }} />
        <Typography sx={{
          position: 'absolute',
          top: '50%',
          left: '55%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 600,
          color: '#0A4FA4',
          fontSize: 20,
          whiteSpace: 'nowrap',
        }}>{fishText}</Typography>
      </Box>
      <Box sx={{
        width: 320,
        height: 300,
        background: '#fff',
        borderRadius: 4,
        boxShadow: '0 4px 24px 0 #00000022',
        position: 'relative',
        overflow: 'hidden',
        p: 0,
        mb: 2,
      }}>
        <Box sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
          <Box component="img" src={img} alt={title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
        {button && (
          <Box sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            zIndex: 3,
            background: 'rgba(10, 79, 164, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 48,
          }}>
            <Button variant="contained" sx={{ width: '100%', height: '100%', background: 'transparent', color: '#fff', fontWeight: 600, fontSize: 20, boxShadow: 'none', borderRadius: 0, '&:hover': { background: 'rgba(10, 79, 164, 0.85)' } }}>
              {buttonText}
            </Button>
          </Box>
        )}
      </Box>
      <Typography sx={{ textAlign: 'center', fontWeight: 600, color: '#fff',maxWidth:"240px", fontSize: 22, lineHeight: 1.2 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default MottoCard; 