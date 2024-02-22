import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manan's Portfolio Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Use the `Html` component to wrap the layout
    <html lang="en">
      {/* Use the native `head` element for meta tags, titles, etc. (if needed) */}
      <head>
        {/* Meta tags, title, etc. */}
      </head>
      {/* Use the `body` tag as you normally would in HTML */}
      <body className="flex flex-col min-h-screen">
        <Header />
        {/* Main content area */}
        <main className="flex-grow">
          {children}
        </main>
        {/* Footer or other components */}
      </body>
    </html>
  );
}
