import Header from "@/components/Headers/Header";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import ShopProvider from "@/context/ShopContext";
import { Toaster } from "react-hot-toast";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="rtl">
      <body className={`min-h-full flex flex-col ${vazir.className}`}>
        <ShopProvider>
          <Header />
          {children}
          <Toaster />
        </ShopProvider> 
      </body>
    </html>
  );
}
