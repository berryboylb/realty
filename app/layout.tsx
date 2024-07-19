import "@/styles/globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@/components/analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "Tailwind CSS"],
  authors: [
    {
      name: "joyboy",
      url: "https://github.com/berryboylb",
    },
  ],
  creator: "Joyboy",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@pappychulow",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("antialiased", plus_jakarta_sans.className)}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster position="top-right" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
