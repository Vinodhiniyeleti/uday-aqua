import { Box, useMediaQuery, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import PricingCard from "./PricingCard";
import pricingImg1 from "../../../assets/pricing/pricing_img_1.png";
import pricingImg2 from "../../../assets/pricing/pricing_img_2.png";
import pricingImg3 from "../../../assets/pricing/pricing_img_3.png";
import pricingTopImg from "../../../assets/home/pricing_image.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

const pricingData = [
  {
    image: pricingImg1,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support"
    ]
  },
  {
    image: pricingImg2,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support"
    ]
  },
  {
    image: pricingImg3,
    title: "Sea Bass",
    features: [
      "Cost-effective practices for small-scale farms",
      "End-to-end sea bass farm setup guidance",
      "Guidance: hatchery & nursery management",
      "Full-cycle farm operations with live video & export potential",
      "Value addition & export support"
    ]
  }
];

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ width: "100%", py: 6, background: "#fff", position: "relative" }}>
      <Box component="img" src={pricingTopImg} alt="Pricing Fishes" sx={{ position: "absolute", top: -45, right: 100, width: 400, zIndex: 0, display: isMobile ? "none" : "" }} />
      <SectionTitle title="Pricing" />
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: isOverflowing ? "flex-start" : "center",
          alignItems: "stretch",
          mt: 10,
          gap: 10,
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          '::-webkit-scrollbar': { display: 'none' },
          position: "relative",
          zIndex: 1,
        }}
      >
        {isOverflowing && <Box sx={{ ml : -9}} />}
        {pricingData.map((item, idx) => (
          <Box key={idx} sx={{ minWidth: 320, maxWidth: 380, width: 340, boxSizing: 'border-box', flex: '0 0 auto', height: '100%', display: 'flex', alignItems: 'stretch' }}>
            <Box sx={{ width: '90%', mx: 'auto', height: '100%' }}>
              <PricingCard {...item} />
            </Box>
          </Box>
        ))}
        {isOverflowing && <Box />}
      </Box>
    </Box>
  );
};

export default Pricing; 