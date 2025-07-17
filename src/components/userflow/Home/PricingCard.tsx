import { Box, Typography, Button, useTheme } from "@mui/material";

export interface PricingCardProps {
  image: string;
  title: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ image, title, features }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: 320,
      boxShadow: "0 2px 10px 0 #0463EE66",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      p: 3,
      borderTopLeftRadius: "50% 25%",
      borderTopRightRadius: "50% 25%",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      position: "relative",
      border: "2px solid #E0E7EF"
    }}>
      <Box sx={{ width: 280, height: 280, borderRadius: "50%", background: "#0A4FA4", display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
        <Box component="img" src={image} alt={title} sx={{ width: 200, height: 200, objectFit: "contain" }} />
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#0A4FA4", fontSize: 24, mb: 2 }}>{title}</Typography>
      <Box component="ul" sx={{ color: "#222", fontSize: 15, pr: 2, mb: 3, listStyle: 'disc', textAlign: 'left', width: '100%' }}>
        {features.map((f, idx) => (
          <li key={idx} style={{ marginBottom: 8, fontSize: "18px" }}>{f}</li>
        ))}
      </Box>
      <Button variant="outlined" sx={{ color: theme.palette.primary.main, borderColor: theme.palette.primary.main, fontWeight: 600, borderRadius: 999, px: 3, py: 0.5, bgcolor: "#fff" }}>
        Learn More
      </Button>
    </Box>
  );
};

export default PricingCard; 