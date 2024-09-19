export const Button = (props)=> {
    return(
        <button className={`px-5 py-2 rounded-lg border h-[50.49px] text-base font-semibold shadow-custom ${props.deep ? "bg-custom-blue text-white border-custom-blue" : "bg-transparent text-custom-blue border-custom-blue"} ${props.full ? "w-full" : "w-fit" }`}>{props.title}</button>
    )
}