import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { FixedBackdrop } from "@/components/layout/FixedBackdrop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Divyansh Falodiya",
  description:
    "Personal portfolio of Divyansh Falodiya. Software engineer currently building at Mercari. Crafting immersive web experiences, WebGL environments, and digital artifacts at the seam of logic and spatial design.",
  openGraph: {
    title: "Divyansh Falodiya",
    description:
      "Personal portfolio of Divyansh Falodiya. Software engineer crafting immersive web experiences and WebGL environments.",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/33622561?v=4",
        width: 1200,
        height: 630,
        alt: "Divyansh Falodiya Portfolio",
      },
    ],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "ja")) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap'
          precedence='default'
        />
      </head>
      <body className='antialiased bg-surface-container-lowest text-on-background min-h-screen'>
        <NextIntlClientProvider messages={messages}>
          <FixedBackdrop />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
