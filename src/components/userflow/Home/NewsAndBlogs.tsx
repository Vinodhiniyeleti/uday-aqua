import { Box, useMediaQuery, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import NewsCard from "./NewsCard";
import fishesImg from "../../../assets/home/news_img.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

import newsImg1 from "../../../assets/news_and_blogs/news_1.jpg";
import newsImg2 from "../../../assets/news_and_blogs/news_2.jpg";
import newsImg3 from "../../../assets/news_and_blogs/news_3.jpg";

const newsData = [
  {
    image: newsImg1,
    date: "01 Jun 2025",
    title: "Boosting Fish Farming with Indian Tech",
    description: "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
    authorLink: "#"
  },
  {
    image: newsImg2,
    date: "15 Jun 2025",
    title: "Sustainable Farming Along India's Coasts",
    description: "Andhra Pradesh to Gujarat, India's coastline is becoming a hub for eco-friendly aquaculture Innovations.",
    author: "Shruti Nair",
    authorLink: "#"
  },
  {
    image: newsImg3,
    date: "27 Jun 2025",
    title: "India's Inland Fisheries See Growth",
    description: "Smart aeration systems and IoT sensors are helping Indian farmers improve water quality and fish health like never before.",
    author: "Ramesh Varma",
    authorLink: "#"
  }
];

const NewsAndBlogs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ width: "100%", py: isMobile ? 2 : 6, background: "#fff", position: "relative" }}>
      <Box component="img" src={fishesImg} alt="Fishes" sx={{ position: "absolute", left: 0, top: -10, zIndex: 0, display: isMobile ? "none" : "" }} />
      <SectionTitle title="News & Blog" />
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: isOverflowing ? "flex-start" : "center",
          alignItems: "stretch",
          mt: 6,
          gap: 8,
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {isOverflowing && <Box sx={{ ml : -7}}  />}
        {newsData.map((item, idx) => (
          <Box key={idx} sx={{ minWidth: 320, maxWidth: 380, width: 340, boxSizing: 'border-box', flex: '0 0 auto', height: '100%', ml: !isOverflowing && idx === 0 ? 4 : 0, mr: !isOverflowing && idx === newsData.length - 1 ? 4 : 0, display: 'flex', alignItems: 'stretch' }}>
            <Box sx={{ width: '90%', mx: 'auto', height: '100%' }}>
              <NewsCard {...item} />
            </Box>
          </Box>
        ))}
        {isOverflowing && <Box  />}
      </Box>
    </Box>
  );
};

export default NewsAndBlogs;
