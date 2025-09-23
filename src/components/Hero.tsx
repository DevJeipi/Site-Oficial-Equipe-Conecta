import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-20 rounded-b-4xl min-h-dvh w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 flex overflow-hidden -z-10">
        <div className="w-full md:w-1/2 bg-secondary" />
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

      <div className="container min-h-screen relative flex flex-col items-center justify-center px-4 md:px-6">
        {/* Main Title */}
        <h1 className="font-unbounded flex w-full flex-col gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="flex items-start justify-start text-neutral">
            Construindo
          </span>
          <span className="inline-flex items-center justify-center text-secondary rounded-xl bg-gradient-to-r from-[#316DDB] to-primary p-4">
            Experiências
          </span>
          <span className="flex items-end justify-end text-neutral">
            Inovadoras
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
