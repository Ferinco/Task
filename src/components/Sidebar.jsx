import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const {isMenuOpen} = useSelector((state) => state.app);

  //sidebar tabs
  const tabs = [
    {
      icon: "/images/user-icon.png",
      name: "Users",
    },
    {
      icon: "/images/help-icon.png",
      name: "Help",
    },
  ];

  //logout function
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div
      className={`w-[306px] sm:w-24 xl:w-[306px] bg-white h-screen p-5 fixed sm:-ml-0 sm:block z-50 transition-all duration-150 ${
        isMenuOpen ? "-ml-0" : "-ml-[400px]"
      }`}
    >
      <div className="w-[250px] sm:w-full xl:w-[250px] h-full flex items-center flex-col gap-10">
        <div className="flex items-center gap-1 justify-center">
          <img
            className="w-[36px] aspect-square"
            src="/images/settings-icon.png"
          />
          <h3 className="block sm:hidden xl:block text-black font-semibold text-[26px]">
            Dashboard
          </h3>
          <span className="block sm:hidden xl:block text-[#838383] font-medium text-[10px] -mb-2">
            v.01
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-row h-10 xl:h-auto w-[250px] sm:w-10 xl:w-[250px] justify-between sm:justify-center xl:justify-between items-center p-3 sm:p-0 xl:p-3 rounded-lg ${
                index === 0
                  ? "bg-[#5932ea] text-white"
                  : "text-[#9197b3] bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <img src={tab.icon} className="w-6 h-6" />
                <p className="font-medium text-sm hidden xl:block">
                  {tab.name}
                </p>
              </div>
              <img
                src={
                  index === 0
                    ? "/images/white-arrow.png"
                    : "/images/grey-arrow.png"
                }
                className="block sm:hidden xl:block"
              />
            </div>
          ))}
        </div>


        <div className="CAT-card p-6 flex sm:hidden xl:flex flex-col justify-center gap-5 items-center text-center bg-gradient-to-r from-[#EAABF0] to-[#4623E9] rounded-[20px] mt-auto">
          <p className="text-sm font-semibold text-white">
            Upgrade to PRO to get access to all feautures!
          </p>
          <button className="w-full h-10 rounded-full bg-white text-sm font-semibold text-[#4623E9]">
            Get Pro Now!
          </button>
        </div>
        <div className="sm:mt-auto xl:mt-0 w-full">
          <div className="flex w-full items-center gap-3">
            <div className="image-div w-10 aspect-square rounded-full">
              <img src={user?.image} />
              {/* <img src="/images/user-image.png" /> */}
            </div>
            <div className="block sm:hidden xl:block">
              <h6 className="text-black font-medium text-sm">
                {user?.firstName}
              </h6>
              <p className="font-normal text-[#757575] text-xs">
                {user?.company?.title}
              </p>
            </div>
            <img
              className={`ml-auto block sm:hidden xl:block transition-all duration-150 cursor-pointer z-20 ${
                show && "rotate-180"
              }`}
              src="/images/arrow-down.png"
              onClick={() => setShow(!show)}
            />
          </div>
          <div
            className={`text-xs flex justify-center  border border-red-400 p-2 rounded-lg text-red-600 font-semibold transition-all duration-150 cursor-pointer ${
              show ? " opacity-100 mt-4" : "-mt-5 opacity-0"
            }`}
            onClick={handleLogout}
          >
            logout
          </div>
        </div>
      </div>
    </div>
  );
}
