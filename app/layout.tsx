import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: "./fonts/satoshi-variable.woff2",
  display: "swap",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "ByteSpace — Learn Without Limits",
  description:
    "Explore practical online courses and grow your skills with ByteSpace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
