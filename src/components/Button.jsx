export const Button = (props) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg border h-[50.49px] text-base font-semibold shadow-custom ${
        props.deep
          ? "bg-custom-blue text-white border-custom-blue"
          : "bg-transparent text-custom-blue border-custom-blue"
      } ${props.full ? "w-full" : "w-fit"} ${
        props.disabled
          ? "bg-opacity-50 border-opacity-10 cursor-not-allowed"
          : "bg-opacity-100"
      }`}
      type={props.type}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
};


// reusable button to activate/deactivate
export const StatusButton = (props) => {
  return (
    <button
      className={`text-sm font-medium border rounded-[4px] w-20 h-7 ${
        props.active
          ? "text-[#008767] bg-[#00b087] border-[#008767]"
          : "text-[#df0404] bg-[#ffc5c5] border-[#df0404]"
      }`}
    >
      {props.active ? "Active" : "Inactive"}
    </button>
  );
};


export const PaginatorButton = (props) => {
  return(
  <button className={`rounded-[4px] border w-6 h-6 text-xs font-medium ${props.active ? "bg-[#5932ea] text-white border-[#5932ea]" : "bg-[#f5f5f5] text-[#404b52] border-[#eeeeee]"}`} key={props.key} onClick={props.onClick}>
{props.tag}
  </button>
  )
}
