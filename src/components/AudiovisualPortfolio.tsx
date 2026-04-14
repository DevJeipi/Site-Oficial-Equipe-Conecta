"use client";

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type AudiovisualItem = {
  name: string;
  image: string;
};

const audiovisualItems: AudiovisualItem[] = [
  { name: "Sprint", image: "/sprint-fotos.avif" },
  { name: "Sprint 2", image: "/sprint-fotos2.avif" },
  { name: "Shallow", image: "/shallow-fotos.avif" },
  { name: "JS", image: "/js-fotos.avif" },
  { name: "Fluence", image: "/fluence-fotos.avif" },
  { name: "Flor de Ló", image: "/flor-de-lo-fotos.avif" },
];

export default function AudiovisualPortfolio() {
  return (
    <section
      id="portfolio-audiovisual"
      className="container bg-secondary pb-20 dark:bg-neutral"
    >
      <div className="mb-8 flex flex-col gap-2">
        <span
          className="font-unbounded indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                     before:w-8 before:h-[2px] before:bg-primary dark:before:bg-secondary"
        >
          Audiovisual
        </span>
        <h2 className="max-w-2xl font-unbounded text-4xl font-bold md:text-5xl">
          Ideias transformadas em imagem
        </h2>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0, black 7%, black 93%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0, black 7%, black 93%, transparent 100%)",
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary via-secondary/90 to-transparent dark:from-neutral dark:via-neutral/90" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary via-secondary/90 to-transparent dark:from-neutral dark:via-neutral/90" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          speed={6000}
          allowTouchMove
          grabCursor
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          freeMode={{ enabled: true, momentum: false }}
          className="!overflow-visible"
        >
          {audiovisualItems.map((item) => (
            <SwiperSlide
              key={item.name}
              className="!w-[78vw] sm:!w-[24rem] lg:!w-[26rem]"
            >
              <article className="group flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-3xl bg-white/40 shadow-lg ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`Projeto audiovisual ${item.name}`}
                      fill
                      sizes="(max-width: 768px) 78vw, (max-width: 1024px) 24rem, 26rem"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
