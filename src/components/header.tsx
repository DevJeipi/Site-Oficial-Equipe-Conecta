import Image from "next/image";
import Button from "./ui/cta";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  return (
    <header className="fixed left-0 right-0 mx-6 sm:mx-8 shadow-2xl rounded-4xl top-2 z-[1100] bg-white/30 backdrop-blur-sm transition-colors">
      <div className="flex container rounded-4xl items-center justify-between h-16 sm:h-20 px-8">
        <Link href="/">
          <Image
            src="/logo-conecta-wtbg-blue-logotext.webp"
            alt="Logo Equipe Conecta"
            width={160}
            height={24}
          />
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="icon" action="whatsapp">
            Converse conosco
          </Button>
        </div>
      </div>
    </header>
  );
}
