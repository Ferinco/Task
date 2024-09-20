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
    <div className="border border-white bg-white h-32 w-full rounded-3xl flex justify-between items-center px-9">
      {data.map((datum, index) => (
        <div className="flex gap-2 items-center" key={index}>
          <div className="icon-div h-16 aspect-square bg-gradient-to-b from-[#d3ffe7] to-[#effff6] rounded-full flex justify-center items-center">
            <img src={datum.icon}/>
          </div>
          <div className="flex flex-col leading-8">
            <p className="text-sm font-normal text-[#acacac] capitalize">{datum.title}</p>
            <h3 className="font-semibold text-[32px] text-[#333333]">{datum.figure}</h3>
            <span className="text-xs text-[#292d32]">this month</span>
          </div>
        </div>
      ))}
    </div>
  );
}
