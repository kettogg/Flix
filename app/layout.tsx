import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || "http://localhost:3000"),
  title: "Movie Oasis",
  description:
    "A beautiful movie recommendation website made with NextJS 14 + Shadcn/ui",
  openGraph: {
    title: "Movie Oasis",
    description:
      "A beautiful movie recommendation website made with NextJS 14 + Shadcn/ui",
    images: "/ogp.png",
  },
  alternates: {
    canonical: "/",
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
