import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { IBM_Plex_Mono, Martian_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Providers from '../contexts/Providers';
export const runtime = "edge";
const ibm = IBM_Plex_Mono({weight: ['100','300', '700'], subsets: ["latin"], variable: '--font-ibm'});
const martian = Martian_Mono({weight:['100', '400', '700'], subsets: ["latin"], variable: '--font-martian'});

export const metadata: Metadata = {
  title: "Eric Augusto | Frontend Developer",
  description: "I'm Eric Augusto a frontend developer specializing in modern web technologies like Angular, React and Next.js. Welcome to my portfolio.",
  openGraph: {
    title: "Eric Augusto | Frontend Developer",
    description: "Check out Eric Augusto's frontend projects built with Next.js and tailwind.",
    url: "https://ericaugusto.pages.dev",
    siteName: "Eric Augusto Portfolio",
    images: [
      {
        url: "https://ericaugusto.pages.dev/images/tucano.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Augusto Portfolio Tucano",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Augusto | Frontend Developer Portfolio",
    description: "Frontend developer passionate about creating performant, accessible web apps.",
    images: ["https://ericaugusto.pages.dev/images/tucano.jpg"],
  },
};

export default async function RootLayout ({ children, params: {locale} }: { children: React.ReactNode, params: {locale: string}; }) {
  const messages = await getMessages();
  
  
  return (
    <html lang={locale} className="min-h-full min-w-full scroll-smooth overflow-x-hidden" suppressHydrationWarning={true}>
      <body className={ibm.className + " h-full w-full bg-[hsl(60,13%,100%)] overflow-x-hidden dark:text-white text-black dark:bg-[#000000] " + martian.variable} suppressHydrationWarning={true}>
        {/* beware of gpu killer. cool visuals tho */}
        {/* <Sketch/> */}
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

