import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from './components/ClientOnly';

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "For My Beloved Dr. Sneha ❤️",
  description: "A love letter in code, dedicated to Dr. Sneha on Girlfriend's Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dancing.variable} ${inter.variable} antialiased`}>
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
