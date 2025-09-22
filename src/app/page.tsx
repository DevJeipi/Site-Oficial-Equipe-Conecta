import Header from "@/components/header";
import Hero from "@/components/Hero";
import Mini from "@/components/Mini";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex scroll-smooth relative overflow-hidden flex-col items-center justify-center min-h-screen">
      <Header />
      <Hero />
      <Mini />
      <Services />
      <Method />
      <Portfolio />
      <Team />
      <Footer />
    </main>
  );
}
