import {
  Camera,
  Castle,
  ChartLine,
  CodeXml,
  Hash,
  Laptop,
  Layers,
  Pencil,
  Rocket,
  Send,
  Target,
  Wrench,
} from "lucide-react";
import Button from "@/components/ui/cta";
import { section } from "framer-motion/client";

export default function Services() {
  return (
    <section className="relative w-full bg-secondary rounded-4xl z-20">
      <div
        id="services"
        className="container py-20 gap-10 flex flex-col items-center justify-center overflow-hidden"
      >
        {/*Título*/}
        <div className="font-unbounded flex flex-col items-start justify-start gap-2 w-full">
          <h1
            className="indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                       before:w-8 before:h-[2px] before:bg-primary"
          >
            Nossos Serviços
          </h1>
          <h2 className="text-4xl font-bold">Encontre o que você precisa</h2>
        </div>
        {/* Serviço 1 Tráfego Pago */}
        <div className="flex flex-col md:flex-row w-full gap-7">
          <div className="flex w-full md:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Castle size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Marketing de Performance
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Maximizamos seu investimento com estratégias ágeis e otimizadas
              para gerar resultados reais.
            </p>
            <Button>Converse conosco</Button>
          </div>
          <ul className="flex flex-col gap-6 w-full md:w-3/5">
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <ChartLine
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Gestão de Tráfego Pago
                </h3>
                <p>
                  Criamos campanhas estratégicas no Google Ads, Meta Ads e
                  outras redes para alcançar o público certo e maximizar
                  conversões.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Rocket
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
                fill="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Growth Hacking
                </h3>
                <p>
                  Aplicamos estratégias eficientes e testes rápidos para
                  impulsionar o crescimento do seu negócio.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Target
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Posicionamento Estratégico
                </h3>
                <p>
                  Definimos a melhor forma de apresentar sua marca no mercado
                  para atrair e conectar o público certo.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 2 Design */}
        <div className="flex flex-col md:flex-row w-full gap-7">
          <div className="flex w-full md:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Layers size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Visual & Engajamento
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Transmitimos sua essência com criatividade e estratégia, elevando
              a percepção da sua marca.
            </p>
            <Button>Converse conosco</Button>
          </div>
          <ul className="flex flex-col gap-6 w-full md:w-3/5">
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Camera size={48} color="var(--color-primary)" />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Captações Visuais
                </h3>
                <p>
                  Captamos e editamos conteúdos visuais profissionais para
                  fortalecer sua presença digital.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Pencil
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Criativos para Anúncios
                </h3>
                <p>
                  Produzimos imagens e vídeos estratégicos para aumentar o
                  impacto das suas campanhas.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Hash
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Social Media
                </h3>
                <p>
                  Criamos conteúdos e gerenciamos suas redes para fortalecer sua
                  marca e gerar resultados.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 3 Sites */}
        <div className="flex flex-col md:flex-row w-full gap-7">
          <div className="flex w-full md:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <CodeXml size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Web Inteligente
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Desenvolvemos sites estratégicos, focados em performance,
              usabilidade e conversão.
            </p>
            <Button>Converse conosco</Button>
          </div>
          <ul className="flex flex-col gap-6 w-full md:w-3/5">
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Laptop
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Desenvolvimento de Sites
                </h3>
                <p>
                  Desenvolvemos sites modernos, responsivos e otimizados para
                  conversão.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Send
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
                fill="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Otimização e SEO
                </h3>
                <p>
                  Melhoramos a velocidade, usabilidade e visibilidade do seu
                  site nos buscadores.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Wrench
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
                fill="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Manutenção & Suporte
                </h3>
                <p>
                  Garantimos o bom funcionamento do seu site com atualizações,
                  otimizações e suporte técnico contínuo.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
