import { useDispatch, useSelector } from "react-redux";
import { SearchInput } from "./resusables/Input";
import { toggleMenu } from "../redux/appSlice";

export default function TopBar(props) {
  const dispatch = useDispatch();

  // handle sidebar display
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  const {isMenuOpen, miniMenu} = useSelector((state) => state.app);

  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-0 h-auto items-end justify-between w-full px-5 py-5 -mt-5 z-30 fixed bg-[#fafbff] -ml-5 ${miniMenu ? "xl:w-[calc(100vw-100px)] sm:px-20 -ml-5 sm:-ml-20": "xl:w-[calc(100vw-306px)] sm:px-10 sm:-ml-10"}` }>
      <h4 className="text-black text-2xl font-medium mr-auto sm:mr-0">
        Hello {props?.user?.firstName} 👋🏼,
      </h4>
      <SearchInput
        size="placeholder:text-sm"
        styles="bg-white sm:ml-auto mr-auto sm:mr-0"
      />
      <div className="absolute sm:relative sm:ml-10 justify-end flex lg:hidden">
        <div
          className={`menu-toggle ${
            isMenuOpen
              ? "after:-rotate-45 before:rotate-45 after:w-full after:mt-0"
              : "rotate-0 after:w-[70%] after:mt-2"
          }`}
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}
