import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Topbar from "@/components/Topbar";
import { CatalogProvider } from "@/provider/CatalogContext";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSerif = DM_Serif_Display({
  variable: "--font-display-var",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Multi Category Catalog",
  description: "Browse products across categories",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable}`}
    >
      <body className="min-h-screen antialiased bg-gray-50 text-gray-900">
        <CatalogProvider>
          <main className="flex min-h-screen relative">
            <Sidebar />
            <div className="flex-1 w-full relative min-w-0 flex flex-col">
              <Topbar />
              <div className="px-8 py-4 w-full flex-1">{children}</div>
            </div>
          </main>
        </CatalogProvider>
      </body>
    </html>
  );
}
