import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import { Be_Vietnam_Pro } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/Footer";

const beVietnam = Be_Vietnam_Pro({
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "vietnamese"],
    variable: "--font-be-vietnam",
    display: "swap",
});

export const metadata = {
    title: "Arman Ul Haq",
    description: "Portfolio of Arman Ul Haq | Full Stack Software Developer",
    openGraph: {
        title: "Arman Ul Haq",
        description:
            "Portfolio of Arman Ul Haq | Full Stack Software Developer",
        url: "https://arman-portfolio-website.vercel.app",
        siteName: "Arman Ul Haq Portfolio",
        images: [
            {
                url: "/website-screenshot.png",
                width: 1200,
                height: 630,
                alt: "Portfolio of Arman Ul Haq",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Arman Ul Haq",
        description:
            "Portfolio of Arman Ul Haq | Full Stack Software Developer",
        images: ["/website-screenshot.png"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <head />
                <body
                    className={`${beVietnam.variable} min-h-screen p-5 font-sans`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Navbar />
                        <Toaster />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
