import {
  Camera,
  Castle,
  ChartLine,
  CodeXml,
  SwatchBook,
  Laptop,
  Layers,
  Pencil,
  Rocket,
  ShoppingBag,
  Target,
  Wrench,
} from "lucide-react";
import Button from "@/components/ui/cta";

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
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Castle size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Marketing de Performance
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Maximizamos seu investimento com estratégias ágeis e otimizadas
              para gerar resultados reais.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
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
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Rocket
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
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
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
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
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Layers size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Visual & Engajamento
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Transmitimos sua essência com criatividade e estratégia, elevando
              a percepção da sua marca.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
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
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
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
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <SwatchBook
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Criação de Identidade Visual
                </h3>
                <p>
                  Desenvolvemos logotipos, paletas de cores, elementos visuais,
                  apresentações, tipografia, conceito, tudo para fortalecer sua
                  marca.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 3 Sites */}
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <CodeXml size={48} />
            <h2 className="text-4xl font-unbounded font-bold">
              Web Inteligente
            </h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Desenvolvemos soluções tecnológicas estratégicas, focados em
              performance, usabilidade e conversão.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
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
                  Desenvolvemos de landing pages e sites institucionais
                  totalmente modernos , responsivos e otimizados para seu
                  objetivo.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <ShoppingBag
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Criação de E-commerce
                </h3>
                <p>
                  Criamos lojas virtuais otimizadas para proporcionar a melhor
                  experiência de compra e maximizar suas vendas online.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] p-9 rounded-2xl">
              <Wrench
                className="flex-shrink-0"
                size={48}
                color="var(--color-primary)"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary">
                  Automações e CRMs
                </h3>
                <p>
                  Implementamos soluções de automação e CRM para otimizar seus
                  processos e melhorar o relacionamento com seus clientes.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
