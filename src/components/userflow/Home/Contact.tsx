import { Box, Typography, Button, TextField, useTheme, useMediaQuery } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { useState } from "react";
import contactImg from "../../../assets/home/contact.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ width: "100%", py: 6, background: "#fff"}}>
      <SectionTitle title="Get In Touch" />
      <Box sx={{ display: "flex",width:"100%", flexDirection: "column", alignItems: "center", mt: 6 }}>
        {isMobile && (
          <Box sx={{ width: "95%",height:"300px", display: "flex", justifyContent: "center", mb: 2 }}>
            <Box component="img" src={contactImg} alt="Contact" sx={{ width: "100%", objectFit: "cover" }} />
          </Box>
        )}
          <Box
            sx={{
              width:"80%",
              mt:isMobile ? 4 : 0,
              maxWidth: 420,
              borderRadius: 4,
              boxShadow: "0 4px 16px 0 #0A4FA422",
              background: "linear-gradient(180deg, #0A4FA4 0%, #041E3E 100%)",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
              p: 4
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ color: "#fff", fontWeight: 500, mb: 1 }}>First Name</Typography>
              <TextField
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  background: "#fff",
                  borderRadius: 1,
                  input: { color: "#222" },
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ color: "#fff", fontWeight: 500, mb: 1 }}>Phone</Typography>
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91"
                fullWidth
                variant="outlined"
                size="small"
                sx={{
                  background: "#fff",
                  borderRadius: 1,
                  input: { color: "#222" },
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography sx={{ color: "#fff", fontWeight: 500, mb: 1 }}>Message</Typography>
              <TextField
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                fullWidth
                multiline
                minRows={4}
                variant="outlined"
                sx={{
                  background: "#fff",
                  borderRadius: 1,
                  textarea: { color: "#222" },
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                background: "#fff",
                color: "#0A4FA4",
                fontWeight: 600,
                borderRadius: 999,
                px: 5,
                py: 1,
                boxShadow: "none",
                textTransform: 'none',
                '&:hover': { background: "#eaf2fb" }
              }}
            >
              Send
            </Button>
          </Box>
      </Box>
    </Box>
  );
};

export default Contact; 