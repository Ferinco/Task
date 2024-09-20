import { useSelector } from "react-redux";
import TopBar from "../components/TopBar";
import Catalog from "../components/catalog";
import ListBox from "../components/List";

export default function Dashboard() {
    const user = useSelector((state)=> state.auth.user)
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <TopBar user={user}/>
      <Catalog/>
      <ListBox/>
    </div>
  );
}
