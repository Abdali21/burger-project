import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/navigation/ResponsiveNavbar";
import Footer from "@/components/footer/Footer";

const barlow_Condensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Burger | A healty food",
  description: "Burger project using nextjs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <head>
        <link rel="icon" href="/images/b3.png" type="image/png" />
      </head>
      <body className={barlow_Condensed.className}>
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
