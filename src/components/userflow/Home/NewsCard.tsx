import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import useHomeStyles from "./homeStyles";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { classes } = useHomeStyles(isMobile);
  return (
    <Box className={classes.newsCardRoot}>
      <Box className={classes.newsCardImgWrap}>
        <Box
          component="img"
          src={image}
          alt={title}
          className={classes.newsCardImg}
        />
        <Box className={classes.newsCardDateBox}>
          <Typography className={classes.newsCardDateDay}>{day}</Typography>
          <Typography className={classes.newsCardDateMonth}>{month}</Typography>
          <Typography className={classes.newsCardDateYear}>{year}</Typography>
        </Box>
      </Box>
      <Box className={classes.newsCardContent}>
        <Typography className={classes.newsCardTitle}>{title}</Typography>
        <Typography className={classes.newsCardDesc}>{description}</Typography>
        <Typography className={classes.newsCardAuthor}>
          By{" "}
          {authorLink ? (
            <Box component="a" href={authorLink} className={classes.newsCardAuthorLink}>
              {author}
            </Box>
          ) : (
            <Box component="span" className={classes.newsCardAuthorSpan}>{author}</Box>
          )}
        </Typography>
      </Box>
      <Box className={classes.newsCardFooter}>
        <Button variant="outlined" className={classes.newsCardButton}>
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default NewsCard; 