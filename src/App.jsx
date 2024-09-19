import { useEffect, useState } from "react";
import LoginPage from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard";
import { initializeAuth } from "./redux/authSlice";

export default function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated === false ? (
              <LoginPage />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        {isAuthenticated && (
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<Dashboard />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}
