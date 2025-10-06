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
      className="opacity-80"
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
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary via-[#195aa8] to-[#072842] w-full min-h-[160px] -mt-16 -mb-16 z-0">
      {/* Background wave decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/wave-bg.svg')] bg-no-repeat bg-cover opacity-10" />
      </div>

      <div className="relative w-full py-20">
        <div className="flex items-center py-6 gap-12 font-unbounded text-4xl font-bold text-secondary/90 animate-infinite-scroll">
          <div className="flex items-center gap-12 animate-scroll-content">
            {createScrollContent()}
          </div>
          <div className="flex items-center gap-12 animate-scroll-content">
            {createScrollContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
