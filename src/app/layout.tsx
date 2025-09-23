import "./globals.css";
import { Unbounded, DM_Sans } from "next/font/google";
import { Metadata } from "next";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const dmsans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  // Metadados básicos
  title: "Marketing 360 | Equipe Conecta",
  description:
    "Conectamos sua marca ao sucesso com um marketing 360 humanizado. Da criação de sites e design ao tráfego pago, nossa equipe guia você. Fale com a gente!",
  keywords: [
    "agência de marketing que atende pequenas empresas",
    "como contratar agência de tráfego pago",
    "desenvolvimento de sites para negócios locais",
    "desenvolvimento de sites para negócios locais",
    "consultoria de marketing digital para iniciantes",
    "agência de tráfego pago",
    "criação de sites profissionais",
    "agência de design gráfico",
    "gestão de google ads",
    "edição de vídeo para marketing",
    "agência de marketing em Campo Bom",
    "criação de sites em Campo Bom RS",
    "agência de publicidade Vale do Sinos",
    "gestão de redes sociais Novo Hamburgo",
    "marketing 360",
    "marketing digital humanizado",
    "escalar vendas com marketing digital",
  ],
  applicationName: "Equipe Conecta",
  creator: "Equipe Conecta",
  authors: [{ name: "Equipe Conecta", url: "https://equipeconecta.com.br" }],
  publisher: "Equipe Conecta",

  // Robôs e indexação (SEO)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.equipeconecta.com.br",
  },

  // --- Open Graph (Redes Sociais) ---
  openGraph: {
    title: "Marketing 360 Humanizado | Equipe Conecta",
    description:
      "Transformamos ideias em resultados com estratégias digitais completas.",
    url: "https://www.equipeconecta.com.br", // URL principal do seu site
    siteName: "Equipe Conecta",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Equipe Conecta - Marketing 360",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Marketing 360 | Equipe Conecta",
    description:
      "Transformamos ideias em resultados com estratégias digitais completas.",
    images: ["/og-image.png"], // Mesma imagem do Open Graph
  },

  // --- Aparência e Ícones ---
  themeColor: "#0b3b7a",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="pt-BR">
      <body
        style={{
          backgroundColor: "#f2f2f2",
          fontFamily: "var(--font-dm-sans)",
        }}
        className={`${unbounded.variable} ${dmsans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
