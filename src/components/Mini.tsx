"use client";
import Image from "next/image";

export default function AnimatedMini() {
  const words = [
    "CREDIBILIDADE",
    "INOVAÇÃO",
    "QUALIDADE",
    "EFICIÊNCIA",
    "CONEXÃO",
  ];

  const Logo = (
    <Image
      src={"/symbol-conecta-wtbg-white-transformed.webp"}
      alt="Logo Equipe Conecta"
      width={52}
      height={25}
    />
  );

  const createScrollContent = () => {
    const content: React.ReactNode[] = [];
    words.forEach((word) => {
      content.push(
        <div key={word} className="item whitespace-nowrap">
          {word}
        </div>,
        <div key={`${word}-logo`} className="logo flex-shrink-0">
          {Logo}
        </div>
      );
    });
    return content;
  };

  return (
    <section className="flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-[#195aa8] to-[#072842] w-full">
      <div className="relative w-full">
        <div className="flex items-center py-6 gap-8 font-unbounded text-2xl font-bold text-secondary animate-infinite-scroll">
          <div className="flex items-center gap-8 animate-scroll-content">
            {createScrollContent()}
          </div>
          <div className="flex items-center gap-8 animate-scroll-content">
            {createScrollContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
