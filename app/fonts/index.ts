import localFont from "next/font/local";

export const monumentGrotesk = localFont({
    src: [
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Bold.ttf",
          weight: "700",
          style: "normal",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-BoldItalic.ttf",
          weight: "700",
          style: "italic",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Italic.ttf",
          weight: "400",//normal
          style: "italic",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Medium.ttf",
          weight: "500",
          style: "normal",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-MediumItalic.ttf",
          weight: "500",
          style: "italic",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Mono.ttf",
          weight: "400", //normal
          style: "normal",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Regular.ttf",
          weight: "400",
          style: "normal",
        },
        {
          path: "./MonumentGrotesk/MonumentGrotesk-Semi-Mono.ttf",
          weight: "600",
          style: "normal",
        },
    ],
  variable: "--font-monument-grotesk",
});


export const gTWalsheimPro = localFont({
    src: [
        {
          path: "./GTWalsheimPro/GTWalsheimPro-Black.ttf",
          weight: "900",
          style: "normal",
        },
        {
          path: "./GTWalsheimPro/GTWalsheimPro-Bold.ttf",
          weight: "700",
          style: "normal",
        },
        {
          path: "./GTWalsheimPro/GTWalsheimPro-Medium.ttf",
          weight: "500",
          style: "normal",
        },
        {
          path: "./GTWalsheimPro/GTWalsheimPro-Regular.ttf",
          weight: "400",
          style: "normal",
        },
    ],
  variable: "--font-gT-WalsheimPro",
});