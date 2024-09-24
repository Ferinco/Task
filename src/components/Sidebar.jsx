import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toggleMini } from "../redux/appSlice";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const { isMenuOpen, miniMenu } = useSelector((state) => state.app);

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
  //toggle menu function
  const handleToggle = () => {
    dispatch(toggleMini());
  };

  return (
    <div
      className={`bg-white h-screen p-5 -ml-0 fixed flex z-50 transition-all duration-150 shadow-[0_10px_60px_rgba(226,236,249,0.5)] ${
        isMenuOpen ? "-ml-0" : "-ml-[400px] lg:-ml-0"
      }
      ${miniMenu ? "w-[100px]": "w-[306px]"}
      `}
    >
      <div className={`w-[250px] h-full flex items-center flex-col gap-10 ${miniMenu ? "w-full" : "w-[250px]"}`}>
        <div className="flex items-center gap-1 justify-center">
          <img
            className="w-[36px] aspect-square"
            src="/images/settings-icon.png"
          />
          <h3 className={`block text-black font-semibold text-[26px] transition-all duration-200 ${miniMenu ? "hidden opacity-0" : "block opacity-100"}`}>
            Dashboard
          </h3>
          <span className={`block text-[#838383] font-medium text-[10px] -mb-2 ${miniMenu ? "hidden" : "block"}`}>
            v.01
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-row w-[250px] items-center rounded-lg transition-all duration-200 ${
                index === 0
                  ? "bg-[#5932ea] text-white"
                  : "text-[#9197b3] bg-transparent"
              } ${miniMenu ? "w-[40px] h-[40px] p-0 justify-center" : "h-auto p-3 w-[250px] justify-between"}`}
            >
              <div className="flex items-center gap-2">
                <img src={tab.icon} className="w-6 h-6" />
                <p className={`font-medium text-sm ${miniMenu ? "hidden" : "block"}`}>
                  {tab.name}
                </p>
              </div>
              <img
                src={
                  index === 0
                    ? "/images/white-arrow.png"
                    : "/images/grey-arrow.png"
                }
                className={miniMenu ? "hidden" : "block"}
              />
            </div>
          ))}
        </div>
        <div
          className={`mini-menu-bar h-7 w-7 bg-black/70 rounded-full flex justify-center items-center ml-auto cursor-pointer shrink-0  ${miniMenu ? "-mr-9" : "-mr-12"}`}
          onClick={handleToggle}
        >
          <img src="/images/white-arrow.png" className={miniMenu ? "rotate-180 transition-all duration-500" : "rotate-0 transition-all duration-500"}/>
        </div>

        <div className={`CAT-card p-6 flex flex-col justify-center gap-5 items-center text-center bg-gradient-to-r from-[#EAABF0] to-[#4623E9] rounded-[20px] mt-auto transition-all duration-200 ${miniMenu ? "opacity-0 w-[40px] h-6" : "opacity-100 flex w-[250px] h-auto"}`}>
          <p className="text-sm font-semibold text-white">
            Upgrade to PRO to get access to all feautures!
          </p>
          <button className="w-full h-10 rounded-full bg-white text-sm font-semibold text-[#4623E9]">
            Get Pro Now!
          </button>
        </div>
        <div className={`w-full ${miniMenu ? "mt-auto" : "mt-0"}`}>
          <div className={`flex w-full items-center gap-3 ${miniMenu ? "flex-col" : "flex-row"}`}>
            <div className="image-div w-10 aspect-square rounded-full">
              <img src={user?.image} />
            </div>
            <div className={`block ${miniMenu ? "hidden" : "block"}`}>
              <h6 className="text-black font-medium text-sm">
                {user?.firstName}
              </h6>
              <p className="font-normal text-[#757575] text-xs">
                {user?.company?.title}
              </p>
            </div>
            <img
              className={`block transition-all duration-150 cursor-pointer z-20 ${
                show && "rotate-180"
              } ${miniMenu ? "ml-0" : "ml-auto"}`}
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
