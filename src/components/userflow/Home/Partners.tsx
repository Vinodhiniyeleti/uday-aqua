import { Box, useMediaQuery, useTheme } from "@mui/material";
import SectionTitle from "./SectionTitle";
import fishBg from "../../../assets/home/partners_img.png";

import ciba from "../../../assets/partners/ciba.png";
import cmfri from "../../../assets/partners/cmfri.png";
import nfdb from "../../../assets/partners/ngdb.png";
import nabard from "../../../assets/partners/nabard.png";
import icar from "../../../assets/partners/icar.png";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

const partners = [
  { src: ciba, alt: "CIBA" },
  { src: cmfri, alt: "CMFRI" },
  { src: nfdb, alt: "NFDB" },
  { src: nabard, alt: "NABARD" },
  { src: icar, alt: "ICAR" },
];

const PartnersSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ position: "relative", pt: 4, bgcolor: "#fff", width: "100%", left: "50%", right: "50%", ml: "-50vw", mr: "-50vw", px: 0 }}>
      <SectionTitle title="Our Partners" />
      <Box
        sx={{
          width: "100%",
          mx: "auto",
          position: "relative",
          zIndex: 1,
          background: "#fff",
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            gap: 4,
            justifyContent: isOverflowing ? "flex-start" : "space-around",
            alignItems: "center",
            mt: 6,
            mb: 16,
            boxShadow: "0 2px 10px 0 #0463EE66",
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {partners.map((p) => (
            <Box
              key={p.alt}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px: 4,
                py: 1.5,
                minWidth: 120,
                maxWidth: 180,
              }}
            >
              <Box
                component="img"
                src={p.src}
                alt={p.alt}
                sx={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        component="img"
        src={fishBg}
        alt=""
        sx={{
          position: "absolute",
          right: 60,
          top: 55,
          height: 140,
          opacity: 0.5,
          zIndex: 0,
          pointerEvents: "none",
          display: isMobile ? "none" : "",
        }}
      />
    </Box>
  );
};

export default PartnersSection;