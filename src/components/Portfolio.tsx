import Image from "next/image";

type FeedItem = {
  name: string;
  image: string;
};

const feedItems: FeedItem[] = [
  {
    name: "Celebrante JS",
    image: "/feed-janete.png",
  },
  {
    name: "Bauer",
    image: "/feed-bauer.png",
  },
  {
    name: "O Pace",
    image: "/feed-opace.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="container py-20">
      <div className="mb-10 flex flex-col gap-2">
        <span
          className="font-unbounded indent-10 text-2xl relative before:content-[''] before:absolute before:left-0 before:top-3.5
                     before:w-8 before:h-[2px] before:bg-primary dark:before:bg-secondary"
        >
          Portfólio
        </span>
        <h2 className="text-4xl md:text-5xl font-unbounded font-bold max-w-3xl">
          Um recorte visual do que entregamos no dia a dia
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {feedItems.map((item, index) => (
          <article key={item.name} className={`group flex flex-col gap-4`}>
            <div className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-white/5 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Feed ${item.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-6 px-1">
              <h3 className="font-unbounded whitespace-nowrap text-xl font-bold text-primary dark:text-secondary">
                {item.name}
              </h3>
              <div className="w-full h-0.5 bg-primary"></div>
              <div className="bg-primary text-secondary px-5 py-2 rounded-md">
                Design
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
