import localFont from "@next/font/local";
import { IBM_Plex_Mono } from "@next/font/google";

export const archia = localFont({
  src: "../public/fonts/archia-regular-webfont.woff2",
  variable: "--font-archia",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
