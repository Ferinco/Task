import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { initializeAuth } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function DashboardLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);
  const user = useSelector((state) => state.auth.user);
  const { miniMenu } = useSelector((state) => state.app);

  return (
    <div className={`flex bg-[#fafbff] ${miniMenu ? "sm:ml-0": "sm:ml-[9px]"}`}>
      <Sidebar />
      <div className={`w-full px-5 py-5 ml-auto left-0 h-fit sm:min-h-screen transition-all duration-200 ${miniMenu ? "xl:w-[calc(100vw-100px)] sm:px-20": "xl:w-[calc(100vw-306px)] sm:px-10"}`}>
        <TopBar user={user} />
        <Outlet />
      </div>
    </div>
  );
}
