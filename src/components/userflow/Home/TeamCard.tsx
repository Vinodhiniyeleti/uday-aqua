import { Box, Typography, Button, Avatar, useTheme } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface TeamCardProps {
  image: string;
  name: string;
  location: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, location, role }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 262,
        background: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 10px 0 #0463EE66",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        mt: 10,
        px: 3,
        pt: 18,
        pb: 2,
        border: `2px solid #E0E7EF`,
      }}
    >
      <Avatar
        src={image}
        sx={{
          width: 230,
          height: 230,
          position: "absolute",
          top: -85,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#fff"
        }}
      />
      
      <Typography sx={{ color: theme.palette.primary.main, fontWeight: 500, fontSize: 18, textAlign: "center", width: '100%', mt: 1 }}>{role}</Typography>
      
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", px: 3, mt: 1 }}>
        <Box sx={{ display: "flex",mt:0.5, flexDirection: "column", alignItems: "flex-start" }}>
          <Typography sx={{ fontWeight: 900, color: "#222", fontSize: 25, textAlign: "left" }}>{name}</Typography>
          <Typography sx={{ color: "#222", fontSize: 16, textAlign: "left", mb: 0 }}>{location}</Typography>
        </Box>
        <Button variant="contained" sx={{ minWidth: 0, width: 36, height: 36, borderRadius: "50%", background: theme.palette.primary.main, color: "#fff", boxShadow: 1, p: 0 }}>
          <ArrowForwardIcon sx={{fontSize:22}} />
        </Button>
      </Box>
    </Box>
  );
};

export default TeamCard; 
