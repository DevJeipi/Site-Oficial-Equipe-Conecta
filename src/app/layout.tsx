import "./globals.css";
import { Unbounded, DM_Sans } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html title="Marketing 360 | Equipe Conecta" lang="pt-BR">
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
