import { Box, useMediaQuery, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import TeamCard from "./TeamCard";
import teamImg from "../../../assets/team/team_1.png";
import teamBg from "../../../assets/team/team_bg.png";
import fishesImg from "../../../assets/home/team_image.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

const teamData = [
  {
    image: teamImg,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Managing Director",
    roleColor: "#1976d2"
  },
  {
    image: teamImg,
    name: "Uday Krishna",
    location: "Hyderabad, Telangana",
    role: "Director",
    roleColor: "#1976d2"
  }
];

const Team = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ width: "100%", py: 6, background: "#fff", position: "relative", overflow: "hidden" }}>
      <Box component="img" src={fishesImg} alt="Fishes" sx={{ position: "absolute", top: 0, right: 40, width: 500, zIndex: 1, display: isMobile ? "none" : "" }} />
      <SectionTitle title="Our Directors & Advisors" />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 4, mb: 2 }}>
        <Box sx={{ color: '#1976d2', fontWeight: 500, fontSize: 24, cursor: 'pointer', textDecoration: 'underline' }}>Directors</Box>
        <Box sx={{ mx: 2, color: '#bbb', fontSize: 22 }}>|</Box>
        <Box sx={{ color: '#222', fontWeight: 500, fontSize: 24, cursor: 'pointer' }}>Advisors</Box>
      </Box>
      <Box sx={{ width: '100%', position: 'relative', height: "70vh", maxHeight: "700px", display: "flex", alignItems: "center", justifyContent: "center", mt: 4, zIndex: 2 }}>
        <Box component="img" src={teamBg} alt="Team Background" sx={{ width: '100%', height: "100%", objectFit: 'cover', position: 'absolute', left: 0, top: 0, zIndex: 0 }} />
        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: isOverflowing ? 5 : 12,
            justifyContent: isOverflowing ? 'flex-start' : 'center',
            alignItems: 'flex-end',
            position: 'relative',
            zIndex: 2,
            mt: 4,
            width: '100%',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {isOverflowing && <Box />}
          {teamData.map((item, idx) => (
            <Box key={idx} sx={{ minWidth: 320, maxWidth: 380, width: 340, boxSizing: 'border-box', flex: '0 0 auto', height: '100%', ml: !isOverflowing && idx === 0 ? 4 : 0, mr: !isOverflowing && idx === teamData.length - 1 ? 4 : 0, display: 'flex', alignItems: 'stretch' }}>
              <Box sx={{ width: '90%', mx: 'auto', height: '100%' }}>
                <TeamCard {...item} />
              </Box>
            </Box>
          ))}
          {isOverflowing && <Box />}
        </Box>
      </Box>
    </Box>
  );
};

export default Team; 