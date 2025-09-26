import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-20 rounded-b-4xl min-h-dvh w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex overflow-hidden -z-10">
        <div className="w-full h-full md:w-1/2 bg-secondary" />
        <div className="relative w-1/2 md:block hidden">
          <Image
            src="/bg-waves-conecta-lp.webp"
            alt="Imagem de fundo com ondas"
            width={1400}
            height={1400}
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-primary/20 to-primary/40" />
        </div>
      </div>

      {/* Mobile Decorative Elements */}
      <div className="md:hidden absolute inset-0 -z-5 overflow-hidden">
        {/* Top right decorative circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-primary/5" />

        {/* Middle left decorative shape */}
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent" />

        {/* Bottom decorative waves */}
        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-20"
          >
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#gradient-wave)"
            />
            <defs>
              <linearGradient id="gradient-wave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#316DDB" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0b3b7a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating dots pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0b3b7a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container min-h-screen relative flex flex-col items-center justify-center px-4 md:px-6">
        {/* Main Title */}
        <h1 className="font-unbounded flex w-full flex-col gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="flex items-start justify-start text-neutral">
            Faça parte da
          </span>
          <span className="inline-flex items-center justify-center text-secondary rounded-xl bg-gradient-to-r from-[#316DDB] to-primary p-4">
            Conexão Azul
          </span>
          <span className="flex items-end justify-end text-neutral">
            E cresça junto
          </span>
        </h1>

        {/* Description Text */}
        <div className="absolute bottom-24 md:bottom-8 left-4 md:left-0 z-10 max-w-[90%] md:max-w-md">
          <p
            className="text-sm md:text-base text-justify relative indent-10 
                       before:content-[''] before:absolute before:left-0 before:top-3
                       before:w-8 before:h-[2px] before:bg-primary"
          >
            A inovação move o mundo, e
            <span className="font-semibold"> nós movemos a sua marca.</span>{" "}
            Unimos
            <span className="font-semibold">
              {" "}
              estratégia, criatividade e tecnologia
            </span>{" "}
            para transformar ideias em resultados reais. Do primeiro passo ao
            topo, estamos aqui para
            <span className="font-semibold">
              {" "}
              impulsionar seu crescimento e marcar presença
            </span>{" "}
            onde realmente importa.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-neutral p-2 rounded-full shadow-lg animate-bounce">
            <ChevronDown
              className="text-secondary w-8 h-8 md:w-12 md:h-12"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
