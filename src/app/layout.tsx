"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorOverlay from "../components/ErrorOverlay";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed the export of metadata as it is not allowed in a client component.
// If metadata is needed, it should be handled in a server component or elsewhere.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [error, setError] = useState<{ message: string; details?: string } | null>(null);

  const simulateError = () => {
    setError({
      message: "This is a simulated error for demonstration purposes.",
      details: "Error details: Stack trace or additional information can go here."
    });
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ChitterSync.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-between">
            <h1 className="text-xl font-bold">Gia</h1>
            <ul className="flex space-x-4">
              <li><a href="/videos" className="hover:underline">Videos</a></li>
              <li><a href="/tv-movies" className="hover:underline">TV/Movies</a></li>
              <li><a href="/comics-books" className="hover:underline">Comics/Books</a></li>
              <li><a href="/music" className="hover:underline">Music</a></li>
            </ul>
          </nav>
          <button
            onClick={simulateError}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Simulate Error
          </button>
        </header>
        <main className="p-4">{children}</main>
        {error && (
          <ErrorOverlay
            message={error.message}
            details={error.details}
            onClose={() => setError(null)}
          />
        )}
      </body>
    </html>
  );
}
