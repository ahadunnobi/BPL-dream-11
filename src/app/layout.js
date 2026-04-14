import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { CoinProvider } from "@/context/CoinContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "BPL Dream 11 | Premium Fantasy League",
  description: "Beyond Boundaries Beyond Limits. Join the most advanced fantasy cricket league.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#030712] text-gray-100`}>
        <CoinProvider>
          {children}
          <ToastContainer pauseOnFocusLoss={false} autoClose={3000} />
        </CoinProvider>
      </body>
    </html>
  );
}
