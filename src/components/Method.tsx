"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Method() {
  const steps = [
    {
      step: "Passo 1",
      title: "Análise aprofundada",
      description:
        "Estudamos seu negócio e necessidades para definir a melhor estratégia.",
    },
    {
      step: "Passo 2",
      title: "Planejamento estratégico",
      description:
        "Traçamos um plano eficiente para posicionar sua marca e alcançar seus objetivos.",
    },
    {
      step: "Passo 3",
      title: "Execução do planejado",
      description:
        "Colocamos a estratégia em prática, executando as ações de forma eficaz e dentro do cronograma.",
    },
    {
      step: "Passo 4",
      title: "Monitoramento e análise",
      description:
        "Acompanhamos o desempenho continuamente, ajustando estratégias conforme necessário para otimizar resultados.",
    },
  ];

  return (
    <section className="relative rounded-4xl bg-gradient-to-b from-primary to-[#072842] py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <motion.div
        className="absolute -bottom-15 -left-15"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/symbol-conecta-wtbg-white-transformed.webp"
          alt="Logo Equipe Conecta"
          width={345}
          height={165}
          className="blur-xs rotate-[45deg]"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-10 right-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/symbol-conecta-wtbg-white-transformed.webp"
          alt="Logo Equipe Conecta"
          width={207}
          height={99}
          className="blur-xs rotate-[150deg]"
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-unbounded font-bold text-center text-white mb-16"
        >
          Método 360
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm text-white/90 backdrop-blur-sm">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-unbounded font-bold text-white mt-4 mb-4 text-center">
                  {step.title}
                </h3>

                <div className="w-12 h-0.5 bg-white/20 mx-auto mb-4" />

                <p className="text-white/70 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
