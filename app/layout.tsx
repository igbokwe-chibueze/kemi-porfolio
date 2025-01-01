import type { Metadata } from "next";
import { monumentGrotesk, gTWalsheimPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwakemi",
  description: "Oluwakemi Olufowobi design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monumentGrotesk.variable} ${gTWalsheimPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
