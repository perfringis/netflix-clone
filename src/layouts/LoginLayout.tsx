import { ChangeEvent, FC, ReactElement, useState } from "react";
import Input from "../components/Input";

const LoginLayout: FC<any> = (): ReactElement => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        <nav className="px-12 py-6">
          <img src="/images/logo.svg" alt="Logo" className="h-11" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 pb-10 pt-14 px-16 self-center rounded">
            <h2 className="text-white text-32px mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
              <Input
                label="Email or phone number"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                }}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-monza py-3 text-base text-white rounded w-full mt-10">
              Sign In
            </button>

            <div>
              <input
                id="remember"
                type="checkbox"
                className="
                appearance-none
                w-4
                h-4
                bg-[#737373]
                rounded
                border-0
                border-none
                focus:outline-none
                focus:bg-white
                checked:content-['\u2713']
              "
              />
              <label className="text-[#b3b3b3]">Remember me</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
