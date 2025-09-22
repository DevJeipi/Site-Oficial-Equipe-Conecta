import React from "react";
import { MessageCircle } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="relative border font-dm-sans hover:border-secondary duration-500 group cursor-pointer text-sky-50 overflow-hidden rounded-md bg-[#252525] md:py-3 md:px-8 p-3 flex justify-center items-center font-bold">
      <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#0B0B0B] delay-150 group-hover:delay-75" />
      <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#0F0F0F] delay-150 group-hover:delay-100" />
      <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#202020] delay-150 group-hover:delay-150" />
      <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#252525] delay-150 group-hover:delay-200" />
      <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-neutral delay-150 group-hover:delay-300" />
      <p className="z-10 hidden md:block">{children}</p>
      <MessageCircle className="z-10 md:hidden w-6 h-6" />
    </button>
  );
};

export default Button;
