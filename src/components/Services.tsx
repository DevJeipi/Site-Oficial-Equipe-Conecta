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
    <section className="relative w-full bg-secondary dark:bg-neutral rounded-4xl z-20">
      <div
        id="services"
        className="container py-20 gap-10 flex flex-col items-center justify-center overflow-hidden"
      >
        {/*Título*/}
        <div className="font-unbounded flex flex-col items-start justify-start gap-2 w-full">
          <h1
            className="indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                       before:w-8 before:h-[2px] before:bg-primary dark:before:bg-secondary"
          >
            Nossos Serviços
          </h1>
          <h2 className="text-4xl font-bold">Encontre o que você precisa</h2>
        </div>
        {/* Serviço 1 Narrativa */}
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Castle size={48} />
            <h2 className="text-4xl font-unbounded font-bold">Narrativa</h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Construímos uma base estratégica para orientar sua presença e
              fortalecer sua mensagem.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <ChartLine
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Diagnóstico Macro
                </h3>
                <p>
                  Analisamos o cenário do negócio para identificar oportunidades
                  e direcionar os próximos passos.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Rocket
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Planejamento Estratégico
                </h3>
                <p>
                  Estruturamos ações e prioridades para guiar a execução com
                  clareza e consistência.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Target
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Posicionamento de Marca
                </h3>
                <p>
                  Definimos como sua marca deve se apresentar para gerar
                  percepção, valor e conexão.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 2 Audiovisual */}
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <Layers size={48} />
            <h2 className="text-4xl font-unbounded font-bold">Audiovisual</h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Produzimos conteúdos que ampliam presença, reforçam imagem e criam
              proximidade com o público.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Camera
                size={48}
                className="flex-shrink-0 text-primary dark:text-secondary"
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Produção de Vídeo
                </h3>
                <p>
                  Criamos vídeos com narrativa, ritmo e propósito para destacar
                  sua marca.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA]  dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Pencil
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary  dark:text-secondary">
                  Fotografia
                </h3>
                <p>
                  Registramos imagens que reforçam posicionamento e elevam a
                  percepção da sua marca.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <SwatchBook
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Identidade Visual
                </h3>
                <p>
                  Construímos uma linguagem visual consistente para fortalecer
                  sua marca em todos os pontos de contato.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 3 Resultado */}
        <div className="flex flex-col lg:flex-row w-full gap-7">
          <div className="flex w-full lg:w-2/5 flex-col text-center gap-4 items-center justify-center text-secondary bg-primary rounded-2xl py-22 px-20">
            <ChartLine size={48} />
            <h2 className="text-4xl font-unbounded font-bold">Resultado</h2>
            <div className="w-2/3 h-0.25 bg-secondary"></div>
            <p>
              Ativamos a operação com foco em performance, acompanhamento e
              crescimento comercial.
            </p>
            <Button variant="text" action="whatsapp">
              Converse conosco
            </Button>
          </div>
          <ul className="flex flex-col gap-6 w-full lg:w-3/5">
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <ChartLine
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Gestão de Tráfego Pago
                </h3>
                <p>
                  Criamos campanhas estratégicas para alcançar o público certo e
                  maximizar conversões.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Rocket
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Acompanhamento de Vendas
                </h3>
                <p>
                  Monitoramos o funil comercial para alinhar ações e melhorar a
                  conversão.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Target
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Relatórios de Performance
                </h3>
                <p>
                  Entregamos análises claras para acompanhar resultados e
                  orientar decisões.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* Serviço 4 Sites */}
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
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Laptop
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary dark:text-secondary">
                  Desenvolvimento de Sites
                </h3>
                <p>
                  Desenvolvemos de landing pages e sites institucionais
                  totalmente modernos , responsivos e otimizados para seu
                  objetivo.
                </p>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <ShoppingBag
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary   dark:text-secondary">
                  Criação de E-commerce
                </h3>
                <p>
                  Criamos lojas virtuais otimizadas para proporcionar a melhor
                  experiência de compra e maximizar suas vendas online.
                </p>
              </div>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-6 bg-[#DDE1EA] dark:border-1 dark:border-secondary dark:bg-transparent p-9 rounded-2xl">
              <Wrench
                className="flex-shrink-0 text-primary dark:text-secondary"
                size={48}
              />
              <div>
                <h3 className="text-2xl font-unbounded font-bold text-primary  dark:text-secondary">
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
