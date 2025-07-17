import { Box, Typography, Button } from "@mui/material";

export interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  author: string;
  authorLink?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image, date, title, description, author, authorLink
}) => {
  const [day, month, year] = date.split(" ");
  return (
    <Box sx={{
      width: 370,
      height: 480,
      overflow: "hidden",
      boxShadow: "0 2px 12px 0 #e0e7ef",
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      borderRadius: 3,
      position: "relative"
    }}>
      <Box sx={{ position: "relative", height: 400, width: "100%" }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <Box sx={{
          position: "absolute", top: 12, left: 12, bgcolor: "#E0E2E3C2", px: 1, py: 0.5, boxShadow: 1, textAlign: "center"
        }}>
          <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#1976d2", lineHeight: 1 }}>{day}</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#1976d2", lineHeight: 1 }}>{month}</Typography>
          <Typography sx={{ fontSize: 15, fontWeight: 700, mt: 0.5, color: "#1976d2", lineHeight: 1 }}>{year}</Typography>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", bgcolor: "#F7FAFC", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", p: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>{title}</Typography>
        <Typography sx={{ fontSize: 14, py: 0.5, lineHeight: 1.25 }}>{description}</Typography>
        <Typography sx={{ fontSize: 14 }}>
          By{" "}
          {authorLink ? (
            <Box component="a" href={authorLink} sx={{ color: "#1976d2", textDecoration: "underline", fontWeight: 600 }}>
              {author}
            </Box>
          ) : (
            <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>{author}</Box>
          )}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: "#fff", px: 2,pb:2, display: "flex", justifyContent: "flex-start", borderBottomLeftRadius: 3, borderBottomRightRadius: 3 }}>
        <Button variant="outlined" sx={{ color: "#1976d2", borderColor: "#1976d2", fontWeight: 600, borderRadius: 999, px: 3, py: 0.5, bgcolor: "#F7FAFC" }}>
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default NewsCard; 