export default function Catalog() {
  const data = [
    {
      title: "total users",
      figure: "5,423",
      icon: "/images/users-icon.png",
      increase: true,
    },
    {
      title: "members",
      figure: "1893",
      icon: "/images/member-icon.png",
      increase: false,
    },
    {
      title: "active now",
      figure: "189",
      icon: "/images/monitor-icon.png",
      increase: null,
    },
  ];
  return (
    <div className="border border-white bg-white h-auto w-full rounded-3xl grid sm:grid-cols-3 gap-7 sm:gap-0 items-center p-4 sm:p-6 md:p-9 shadow-[0_10px_60px_rgba(226,236,249,0.5)]">
      {data.map((datum, index) => (
        <div
          className={`flex sm:flex-col lg:flex-row gap-5 items-center lg:items-start justify-start justify-self-start lg:justify-self-auto ${
            index === 1
              ? "justify-center border-t border-b sm:border-t-0 sm:border-b-0 py-5 sm:py-0 w-full lg:border-r lg:border-l sm:justify-self-center lg:justify-self-auto"
              : index === 2
              ? "justify-center sm:justify-self-end lg:justify-self-auto"
              : ""
          }`}
          key={index}
        >
          <div className="icon-div h-20 aspect-square bg-gradient-to-b from-[#d3ffe7] to-[#effff6] rounded-full flex justify-center items-center">
            <img src={datum.icon} className="w-3/6 h-3/6 object-contain object-center"/>
          </div>
          <div className="flex flex-col items-start sm:items-center lg:items-start leading-8 mr-auto sm:mr-0">
            <p className="text-sm font-normal text-[#acacac] capitalize">
              {datum.title}
            </p>
            <h3 className="font-semibold text-3xl lg:text-[32px] text-[#333333]">
              {datum.figure}
            </h3>
            {datum.increase === true ? (
              <div className="text-xs text-[#292d32] flex items-center xxs:absolute sm:relative right-0  pr-10 sm:pr-0 xxs:mt-8 sm:mt-0"><img src="/images/green-arrow.png"/><span className="font-bold text-xs text-[#00ac4f] mr-1 ml-1">16%</span> this month</div>
            ) : datum.increase === false ? (
              <div className="text-xs text-[#292d32] flex items-center xxs:absolute sm:relative right-0  pr-10 sm:pr-0 xxs:mt-8 sm:mt-0"><img src="/images/red-arrow.png"/><span className="font-bold text-xs text-[#d0004b] mr-1 ml-1">1%</span> this month</div>
            ) : (
              <div className="flex xxs:absolute sm:relative right-0  pr-10 sm:pr-0  xxs:mt-8 sm:mt-0">
                {
                    [...Array(5)].map((active, index)=> (
                       <img src={`images/active-${index+1}.png`} key={index} className={index != 0 && "-ml-2"}/> 
                    ))
                }
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
