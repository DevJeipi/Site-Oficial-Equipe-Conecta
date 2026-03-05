import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  role2?: string;
  image: string;
};

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Alana Smaniotto",
      role: "Co-Fundadora",
      role2: "Produção Audiovisual e Fotografia Comercial",
      image: "/alana.webp",
    },
    {
      name: "Gustavo Haag",
      role: "Co-Fundador",
      role2: "Comercial e Estrategista de Performance",
      image: "/haag.webp",
    },
    {
      name: "João Ghilardi",
      role: "Co-fundador",
      role2: "Desenvolvedor Web, Automações e Soluções com IA",
      image: "/jp.webp",
    },
    {
      name: "João Guilherme",
      role: "Editor de Vídeo",
      role2: "Especialista em After Effects",
      image: "/jao-foto-site-sem-fundo.webp",
    },
    {
      name: "Arthur",
      role: "Editor de Vídeo",
      role2: "Especialista em Premiere",
      image: "/arthur-foto-site.webp",
    },
    {
      name: "Mateus",
      role: "Redator",
      role2: "Analista de Tendências",
      image: "/mateus-foto-site.webp",
    },
    {
      name: "Matheus",
      role: "Gestor de Tráfego",
      role2: "Estratégia e Conversão",
      image: "/matheusinho-foto-site-sem-fundo.webp",
    },
  ];
  const firstRowMembers = teamMembers.slice(0, 3);
  const secondRowMembers = teamMembers.slice(3);

  const renderMemberCard = (member: TeamMember) => (
    <div
      key={member.name}
      className="group relative rounded-2xl overflow-hidden bg-primary transition-all duration-300 hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          loading="lazy"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Text Container */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2f71] via-[#0b2f71]/90 to-transparent p-5 pt-16">
        <h3 className="text-2xl font-unbounded font-bold text-white leading-tight">
          {member.name}
        </h3>
        <p className="text-white/95 mt-1 text-sm leading-tight">{member.role}</p>
        {member.role2 && (
          <p className="text-white/85 text-sm leading-tight">{member.role2}</p>
        )}
      </div>
    </div>
  );

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
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstRowMembers.map(renderMemberCard)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondRowMembers.map(renderMemberCard)}
        </div>
      </div>
    </section>
  );
}
