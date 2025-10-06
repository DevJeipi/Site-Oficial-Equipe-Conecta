import { Header } from "@/components/header";
import Hero from "@/components/Hero";
import Mini from "@/components/Mini";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";
import Why from "@/components/why";
import Team from "@/components/Team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex dark:bg-neutral scroll-smooth relative overflow-hidden flex-col items-center justify-center min-h-screen">
      <Header />
      <Hero />
      <Mini />
      <Services />
      <Method />
      <Portfolio />
      <Why />
      <Team />
      <Footer />
    </main>
  );
}
