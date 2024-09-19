import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import DashboardTopBar from "../components/DahboardTopBar";

export default function DashboardLayout(){
    return (
        <div className="flex ml-[9px]">
          <Sidebar />
          <div className="flex flex-col lg:w-[calc(100vw-270px)]">
           <DashboardTopBar/>
            <Outlet />
          </div>
        </div>
      );
}