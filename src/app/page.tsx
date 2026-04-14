import AudiovisualPortfolio from "@/components/AudiovisualPortfolio";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import { Header } from "@/components/header";
import Method from "@/components/Method";
import Mini from "@/components/Mini";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Why from "@/components/why";

export default function Home() {
  return (
    <main className="flex dark:bg-neutral scroll-smooth relative overflow-hidden flex-col items-center justify-center min-h-screen">
      <Header />
      <Hero />
      <Mini />
      <Services />
      <Method />
      <Portfolio />
      <AudiovisualPortfolio />
      <Why />
      <Team />
      <Footer />
    </main>
  );
}
