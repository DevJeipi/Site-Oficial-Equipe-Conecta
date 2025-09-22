"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Portfolio item type
type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  href: string;
};

// Example portfolio items
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Projeto A",
    description: "Descrição do Projeto A.",
    image: "/images/portfolio-a.jpg",
    category: "Web Design",
    href: "/portfolio/projeto-a",
  },
  {
    id: 2,
    title: "Projeto B",
    description: "Descrição do Projeto B.",
    image: "/images/portfolio-b.jpg",
    category: "Desenvolvimento",
    href: "/portfolio/projeto-b",
  },
  {
    id: 3,
    title: "Projeto C",
    description: "Descrição do Projeto C.",
    image: "/images/portfolio-c.jpg",
    category: "Marketing",
    href: "/portfolio/projeto-c",
  },
  {
    id: 4,
    title: "Projeto D",
    description: "Descrição do Projeto C.",
    image: "/images/portfolio-c.jpg",
    category: "Marketing",
    href: "/portfolio/projeto-c",
  },
  // Adicione mais itens conforme necessário
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col gap-10">
        {/* Header stays the same */}
        <div className="font-unbounded flex flex-col items-start justify-start gap-2 w-full">
          <span
            className="indent-10 text-2xl font-unbounded relative before:content-[''] before:absolute before:left-0 before:top-3.5
                       before:w-8 before:h-[2px] before:bg-primary"
          >
            Nosso Portfólio
          </span>
          <h2 className="text-4xl font-unbounded font-bold">
            Veja a qualidade dos nossos projetos
          </h2>
        </div>

        {/* Replace Grid with Swiper */}
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            bulletActiveClass: "bg-primary",
            bulletClass:
              "inline-block w-2 h-2 mx-1 rounded-full bg-gray-200 cursor-pointer transition-colors",
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="w-full !pb-12" // padding bottom for pagination dots
        >
          {portfolioItems.map((item) => (
            <SwiperSlide key={item.id}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Link href={item.href} className="block h-full">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      <span className="inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full">
                        {item.category}
                      </span>

                      <h3 className="mt-4 text-2xl font-unbounded font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-gray-600">{item.description}</p>

                      <div className="mt-6">
                        <span className="inline-flex items-center text-primary font-medium">
                          Entre em Contato
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
