import Header from "@/components/header";
import Hero from "@/components/Hero";
import Mini from "@/components/Mini";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="flex scroll-smooth relative overflow-hidden flex-col items-center justify-center min-h-screen">
      <Header />
      <Hero />
      <Mini />
      <Services />
      <Method />
      <Portfolio />
    </main>
  );
}
