import type { Metadata } from "next";
import { Lato, Tangerine } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { WishlistProvider } from "@/context/WishlistContext";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Trendora - An Online Shopping App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.className} ${tangerine.variable} `}>
      <body>
        <Navbar />
        <main>
          <WishlistProvider>{children}</WishlistProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
