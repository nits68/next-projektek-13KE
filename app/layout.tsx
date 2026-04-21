// Kliens oldali "oldal"
"use client";

// import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path: string = usePathname();
  return (
    <html className={"h-full antialiased"} lang="en">
      <body className="flex min-h-full flex-col">
        <Toaster position="bottom-right" toastOptions={{ duration: 5000 }} />
        { path !=="/" && <header className="flex bg-blue-400 p-2">
          <Link className="text-xl font-semibold hover:text-blue-800" href="/">
            Vissza a főmenübe
          </Link>
        </header>}
        {children}
      </body>
    </html>
  );
}
