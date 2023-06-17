import { FC, ReactElement } from "react";

const TestInput: FC<any> = ({text}): ReactElement => {
  return (
    <div>
      {/* <input id="remember" type="checkbox" className="appearance-none w-4 h-4 bg-[#737373] rounded focus:bg-white checked:content-['\2713']" />
      <label htmlFor="remember">XDDDDDDDDDDD</label> */}
        <div className="my-1">
    <input
      className="peer"
      hidden
      type="checkbox"
      id={text}
    />
    <label
      htmlFor={text}
      className="relative pl-9 before:absolute before:left-0 before:top-1/2 before:w-4 before:h-4 before:bg-white before:border-red-500 before:border before:border-solid before:rounded-sm before:translate-y-[-50%] before:translate-x-1/2 peer-checked:before:bg-black peer-checked:before:content-['\2713'] before:text-white before:flex before:items-center before:justify-center"
    >
      {text.replace("_", " ")}
    </label>
  </div>
    </div>
  );
};

export default TestInput;
