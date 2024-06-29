import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Martian_Mono } from "next/font/google";
import Providers from '../contexts/Providers'
export const runtime = "edge";
const ibm = IBM_Plex_Mono({weight: ['100','300', '700'], subsets: ["latin"], variable: '--font-ibm'});
const martian = Martian_Mono({weight:['100', '400', '700'], subsets: ["latin"], variable: '--font-martian'});

export const metadata: Metadata = {
  title: "Eric Augusto",
  description: "Hi, i'm Eric and this is my portfolio/",
};

export default async function RootLayout ({ children, params: {locale} }: { children: React.ReactNode, params: {locale: string}; }) {
  const messages = await getMessages();
  
  
  return (
    <html lang={locale} className="min-h-full min-w-full scroll-smooth overflow-x-hidden" suppressHydrationWarning={true}>
      <body className={ibm.className + " h-full w-full bg-[hsl(60,13%,100%)] dark:text-white text-black dark:bg-[#000000] " + martian.variable} suppressHydrationWarning={true}>
        <Providers>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Toaster richColors/>
        </Providers>
        </body>
    </html>
  );
}

