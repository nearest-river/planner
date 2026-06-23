
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer, Bounce } from "react-toastify";
import Sunflower from "@/components/sunflower.tsx";




const geistSans=Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono=Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hangout",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} >
      <body className="min-h-full flex flex-col">
      <Sunflower width="90px" height="90px" top="10%" left="10%" animation_delay="0s" />
      <Sunflower width="80px" height="80px" top="20%" right="15%" animation_delay="0s" />
      <Sunflower width="60px" height="60px" bottom="15%" left="20%" animation_delay="0s" />
        {children}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}





