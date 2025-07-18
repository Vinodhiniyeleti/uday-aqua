import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import LockIcon from '@mui/icons-material/Lock';
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

import bgimg from '../../../assets/admin/Group 39739.png';
import logo from '../../../assets/admin/logo.png';

import '../styles/loginstyle.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const validateAndLogin = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Enter a valid email');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      navigate('/admin/dashboard');
    }
  };

  return (
    <Box className="login-root">
      {/* LEFT HALF */}
      <Box
        className="login-left"
        style={{ backgroundImage: `url(${bgimg})` }}
      />

      {/* RIGHT HALF */}
      <Box className="login-right">
        <Box className="login-form">
          {/* Logo */}
          <Box component="img" src={logo} alt="Logo" className="login-logo" />

          {/* Login Text */}
          <Typography variant="h5" fontWeight="bold" color="black">
            Log In to Your Account!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Welcome back! please enter your detail
          </Typography>

          {/* Email Field */}
          <TextField
            fullWidth
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              if (!email) setEmailError('Email is required');
              else if (!/\S+@\S+\.\S+/.test(email)) setEmailError('Enter a valid email');
              else setEmailError('');
            }}
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

          {/* Password Field */}
          <TextField
            fullWidth
            placeholder="Password"
            type={showPassword ? 'text' : 'password'} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              if (!password) setPasswordError('Password is required');
              else setPasswordError('');
            }}
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
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(!showPassword)} 
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Forgot Password */}
          <Box className="forgot-password-link">
            <Link
              component={RouterLink}
              to="/admin/auth/forgotpassword"
              underline="hover"
              fontSize="14px"
            >
              Forgot Password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            className="login-button"
            onClick={validateAndLogin}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
