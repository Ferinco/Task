import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import DashboardTopBar from "../components/TopBar";
import { useSelector } from "react-redux";

export default function DashboardLayout(){
  const user = useSelector((state)=> state.auth.user)
console.log(user)
// bg-[#fafbff]
    return (
        <div className="flex ml-[9px] bg-black">
          <Sidebar user={user}/>
          <div className="lg:w-[calc(100vw-306px)] px-10 py-5 mx-auto">
            <Outlet/>
          </div>
        </div>
      );
}