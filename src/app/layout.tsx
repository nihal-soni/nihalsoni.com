import type { Metadata } from "next";
import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Separator } from "@/components/ui/separator";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nihal soni |  A Full stack Developer from India ",
  description:
    "I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's. Explore my projects, experience, and technical expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Separator/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
