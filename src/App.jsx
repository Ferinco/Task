import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { initializeAuth } from "./redux/authSlice";

//lazy lode components for code splitting
const Login = lazy(() => import("./pages/login"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const Dashboard = lazy(() => import("./pages/dashboard"));

export default function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated === false ? (
                <Login />
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
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
