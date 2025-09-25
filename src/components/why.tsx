import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/cta";

export default function Why() {
  const benefits = [
    {
      title: "Marketing 360° Integrado",
      description:
        "Estratégias completas e personalizadas, do planejamento à execução. Unimos tráfego pago, design e desenvolvimento web para maximizar seus resultados.",
    },
    {
      title: "Inovação com Propósito",
      description:
        "Equipe jovem e criativa, comprometida em transformar ideias em resultados mensuráveis. Usamos as últimas tendências e tecnologias a favor do seu negócio.",
    },
    {
      title: "Parceria Verdadeira",
      description:
        "Desenvolvemos soluções únicas para cada cliente. Acompanhamos de perto sua jornada, celebrando conquistas e ajustando estratégias quando necessário.",
    },
  ];

  return (
    <section className="container py-20">
      <div className="flex flex-col max-w-4xl mb-10 gap-2">
        <span
          className="font-unbounded  indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                       before:w-8 before:h-[2px] before:bg-primary"
        >
          Por que nos escolher?
        </span>
        <h2 className="text-3xl md:text-4xl font-unbounded font-bold mb-5">
          Transformamos Presença Digital em Resultados Reais
        </h2>
        <p className="text-gray-600 text-lg">
          Combinamos expertise técnica com criatividade para desenvolver
          estratégias que fazem sua marca se destacar no mundo digital.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="font-unbounded font-bold text-xl">
                {benefit.title}
              </h3>
            </div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="text-lg text-gray-600 mb-4">
          Pronto para impulsionar seu negócio com estratégias que realmente
          funcionam?
        </p>
        <Button variant="text" action="whatsapp">
          Vamos Conversar
        </Button>
      </div>
    </section>
  );
}
