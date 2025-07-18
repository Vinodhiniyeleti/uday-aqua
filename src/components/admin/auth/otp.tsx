import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import { useNavigate } from 'react-router-dom';
import '../styles/loginstyle.css';

const OTP = () => {
  const navigate = useNavigate();
  const inputs = Array(4).fill(null).map(() => useRef<HTMLInputElement>(null));

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [otpError, setOtpError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const newOtp = [...otpValues];
    newOtp[index] = value;
    setOtpValues(newOtp);

    if (value.length === 1 && index < 3) {
      inputs[index + 1].current?.focus();
    }

    if (otpError) {
      setOtpError('');
    }
  };

  const handleVerify = () => {
    const isComplete = otpValues.every((digit) => digit.trim() !== '');
    if (!isComplete) {
      setOtpError('Please enter all 4 digits');
      return;
    }

    const otp = otpValues.join('');
    console.log('Verifying OTP:', otp); // You can make API call here
    navigate('/admin/auth/changepassword');
  };

  return (
    <Box className="otp-root">
      {/* LEFT HALF */}
      <Box
        className="otp-left"
        style={{ backgroundImage: `url(${bgimg})` }}
      />

      {/* RIGHT HALF */}
      <Box className="otp-right">
        <Box className="otp-form">
          <Box component="img" src={logo} alt="Logo" className="otp-logo" />

          <Typography variant="h5" fontWeight="bold" color="black">
            Verification
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Please enter the 4-digit verification code sent to your email.
          </Typography>

          {/* OTP Input */}
          <Box className="otp-input-container">
            {inputs.map((ref, index) => (
              <TextField
                key={index}
                inputRef={ref}
                value={otpValues[index]}
                onChange={(e) => handleChange(e, index)}
                inputProps={{
                  maxLength: 1,
                  inputMode: 'numeric',
                  className: 'otp-digit',
                }}
                className="otp-input-box"
                error={!!otpError}
              />
            ))}
          </Box>

          {otpError && (
            <Typography variant="caption" color="error" sx={{ mt: -2 }}>
              {otpError}
            </Typography>
          )}

          <Typography variant="body2" color="text.secondary">
            Didn't receive the code?
          </Typography>

          <Box className="otp-resend-link">
            <Link href="#" underline="hover" fontSize="14px">
              Resend verification code
            </Link>
          </Box>

          <Button
            variant="contained"
            fullWidth
            className="otp-button"
            onClick={handleVerify}
          >
            Verify
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OTP;
