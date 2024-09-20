export default function Sidebar(props) {
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
  return (
    <div className="2xl:w-[306px] bg-white h-screen p-5">
      <div className="w-[250px] h-full flex flex-col gap-10">
        <div className="flex items-center gap-1 justify-center">
          <img
            className="w-[36px] aspect-square"
            src="/images/settings-icon.png"
          />
          <h3 className="text-black font-semibold text-[26px]">Dashboard</h3>
          <span className="text-[#838383] font-medium text-[10px] -mb-2">
            v.01
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-row w-full justify-between items-center p-3 rounded-lg ${
                index === 0
                  ? "bg-[#5932ea] text-white"
                  : "text-[#9197b3] bg-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                <img src={tab.icon} className="w-6 aspect-square" />
                <p className="font-medium text-sm">{tab.name}</p>
              </div>
              <img
                src={
                  index === 0
                    ? "/images/white-arrow.png"
                    : "/images/grey-arrow.png"
                }
              />
            </div>
          ))}
        </div>

        <div className="CAT-card p-6 flex flex-col justify-center gap-5 items-center text-center bg-gradient-to-r from-[#EAABF0] to-[#4623E9] rounded-[20px] mt-auto">
          <p className="text-sm font-semibold text-white">
            Upgrade to PRO to get access to all feautures!
          </p>
          <button className="w-full h-10 rounded-full bg-white text-sm font-semibold text-[#4623E9]">
            Get Pro Now!
          </button>
        </div>
        <div className="flex w-full items-center gap-3">
          <div className="image-div w-10 aspect-square rounded-full">
            <img src={props?.user?.image}/>
          </div>
          <div>
            <h6 className="text-black font-medium text-sm">{props?.user?.firstName}</h6>
            <p className="font-normal text-[#757575] text-xs">
             {props?.user?.company?.title}
            </p>
          </div>
          <img className="ml-auto" src="/images/arrow-down.png" />
        </div>
      </div>
    </div>
  );
}
