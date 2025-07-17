import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import type { Testimonial } from "./TestimonialCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

import img1 from "../../../assets/testimonials/person_1.jpg";
import img2 from "../../../assets/testimonials/person_2.jpg";
import img3 from "../../../assets/testimonials/person_3.jpg";

const testimonials: Testimonial[] = [
  {
    name: "Ramesh",
    role: "Farmer",
    img: img1,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  },
  {
    name: "Laxmi",
    role: "Farmer",
    img: img2,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  },
  {
    name: "Mahesh",
    role: "Customer",
    img: img3,
    quote: '“Uday Aqua transformed our aquaculture operations with their innovative and sustainable approach.”',
  }
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ width: "100%", position: "relative", left: "50%", right: "50%", ml: "-50%", mr: "-50v%", py: 6, background: "#fff" }}>
      <SectionTitle title="Testimonials" />
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: isOverflowing ? "flex-start" : "center",
          alignItems: "stretch",
          mt: 6,
          width: "100%",
          gap: 5,
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {isOverflowing && <Box />}
        {testimonials.map((t, idx) => (
          <Box key={idx} sx={{ minWidth: 320, maxWidth: 380, width: 340, boxSizing: 'border-box', flex: '0 0 auto', height: '100%', ml: !isOverflowing && idx === 0 ? 4 : 0, mr: !isOverflowing && idx === testimonials.length - 1 ? 4 : 0, display: 'flex', alignItems: 'stretch' }}>
              <TestimonialCard testimonial={t} />
          </Box>
        ))}
        {isOverflowing && <Box />}
      </Box>
    </Box>
  );
};

export default Testimonials;