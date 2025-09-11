import clsx from "clsx";

export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}) {
  const baseStyles =
    "cursor-pointer inline-block px-6 py-3 rounded-[13px] font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-black",
    secondary:
      "bg-transparent border border-black text-black hover:bg-black hover:text-white focus:ring-black",
    youtube: "bg-[#FF0000] text-white hover:bg-[#CC0000] focus:ring-[#FF0000]",
    thin: "bg-transparent border border-black text-black hover:bg-black hover:text-white focus:ring-black py-1",
  };

  return (
    <a className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
