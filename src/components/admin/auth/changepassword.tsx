import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';
import '../styles/loginstyle.css';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleValidation = () => {
    let valid = true;
    setPasswordError('');
    setConfirmError('');

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (!confirmPassword) {
      setConfirmError('Please confirm your password');
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmError('Passwords do not match');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      navigate('/admin/login');
    }
  };

  return (
    <Box className="login-root">
      <Box className="login-left" style={{ backgroundImage: `url(${bgimg})` }} />

      <Box className="login-right">
        <Box className="login-form">
          <Box component="img" src={logo} alt="Logo" className="login-logo" />

          <Typography variant="h5" fontWeight="bold" color="black">
            Set new password
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Enter a new password for your account
          </Typography>

          <TextField
            fullWidth
            placeholder="New Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleValidation}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

        
          <TextField
            fullWidth
            placeholder="Confirm New Password"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleValidation}
            error={!!confirmError}
            helperText={confirmError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Box className="forgot-password-link">
            <Link
              component={RouterLink}
              to="/admin/forgotpassword"
              underline="hover"
              fontSize="14px"
            >
              Forgot Password?
            </Link>
          </Box>

          <Button
            variant="contained"
            fullWidth
            className="login-button"
            onClick={handleSubmit}
          >
            Reset Password
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
