import { Box, Typography } from "@mui/material";

interface ProjectCardProps {
  img: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  highlight?: boolean;
}

const ProjectCard = ({ img, title, shortDescription, longDescription, highlight }: ProjectCardProps) => {
  return (
    <Box
      sx={{
        width: 350,
        height: 600,
        overflow: 'hidden',
        background: `url(${img}) center/cover no-repeat`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      {highlight ? (
        <Box sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10,79,164,0.75)',
          color: '#fff',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          zIndex: 2,
        }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 4, fontSize: 20 }}>{title}</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 300, lineHeight: 2 }}>{longDescription}</Typography>
        </Box>
      ) : (
        <Box sx={{
          width: '100%',
          background: 'linear-gradient(180deg, rgba(10,79,164,0.85) 40%, rgba(4,30,62,0.75) 100%)',
          color: '#fff',
          p: 2,
          zIndex: 2,
        }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, fontSize: 16 }}>{title}</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 400, mt: 0.5 }}>{shortDescription}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProjectCard; 