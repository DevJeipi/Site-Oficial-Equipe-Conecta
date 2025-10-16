"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "sites" | "social" | "branding";
  href: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "fef",
    title: "FeF Engenharia",
    description:
      "Site institucional desenvolvido para transmitir credibilidade e autoridade.",
    image: "/site-fefengenharia.webp",
    category: "sites",
    href: "/",
  },
  {
    id: "shallow",
    title: "Shallow Revendedoras",
    description:
      "Landing Page desenvolvida para captar revendedoras para a marca.",
    image: "/site-revendedoras-shallow.webp",
    category: "sites",
    href: "/",
  },
  {
    id: "pace",
    title: "O Pace Financeiro",
    description:
      "Landing Page desenvolvida para captar leads e apresentar o curso.",
    image: "/site-opacefinanceiro.webp",
    category: "sites",
    href: "/",
  },
  {
    id: "opace",
    title: "O Pace Financeiro",
    description:
      "Identidade visual pensada para transmitir a verdadeira essência de Otávio Daudt.",
    image: "/logo-pacefinanceiro.webp",
    category: "branding",
    href: "https://wa.me/5551992091626",
  },
  {
    id: "shallowrunning",
    title: "Shallow Running",
    description:
      "Identidade visual formada para trazer a área de corrida da marca Shallow.",
    image: "/logo-shallow-running1.webp",
    category: "branding",
    href: "https://wa.me/5551992091626",
  },
  {
    id: "bauer",
    title: "Bauer Psicólogo",
    description:
      "Identidade visual criada para refletir a personalidade e valores do profissional.",
    image: "/bauer-logo.webp",
    category: "branding",
    href: "https://wa.me/5551992091626",
  },
  {
    id: "janete",
    title: "Janete Celebrante",
    description:
      "Artes e gerenciamento para demonstrar a autoridade e credibilidade do trabalho.",
    image: "/portfolio-janete.webp",
    category: "social",
    href: "/",
  },
  {
    id: "shallow",
    title: "Shallow",
    description:
      "Conteúdos criados para crescer a marca de forma sustentável e escalável.",
    image: "/portfolio-shallow.webp",
    category: "social",
    href: "/",
  },
  {
    id: "lc",
    title: "LC Joias Únicas",
    description:
      "Posts e vídeos desenvolvidos para redes sociais, focando em conversão, engajamento e autoridade.",
    image: "/portfolio-lc.webp",
    category: "social",
    href: "/",
  },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const handleClick = () => {
    if (item.category !== "branding") {
      window.open("https://wa.me/5551992091626", "_blank");
    }
  };

  const cardContent = (
    <article className="relative bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="inline-block px-3 py-1 text-sm text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10 rounded-full w-fit">
          {item.category === "sites" && "Desenvolvimento Web"}
          {item.category === "social" && "Social Media"}
          {item.category === "branding" && "Identidade Visual"}
        </span>

        <h3 className="mt-4 text-xl font-unbounded font-bold line-clamp-1">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-600 dark:text-secondary/80 text-sm line-clamp-2 flex-grow">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-primary dark:text-secondary font-medium text-sm">
            {item.category === "branding"
              ? "Solicitar Orçamento" // Mudar para Ver Projeto quando tiver projeto para mostrar
              : "Solicitar orçamento"}
          </span>
          <svg
            className="w-6 h-6 text-primary dark:text-secondary transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </article>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      {item.category === "branding" ? (
        <Link href={item.href}>{cardContent}</Link>
      ) : (
        <div onClick={handleClick} className="cursor-pointer">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<
    "sites" | "social" | "branding"
  >("social");

  const categories = [
    { id: "social", label: "Social Media" },
    { id: "branding", label: "Identidade Visual" },
    { id: "sites", label: "Sites" },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="portfolio" className="container py-20">
      <div className="flex flex-col gap-2 mb-10">
        <span
          className="font-unbounded indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                       before:w-8 before:h-[2px] before:bg-primary dark:before:bg-secondary"
        >
          Nosso Portfólio
        </span>
        <h2 className="text-4xl md:text-5xl font-unbounded font-bold">
          Veja alguns de nossos projetos
        </h2>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all w-full sm:w-auto
                ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-transparent dark:hover:bg-secondary/10 dark:text-secondary "
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          spaceBetween={20}
          slidesPerView={1.2}
          className="!pb-12"
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <PortfolioCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
