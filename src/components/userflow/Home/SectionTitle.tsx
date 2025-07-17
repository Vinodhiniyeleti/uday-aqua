import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import sectionHeader from "../../../assets/home/section_header.svg";

const SectionTitle = ({ title }: { title: string }) => { 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
  <Box sx={{ position:"relative",zIndex:1,display: "flex", alignItems: "center", justifyContent: "center", mb: 3}}>
    <Box sx={{ borderRadius:10,backgroundColor:"white",boxShadow: "0 2px 10px 0 #0463EE66",display: "flex", alignItems: "center", justifyContent: "center",px:4,border:"3px #0463EE"}} >
      <Box
        component="img"
        src={sectionHeader}
        alt=""
        sx={{ height: isMobile ? 4 : 12, transform: "scaleX(-1)" }}
      />
      <Typography
        sx={{ color: theme.palette.primary.main, fontSize: isMobile ? "20px" : "40px", fontWeight: 400, fontFamily: "DM Serif Display, serif", px: isMobile ? 1 : 2}}
      >
        {title}
      </Typography>
      <Box
        component="img"
        src={sectionHeader}
        alt=""
        sx={{ height: isMobile ? 4 : 12, transform: "scaleX(-1)" }}
      />
    </Box>
  </Box>
)};

export default SectionTitle;