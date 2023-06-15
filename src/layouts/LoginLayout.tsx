import { FC, ReactElement } from "react";
import Input from "../components/Input";

const LoginLayout: FC<any> = (): ReactElement => {
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
                onChange={() => {}}
                id="email"
                type="email"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;