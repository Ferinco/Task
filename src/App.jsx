import { useState } from "react";
import LoginPage from "./pages/login";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/dashboard";

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        {
          isAuthenticated && (
            <Route path="/dashboard" element={<DashboardLayout/>}>
<Route path="" element={<Dashboard/>}/>
            </Route>
          )
        }
      </Routes>
      <LoginPage />
    </BrowserRouter>
  );
}
