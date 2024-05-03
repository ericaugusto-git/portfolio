import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const firaCode = Fira_Code({ subsets: ["latin"] });
const ibm = IBM_Plex_Mono({weight: ['300', '700'], subsets: ["latin"], variable: '--font-ibm'});

export const metadata: Metadata = {
  title: "Eric Augusto",
  description: "Hi, i'm Eric and this is my portfolio/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full bg-[#0E0E0E] ">
      <body className={firaCode.className + " h-full " + ibm.variable}>
        {children}
        <Toaster richColors/>
        </body>
    </html>
  );
}
