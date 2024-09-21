import { Loader } from "../components/Loader";

export default function Preloader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
}
