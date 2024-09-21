import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initializeAuth } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import Sidebar from "../components/sidebar";

export default function DashboardLayout() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  return (
    <div className="flex sm:ml-[9px] bg-[#fafbff]">
      <Sidebar/>
      <div className="w-full sm:w-[calc(100vw-100px)] xl:w-[calc(100vw-306px)] px-5 sm:px-10 py-5 ml-auto left-0 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
