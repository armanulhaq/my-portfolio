import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnam = Be_Vietnam_Pro({
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    subsets: ["latin", "vietnamese"],
    variable: "--font-be-vietnam",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Portfolio of Arman Ul haq | Software Engineer",
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

                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </>
    );
}
