import { useSelector } from "react-redux";
import { SearchInput } from "./Input";

export default function TopBar(props) {


  return (
    <div className="flex h-10 items-end justify-between w-full">
      <h4 className="text-white text-2xl font-medium">Hello {props?.user?.firstName} 👋🏼,</h4>
     <SearchInput/>
    </div>
  );
}
