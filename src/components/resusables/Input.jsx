export const FormInput = (props) => {
  return (
    <div className="w-full flex flex-col h-[84.82px] justify-between text-custom-grey text-base ">
      <label htmlFor={props.name} className="">
        {props.label}
      </label>
      <div className="w-full h-[50.49px] bg-[#EEEE] flex flex-row justify-between pl-5 rounded-lg">
        <input
          placeholder={props.placeholder}
          className="bg-transparent outline-none placeholder:text-custom-grey placeholder:text-sm shrink w-2/3 sm:w-auto"
          name={props.name}
          type={props.type}
          onChange={props.onChange}
        />
        <div className="icon-div bg-custom-blue h-full aspect-square flex justify-center items-center rounded-lg">
          <img src={props.icon} alt={props.icon} />
        </div>
      </div>
    </div>
  );
};

export const SearchInput = (props) => {
  return (
    <div className={`flex gap-2 p-3 items-center rounded-lg h-10 shrink-0 w-52 overflow-hidden  ${props.styles}`}>
      <img src="/images/search-icon.png" className="w-6 h-6" />
      <input placeholder="Search" className={`${props.size} placeholder:text-[#b5b7c0] outline-none bg-transparent`}/>
    </div>
  );
};
