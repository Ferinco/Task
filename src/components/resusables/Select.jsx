export const SelectField = ()=> {
    return(
        <div className="p-3 justify-center items-center w-52 xs:w-fit rounded-lg h-10 bg-[#fafbff] flex  flex-nowrap gap-2">
        <label for="" className="font-normal text-xs text-[#7e7e7e] text-nowrap">Sort by :</label>
        <select name="sorts" className="bg-transparent custom-select text-xs font-semibold text-[#3d3c42] outline-none">
          <option value="newest" selected className="">Newest</option>
        </select>
        </div>
    )
}
