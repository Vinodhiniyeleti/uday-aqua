import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';

import '../styles/loginstyle.css';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validation Logic
  const validateEmail = (value: string) => {
    if (!value) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(value)) return 'Enter a valid email';
    return '';
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const validateAndContinue = () => {
    const error = validateEmail(email);
    setEmailError(error);

    if (!error) navigate('/admin/OTP');
  };

  return (
    <Box className="forgot-root">
      {/* LEFT HALF */}
      <Box
        className="forgot-left"
        style={{ backgroundImage: `url(${bgimg})` }}
      />

      {/* RIGHT HALF */}
      <Box className="forgot-right">
        <Box className="forgot-form">
          {/* Logo */}
          <Box component="img" src={logo} alt="Logo" className="forgot-logo" />

          <Typography variant="h5" fontWeight="bold" color="black">
            Forgot Password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter your email address to reset the password
          </Typography>

          {/* Email Field */}
          <TextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Continue Button */}
          <Button
            variant="contained"
            fullWidth
            className="forgot-button"
            onClick={validateAndContinue}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
