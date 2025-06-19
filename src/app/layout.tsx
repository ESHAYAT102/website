import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Eshayat Al-Wasiu - Full Stack Developer",
  description:
    "Portfolio of Eshayat Al-Wasiu, a passionate full-stack developer specializing in modern web technologies, React, TailwindCSS, Vite, and innovative digital solutions.",
  keywords:
    "Eshayat Al-Wasiu, Full Stack Developer, React, TailwindCSS, Vite, Web Development, Portfolio",
  authors: [{ name: "Eshayat Al-Wasiu" }],
  openGraph: {
    title: "Eshayat Al-Wasiu - Full Stack Developer",
    description:
      "Portfolio of Eshayat Al-Wasiu, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <PostHogProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

<Script
  src="https://cloud.umami.is/script.js"
  data-website-id="0e47b787-7278-4cad-b957-c8050c204a23"
  strategy="afterInteractive"
  defer
/>;
