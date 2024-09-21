import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useState } from "react";
import { Loader } from "../components/Loader";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector((state) => state.auth);

  // function that dispatches the login action
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(
        loginUser({
          username,
          password,
        })
      );
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="h-full hidden md:block md:col-span-7 lg:col-span-8 bg-[url('/images/left-banner.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full w-full"></div>
      </div>
      <div className="h-full col-span-12  md:col-span-5 lg:col-span-4 px-7 sm:px-16 md:px-7 flex flex-col justify-center gap-7">
        <p className="text-custom-grey font-semibold text-base text-center text-shadow-custom">
          Login into your account
        </p>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6 mt-8">
            <FormInput
              placeholder="emilys"
              name="email"
              label="Username:"
              icon="/images/mail-icon.png"
              onChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
              placeholder="Enter your password"
              name="password"
              type="password"
              label="Password:"
              icon="/images/password-icon.png"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              className="text-custom-blue underline text-sm font-normal flex self-end -mt-2"
              href="/"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex flex-col mt-7">
            <Button
              deep
              title={isLoading ? <Loader/> : "Login now"}
              full
              type="submit"
              disabled={isLoading}
            />
            <div className="flex flex-col relative items-center my-8">
              <div className="w-full line border-t border-black/25 shadow-custom"></div>
              <p className="text-black/25 font-light text-sm text-shadow-custom w-fit px-4 absolute -mt-[9px] bg-white">
                OR
              </p>
            </div>
            <Button title="Signup now" full type="button" />
          </div>
        </form>
      </div>
    </div>
  );
}
