
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Toaster } from "react-hot-toast"
import AuthProvider from "@/components/admin-panel/authProvider";

import App from './App'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider> <App>
        {/* <Toaster position="bottom-center" reverseOrder={false} ></Toaster> */}
          {children}</App></AuthProvider>
        
      </body>
    </html>
  );
}