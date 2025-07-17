import SectionTitle from "./SectionTitle";
import card1 from "../../../assets/motto/card_1.png";
import card2 from "../../../assets/motto/card_2.png";
import card3 from "../../../assets/motto/card_3.png";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import MottoCard from "./MottoCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

const mottoData = [
  {
    img: card1,
    fishText: "NH-44",
    title: "Creating Fresh Water Aqua Corridor",
    button: true,
    buttonText: "LEARN MORE",
  },
  {
    img: card2,
    fishText: "NH-16",
    title: "Creating Coastal Aqua Corridor",
    button: false,
  },
  {
    img: card3,
    fishText: "99 acre",
    title: "Mulapolam, Srikakulam",
    button: false,
  },
];

const OurMotto = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{
      width: '100%',
      py: 6,
      background: 'linear-gradient(180deg, #0A4FA4 0%, #041E3E 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflowY: "visible",
      position:"relative"
    }}>
      <Box sx={{ position:"absolute",top:isMobile ? -15 : -25, mb: "10px" }} >
        <SectionTitle title="Our Motto" />
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: 14,
          justifyContent: isOverflowing ? 'flex-start' : 'center',
          mt: 10,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          width: '100%',
          scrollbarWidth: 'none',
          mb:5,
          msOverflowStyle: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {isOverflowing && <Box sx={{mr:-8}}></Box>}
        {mottoData.map((card, idx) => (
          <Box key={idx}>
            <MottoCard {...card} />
          </Box>
        ))}
        {isOverflowing && <Box sx={{ml:-8}}></Box>}
      </Box>
    </Box>
  );
};

export default OurMotto;