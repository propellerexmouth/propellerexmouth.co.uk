import "./globals.css";
import Footer from "./components/Footer";
import PreHeader from "./components/PreHeader";
import Header from "./components/Header";
import { archia } from "./fonts";
export const metadata = {
  title: {
    default: "Propeller Exmouth",
    template: (title: string) => `${title} &middot; Propeller Exmouth`,
  },
  description: "A not-for-profit community driven co-working space with a bias towardes the creative and digital sector, that is 5 minutes from the beach!",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  itunes: {
    appId: "6480235024",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={`${archia.variable} font-sans`}>
      <body className="flex flex-col antialiased min-h-full text-black">
        <PreHeader />
        <Header />
        <main className="min-h-fit">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
