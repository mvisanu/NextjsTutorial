import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome app with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      <main className="px-8 py-20 max-w-6xl mx-auto">
      {children}
      </main>
      
      </body>
    </html>
  );
}
