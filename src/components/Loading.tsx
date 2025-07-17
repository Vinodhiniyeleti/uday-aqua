import { Box, Typography } from "@mui/material"

const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" position="fixed" top={0} left={0} width="100%" height="100vh"
    >
      <Typography variant="h6">Loading...</Typography>
    </Box>
  )
}

export default Loading