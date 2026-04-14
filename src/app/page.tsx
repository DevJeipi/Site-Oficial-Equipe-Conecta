import AudiovisualPortfolio from "@/components/AudiovisualPortfolio";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import { Header } from "@/components/header";
import Mini from "@/components/Mini";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="flex dark:bg-neutral scroll-smooth relative overflow-hidden flex-col items-center justify-center min-h-screen">
      <Header />
      <Hero />
      <Mini />
      <Services />
      <Portfolio />
      <AudiovisualPortfolio />
      <Team />
      <Footer />
    </main>
  );
}
