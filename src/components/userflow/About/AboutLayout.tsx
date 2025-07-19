import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import about_image from "../../../assets/about_us/about_hero.png";
import aboutSideFish from "../../../assets/about_us/about_sidefish.png";
import abuotFish from "../../../assets/about_us/about_mainfish.png";
import useAboutStyles from "./aboutStyles";

const sidebarItems = [
  { label: "Who We Are", path: "/about" },
  { label: "Our History", path: "/about/our-history" },
  { label: "Our Team", path: "/about/our-team" },
  { label: "Sustainable Development", path: "/about/sustainable-development" },
  { label: "Careers", path: "/about/careers" },
  { label: "Milestones", path: "/about/milestones" },
  { label: "Testimonials", path: "/about/testimonials" }
];

const AboutLayout = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes, cx } = useAboutStyles();

  const currentLabel =
    sidebarItems.find((item) =>
      item.path === "/about" ? location.pathname === "/about" : location.pathname.startsWith(item.path)
    )?.label || "";

  return (
    <Box className={classes.aboutLayoutRoot}>
      <Box className={classes.aboutHero}>
        <Box
          component="img"
          src={about_image}
          alt="About Us Hero"
          className={classes.aboutHeroImg}
        />
        <Box className={classes.aboutHeroOverlay} />
        <Box className={classes.aboutHeroContent}>
          <Typography
            variant="h2"
            className={classes.aboutHeroTitle}
            style={{ fontSize: isMobile ? 28 : 64 }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            className={classes.aboutHeroSubtitle}
            style={{ fontSize: isMobile ? 18 : 28, maxWidth: isMobile ? 300 : 700 }}
          >
            Empowering the Future of Aquaculture Through Knowledge
          </Typography>
          {isMobile && <Typography className={classes.aboutHeroBreadcrumb}>
            About Us{currentLabel ? ` > ${currentLabel}` : ""}
          </Typography>}
        </Box>
      </Box>
      <Box className={classes.aboutMainRow}>
        {!isMobile && (
          <Box className={classes.aboutSidebarWrapper}>
            <Box className={classes.aboutSidebar}>
              <Box className={classes.aboutSidebarNavTitle}>About Us</Box>
              {sidebarItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  style={{ textDecoration: "none" }}
                  className={() => cx(classes.aboutSidebarNavItem, { active: location.pathname === item.path })}
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>
            <Box className={classes.aboutSidebarContact}>
              <Typography className={classes.aboutSidebarContactTitle}>Do You Need Any Help?</Typography>
              <Typography className={classes.aboutSidebarContactLabel}>Call Us Now:</Typography>
              <Box className={classes.aboutSidebarContactRow}>
                <Box component="span" className={classes.aboutSidebarContactIcon}>📞</Box>
                <Typography className={classes.aboutSidebarContactValue}>+91 97911-99909</Typography>
              </Box>
              <Typography className={classes.aboutSidebarContactLabel}>Talk Us Now:</Typography>
              <Box className={classes.aboutSidebarContactRow}>
                <Box component="span" className={classes.aboutSidebarContactIcon}>✉️</Box>
                <Typography className={classes.aboutSidebarContactValue}>info@Uday.com</Typography>
              </Box>
            </Box>
            <Box className={classes.aboutSidebarFish}>
              <img src={aboutSideFish} alt="Fish" />
            </Box>
          </Box>
        )}
        <Box className={classes.aboutMainContent}>
          <Box component="img" src={abuotFish} alt="Main Fish" className={classes.aboutMainFish} />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutLayout;