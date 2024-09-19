export const FormInput = (props) => {
  return (
    <div className="w-full flex flex-col h-[84.82px] justify-between text-custom-grey text-base">
      <label htmlFor={props.name} className="text-shadow-custom">
        {props.label}
      </label>
      <div className="w-full h-[50.49px] bg-[#EEEE] flex flex-row justify-between pl-7 rounded-lg shadow-custom">
        <input
          placeholder={props.placeholder}
          className="bg-transparent outline-none placeholder:text-custom-grey placeholder:text-sm"
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
