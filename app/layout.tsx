import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reynolito Reso-or",
  description: "Full Stack Developer with experience building modern web applications using Next.js, React, ReactNative, Nuxt.js, Vue, Supabase, Prisma, Tailwind CSS, Wordpress, Woocommerce, Laravel, CodeIgniter, PostgreSQL, MDBootstrap, and Bootstrap. Skilled in developing responsive frontends, scalable backend systems, REST APIs, authentication, and database management. Passionate about creating clean, efficient, and user-friendly applications with modern technologies.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
