import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fetching App",
  description: "Simple fetch next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
