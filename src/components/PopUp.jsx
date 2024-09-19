export default function PopUp(props) {
  return (
    <div className={`flex absolute w-screen h-screen top-0 p-3 transition-all duration-300 ${props.message ? "opacity-100 -mt-0 transition-all duration-300" : "opacity-0 -mt-20 ransition-all duration-300"}`}>
      <div className={`message-div maxw-[300px] h-[70px] rounded-lg border bg-white mx-auto p-3 flex justify-center items-center text-sm text-red-500`}>
        {props.message}
      </div>
    </div>
  );
}
