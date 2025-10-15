import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alana Smaniotto",
      role: "Sócia Fundadora - Designer e Captações Visuais",
      image: "/alana.webp",
    },
    {
      name: "Gustavo Haag",
      role: "Sócio Fundador - Marketing e Performance",
      image: "/haag.webp",
    },
    {
      name: "João Hubner",
      role: "Sócio Fundador - Desenvolvedor de Sites",
      image: "/jp.webp",
    },
    {
      name: "Erick Bernardo",
      role: "Designer Gráfico",
      image: "/erick.webp",
    },
    {
      name: "João Guilherme",
      role: "Editor de Vídeo",
      image: "/jao.webp",
    },
  ];

  return (
    <section id="team" className="container py-20">
      {/* Header and Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="flex flex-col gap-2">
          <span className="indent-10 text-2xl font-unbounded relative before:content-[''] before:absolute before:left-0 before:top-3.5 before:w-8 before:h-[2px] before:bg-primary dark:before:bg-secondary">
            Conheça
          </span>
          <h2 className="text-4xl font-unbounded font-bold">Nossa Equipe</h2>
        </div>

        <div className="flex items-center">
          <p className="text-lg text-gray-600 dark:text-secondary/80 leading-relaxed">
            Nossa equipe multidisciplinar une experiência e inovação para
            entregar resultados excepcionais. Cada membro traz consigo expertise
            única, contribuindo para o sucesso dos projetos e a satisfação dos
            nossos clientes.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="group relative bg-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>

            {/* Text Container */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
              <h3 className="text-xl font-unbounded font-bold text-white">
                {member.name}
              </h3>
              <p className="text-white/80 mt-1">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
