import { useSelector } from "react-redux";
import { SearchInput } from "./Input";
import { useState } from "react";

export default function TopBar(props) {
const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 h-auto items-end justify-between w-full">
      <h4 className="text-black text-2xl font-medium mr-auto sm:mr-0">Hello {props?.user?.firstName} 👋🏼,</h4>
     <SearchInput size="placeholder:text-sm" styles="bg-white sm:ml-auto mr-auto sm:mr-0"/>
     <div className="justify-end flex">
          <div
            className={`menu-toggle ${
              openNavbar
                ? "after:-rotate-45 before:rotate-45 after:w-full after:mt-0"
                : "rotate-0 after:w-[70%] after:mt-2"
            }`}
            onClick={() =>
              openNavbar ? setOpenNavbar(false) : setOpenNavbar(true)
            }
          />
        </div>
    </div>
  );
}
