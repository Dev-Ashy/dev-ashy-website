import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    "Dev-Ashy Limited — operating systems, security editions, developer tools, and mobile infrastructure. Build beyond the screen.",
  keywords: [
    "Dev-Ashy",
    "Dev-Ashy OS",
    "Linux",
    "developer tools",
    "CLI",
    "IDE",
    "Mobile App Creator",
    "React Native",
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
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}