"use client";
import React from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "icon" | "text";
  className?: string;
  href?: string;
  action?: "whatsapp" | "email" | null;
}

const Button = ({
  children,
  variant = "text",
  className = "",
  href,
  action,
}: ButtonProps) => {
  const isIconOnly = variant === "icon";

  const handleAction = () => {
    if (action === "whatsapp") {
      window.open("https://wa.me/5551986154167", "_blank");
    } else if (action === "email") {
      window.open("mailto:contato@equipeconecta.com.br", "_blank");
    }
  };

  const buttonContent = (
    <>
      {/* Animated circles background */}
      <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#0B0B0B] delay-150 group-hover:delay-75" />
      <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#0F0F0F] delay-150 group-hover:delay-100" />
      <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#202020] delay-150 group-hover:delay-150" />
      <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-[#252525] delay-150 group-hover:delay-200" />
      <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-neutral delay-150 group-hover:delay-300" />

      {/* Content */}
      {isIconOnly ? (
        <>
          <MessageCircle className="z-10 w-6 h-6 md:hidden" />
          <span className="z-10 hidden md:block">{children}</span>
        </>
      ) : (
        <span className="z-10">{children}</span>
      )}
    </>
  );

  const baseClasses = `
    relative border font-dm-sans hover:border-secondary duration-500 
    group cursor-pointer text-sky-50 overflow-hidden rounded-md 
    bg-[#252525] flex justify-center items-center font-bold
    ${isIconOnly ? "p-3 w-12 h-12 md:w-auto md:px-8 md:py-3" : "py-3 px-8"}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={handleAction} className={baseClasses}>
      {buttonContent}
    </button>
  );
};

export default Button;
