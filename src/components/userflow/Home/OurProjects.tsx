import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import useAutoHorizontalScroll from "./useAutoHorizontalScroll";
import useIsOverflowing from "./useIsOverflowing";

import project1 from "../../../assets/projects/project_1.jpg";
import project2 from "../../../assets/projects/project_2.jpg";
import project3 from "../../../assets/projects/project_3.jpg";
import project4 from "../../../assets/projects/project_4.png";

const categories = [
  "All",
  "Hatchery",
  "Cage Culture",
  "Pond Culture",
  "Sea Weed",
  "Recirculatory Aquaculture System (RAS)",
  "Circulatory Aquaculture System (CAS)"
];

const projects = [
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project1,
    highlight: false
  },{
    title: "Uday Aqua sustainable water projects in Hyderabad",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Our Journey and Mission Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting. Our Journey and Mission Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers`,
    img: project2,
    highlight: true
  },
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project3,
    highlight: false
  },
  {
    title: "Our Journey and Mission",
    shortDescription: "Uday Aqua has been at the forefront of sustainable aquaculture.",
    longDescription: `Uday Aqua has been at the forefront of sustainable aquaculture since its inception, dedicated to educating and guiding fish farmers and entrepreneurs. Our mission is to promote responsible seafood farming through innovative techniques, expert consulting and comprehensive training programs.`,
    img: project4,
    highlight: false
  }
];

const OurProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useAutoHorizontalScroll(scrollRef);
  const isOverflowing = useIsOverflowing(scrollRef);

  return (
    <Box sx={{ width: '100%', py: 6, background: '#f8fafc' }}>
      <SectionTitle title="Our Projects" />
      <Box sx={{ pt: 4, width: '100%' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around",
          background: '#fff',
          borderRadius: 3,
          maxWidth: "92%",
          margin: "auto",
          boxShadow: "0 2px 10px 0 #0463EE66",
          position: 'relative',
          minHeight: 56,
          pl: 2,
          overflowX: 'auto',
          '::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
        }}>
          {categories.map((cat, idx) => (
            <Box
              key={cat}
              sx={{
                px: 3,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 500,
                fontSize: 20,
                color: idx === 0 ? '#fff' : '#0A4FA4',
                background: idx === 0 ? '#0A4FA4' : 'transparent',
                boxShadow: idx === 0 ? '0 2px 10px 0 #0463EE33' : 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </Box>
          ))}
        </Box>
        <Box
          ref={scrollRef}
          sx={{
            mt: 6,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: 3,
            justifyContent: isOverflowing ? 'flex-start' : 'center',
            alignItems: 'stretch',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {isOverflowing && <Box></Box>}
          {projects.map((project, idx) => (
            <Box key={idx} sx={{ minWidth: 320, maxWidth: 380, width: 340, boxSizing: 'border-box',height: '100%',display: 'flex', alignItems: 'stretch' }}>
                <ProjectCard {...project} />
            </Box>
          ))}
          {isOverflowing && <Box></Box>}
        </Box>
      </Box>
    </Box>
  );
};

export default OurProjects;