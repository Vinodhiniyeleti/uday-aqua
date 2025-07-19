import { Box, Typography } from "@mui/material";
import useAboutStyles from "./aboutStyles";

interface AboutHeaderProps {
    title: string,
    subtitle: string,
    img: string
}

const AboutHeader = ({title, subtitle, img}: AboutHeaderProps) => {
  const {classes} = useAboutStyles();
  
  return (
    <>
        <Typography className={classes.aboutHeaderTitle}>{title}</Typography>
        <Typography className={classes.aboutHeaderSubtitle}>{subtitle}</Typography>
        <Box component="img" src={img} className={classes.aboutHeaderImg} />
    </>
  )
}

export default AboutHeader;