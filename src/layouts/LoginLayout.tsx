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
            {/* <div className="flex">
              <input
                type="checkbox"
                id="some_id"
                className="
                  relative
                  peer
                  shrink-0
                  appearance-none
                  w-4
                  h-4
                  rounded
                  bg-[#737373]
                  mt-1
                  checked:bg-transparent
                  checked:border-0
                  disabled:border-steel-400
                  disabled:bg-steel-400"
              />
              <label htmlFor="some_id">This is the checkbox label</label>
              <svg
                className="
                  absolute 
                  w-4
                  h-4
                  mt-1
                  hidden 
                  peer-checked:block
                  bg-[#737373]
                  rounded
                  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
