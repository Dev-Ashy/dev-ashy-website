import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev-Ashy | Build Beyond the Screen",
  description:
    "Dev-Ashy Mobile Creator helps developers build mobile applications using a modern React Native development workflow. CREATE, BUILD, RUN, SHIP.",
  keywords: [
    "Dev-Ashy",
    "Mobile Creator",
    "React Native",
    "Expo",
    "mobile app development",
    "developer tools",
    "CLI",
    "IDE",
  ],
  authors: [{ name: "Dev-Ashy Limited" }],
  openGraph: {
    title: "Dev-Ashy | Build Beyond the Screen",
    description:
      "Build mobile applications with a modern React Native development workflow.",
    type: "website",
    siteName: "Dev-Ashy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev-Ashy | Build Beyond the Screen",
    description:
      "Build mobile applications with a modern React Native development workflow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
