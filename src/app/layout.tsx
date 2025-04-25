import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyansh Falodiya",
  description: "A portfolio website showcasing Divyansh Falodiya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
