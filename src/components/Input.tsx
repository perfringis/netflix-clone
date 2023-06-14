const Input = () => {
  return (
    <div className="relative">
      <input
        id="email"
        className="
        rounded
        px-6
        pt-6
        pb-1
        w-full
        text-base
        text-white
        bg-mine-shaft
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        placeholder=" "
      />
      <label
        className="
        absolute
        text-base
      text-gray
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
        htmlFor="email"
      >
        Email or phone number
      </label>
    </div>
  );
};

export default Input;
