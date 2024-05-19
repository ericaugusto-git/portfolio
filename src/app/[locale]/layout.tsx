import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const runtime = "edge";
const firaCode = Fira_Code({ subsets: ["latin"] });
const ibm = IBM_Plex_Mono({weight: ['300', '700'], subsets: ["latin"], variable: '--font-ibm'});

export const metadata: Metadata = {
  title: "Eric Augusto",
  description: "Hi, i'm Eric and this is my portfolio/",
};

export default async function RootLayout ({ children, params: {locale} }: { children: React.ReactNode, params: {locale: string}; }) {
  const messages = await getMessages();
  
  
  return (
    <html lang={locale} className="min-h-full min-w-full scroll-smooth dark">
      <body className={firaCode.className + " h-full w-full bg-white text-white dark:bg-[#0E0E0E] " + ibm.variable}>
      <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster richColors/>
        </body>
    </html>
  );
}

