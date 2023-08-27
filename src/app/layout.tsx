import './globals.css';
import type { Metadata } from 'next';
// import { Roboto_Condensed } from "next/font/google";

// const inter = Roboto_Condensed({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"],
// });

export const metadata: Metadata = {
  title: 'Todo',
  description: 'Simple app Todo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
