import Header from "@/components/Headers/Header";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" dir="rtl">
      <body className={`min-h-full flex flex-col ${vazir.className}`}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
