import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from 'react-toastify';

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Digital Twin Dashboard",
  description:
    "A waste Management Dashboard to record & track vehicle routes, fuel consumption, maintenance costs, staff, waste bin collections, and more in real-time to optimize efficiency and reduce operational costs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased w-full flex",
          fontSans.variable
        )}
      >

        <ToastContainer />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
