import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/userflow/Shared/Layout";
import Home from "../components/userflow/Home/Home";

import Login from "../components/admin/auth/login";
import ForgotPassword from "../components/admin/auth/forgotpassword";
import OTP from "../components/admin/auth/otp";
import ChangePassword from "../components/admin/auth/changepassword";

import DashboardLayout from "../components/admin/dashboard/dashboardlayout";
import Dashboard from "../components/admin/dashboard/admindashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
      </Route>

      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/forgotpassword" element={<ForgotPassword />} />
      <Route path="/admin/otp" element={<OTP />} />
      <Route path="/admin/changepassword" element={<ChangePassword />} />

      <Route path="/admin" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
