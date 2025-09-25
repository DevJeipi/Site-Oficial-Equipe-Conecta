import Image from "next/image";
import Button from "./ui/cta";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed container shadow-2xl rounded-4xl top-2 z-[1100] w-full bg-white/30 backdrop-blur-sm transition-colors">
      <div className="flex rounded-4xl items-center justify-between h-16 sm:h-20 px-4">
        <Link href="/">
          <Image
            src="/logo-conecta-wtbg-blue-logotext.webp"
            alt="Logo Equipe Conecta"
            width={160}
            height={24}
          />
        </Link>

        <Button variant="icon" action="whatsapp">
          Converse conosco
        </Button>
      </div>
    </header>
  );
}
