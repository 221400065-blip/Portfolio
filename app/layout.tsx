import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#EAE6F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ayeshatahir.dev"),
  title: "Ayesha Tahir | Full Stack Developer & AI Chatbot Developer",
  description:
    "Official portfolio of Ayesha Tahir, Full Stack Developer and AI Chatbot Developer. Building powerful digital experiences through modern web technologies, intelligent AI solutions, and tactile neumorphic design.",
  keywords: [
    "Ayesha Tahir",
    "Full Stack Developer",
    "AI Chatbot Developer",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Neumorphism UI",
    "Creative Developer Portfolio",
    "Web Developer Pakistan",
  ],
  authors: [{ name: "Ayesha Tahir" }],
  creator: "Ayesha Tahir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ayeshatahir.dev",
    title: "Ayesha Tahir | Full Stack Developer & AI Chatbot Developer",
    description:
      "Building powerful digital experiences through modern web technologies, intelligent AI solutions, and tactile neumorphic design.",
    siteName: "Ayesha Tahir Portfolio",
    images: [
      {
        url: "/images/ayesha-photo.jpg",
        width: 1200,
        height: 1200,
        alt: "Ayesha Tahir - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayesha Tahir | Full Stack Developer & AI Chatbot Developer",
    description:
      "Building powerful digital experiences through modern web technologies, intelligent AI solutions, and tactile neumorphic design.",
    images: ["/images/ayesha-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased min-h-screen flex flex-col bg-[#EAE6F4] text-[#2B1E59] selection:bg-[#372773] selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
