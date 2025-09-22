import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary w-full">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col gap-4">
            <Image
              src="/symbol-conecta-wtbg-white-transformed.webp"
              alt="Logo Equipe Conecta"
              width={69}
              height={33}
              className="mb-4"
            />
            <p className="text-white/80">
              Transformamos ideias em resultados através de estratégias digitais
              personalizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-unbounded font-bold">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Início
              </Link>
              <Link
                href="#services"
                className="text-white/80 hover:text-white transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="#portfolio"
                className="text-white/80 hover:text-white transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="#team"
                className="text-white/80 hover:text-white transition-colors"
              >
                Nossa Equipe
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-unbounded font-bold">Contato</h3>
            <div className="flex flex-col gap-2 text-white/80">
              <a
                href="mailto:contato@equipeconecta.com.br"
                className="hover:text-white transition-colors"
              >
                contato@equipeconecta.com.br
              </a>
              <a
                href="tel:+5551986154167"
                className="hover:text-white transition-colors"
              >
                (51) 98615-4167
              </a>
              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://instagram.com/equipeconecta"
                  className="hover:text-white/60 transition-colors"
                >
                  <Instagram size={24} />
                </Link>
                <Link
                  href="#"
                  className="hover:text-white/60 transition-colors"
                >
                  <Linkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© {currentYear} Equipe Conecta. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
