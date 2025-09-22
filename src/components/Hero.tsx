import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Imagem de fundo meio a meio */}
      <div className="absolute inset-0 flex overflow-hidden -z-10">
        <div className="w-1/2 bg-secondary"></div>
        <div className="w-1/2 relative">
          <Image
            src="/bg-waves-conecta-lp.webp"
            alt="Imagem de fundo com ondas"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
      </div>
      <div className="container min-h-screen relative flex flex-col items-center justify-center text-center">
        {/* Título centralizado */}
        <h1 className="font-unbounded z-[1000] flex w-full flex-col text-7xl font-bold">
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
        {/* Frase no canto inferior esquerdo */}
        <div className="absolute bottom-8 left-0 z-10">
          <p
            className="max-w-md text-justify relative indent-10
                       before:content-[''] before:absolute before:left-0 before:top-3
                       before:w-8 before:h-[2px] before:bg-primary"
          >
            A inovação move o mundo, e<b> nós movemos a sua marca.</b> Unimos
            <b> estratégia, criatividade e tecnologia</b> para transformar
            ideias em resultados reais. Do primeiro passo ao topo, estamos aqui
            para
            <b> impulsionar seu crescimento e marcar presença</b> onde realmente
            importa.
          </p>
        </div>
        {/* Seta */}
        <div className="absolute bottom-8 z-10 bg-neutral p-2 animate-bounce rounded-full">
          <ChevronDown color="var(--color-secondary)" size={48} />
        </div>
      </div>
    </section>
  );
}
