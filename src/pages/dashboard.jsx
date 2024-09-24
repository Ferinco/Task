import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import Catalog from "../components/catalog";
import ListBox from "../components/List";

export default function Dashboard() {
  return (
    <div className="w-full h-full flex flex-col gap-8 mt-32 sm:mt-16">
      <Catalog/>
      <ListBox/>
    </div>
  );
}
