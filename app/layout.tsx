import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohd-talish-ansari.vercel.app/"),

  title: {
    default: "Mohd Talish Ansari | Full Stack Developer",
    template: "%s | Mohd Talish Ansari",
  },

  description:
    "Full Stack Developer specializing in MERN stack — React.js, Node.js, Express.js, MongoDB.",

  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React Developer",
    "Node.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Web Developer India",
    "Mohd Talish Ansari",
  ],

  authors: [{ name: "Mohd Talish Ansari" }],
  creator: "Mohd Talish Ansari",

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohd-talish-ansari.vercel.app/",
    title: "Mohd Talish Ansari | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack.",
    siteName: "Mohd Talish Ansari Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohd Talish Ansari - Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohd Talish Ansari | Full Stack Developer",
    description:
      "Full Stack Developer specializing in MERN stack.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}