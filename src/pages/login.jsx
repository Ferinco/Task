import { Button } from "../components/Button";
import { FormInput } from "../components/Input";

export default function LoginPage() {
  return (
    <div className="grid grid-cols-12 h-screen w-screen">
      <div className="h-full col-span-8 bg-[url('/images/left-banner.png')] bg-cover bg-center bg-no-repeat">
      <div className="h-full w-full">
      </div>
      </div>
      <div className="h-full col-span-4 px-7 flex flex-col justify-center">
        <p className="text-custom-grey font-semibold text-base text-center text-shadow-custom">
          Login into your account
        </p>
        <FormInput placeholder="info@pearmonie.test" name="email" type="email" label="Email Id:" icon="/images/mail-icon.png"/>
        <FormInput placeholder="Enter your password" name="password" type="password" label="Password" icon="/images/password-icon.png"/>
        <Button deep title="Login now" full/>
      </div>
    </div>
  );
}
