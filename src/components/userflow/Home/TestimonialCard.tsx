import { Box, Typography, Avatar, useTheme } from "@mui/material";
import testimonialCloud from "../../../assets/home/testimonials_cloud.svg";

export interface Testimonial {
  name: string;
  role: string;
  img: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flex: 1, minWidth: 320, maxWidth: 500, minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <Box sx={{ width: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Box
          component="img"
          src={testimonialCloud}
          alt="testimonial cloud"
          sx={{ width: "100%", height: 200, display: "block" }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "90%",
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.primary.main,
            fontWeight: 600,
            fontSize: 20,
            lineHeight: 1.3,
            pt: 0.25,
            pl: 2,
            margin: "auto",
            mt: "-14px",
          }}
        >
          {testimonial.quote}
        </Typography>
        <Avatar src={testimonial.img} sx={{ width: 64, height: 64, position: "absolute", left: "10%", bottom: -24, transform: "translateX(-50%)", border: `3px solid #fff`, boxShadow: 2, background: "#fff" }} />
      </Box>
      <Box sx={{ position: "absolute", left: "10%", top: 200 + 20, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", width: 120, mt: 1 }}>
        <Typography sx={{ fontWeight: 600, color: "#222" }}>{testimonial.name}</Typography>
        <Typography sx={{ fontSize: 14, color: theme.palette.primary.main }}>{testimonial.role}</Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCard; 