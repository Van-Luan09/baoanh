import { Geist } from "next/font/google";
import "./globals.css";
import AntdProvider from "@/components/AntdProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Ophim - Xem Phim Online Miễn Phí",
  description:
    "Xem phim online chất lượng cao miễn phí, phim mới nhất, phim hay nhất",
  keywords: "xem phim, phim online, phim hay, phim mới, phim HD",
  openGraph: {
    title: "Ophim - Xem Phim Online Miễn Phí",
    description: "Xem phim online chất lượng cao miễn phí",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className="overflow-x-hidden">
      <body className={`${geist.className} antialiased text-white overflow-x-hidden max-w-full`}>
        <AntdProvider>
          <Header />
          <main className="min-h-screen mt-14!">{children}</main>
          <Footer />
        </AntdProvider>
      </body>
    </html>
  );
}
