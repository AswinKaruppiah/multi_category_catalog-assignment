"use client";

import { useRouter, usePathname } from "next/navigation";
import { BackIcon, MenuIcon } from "./icon";
import { useContext } from "react";
import { CatalogContext } from "@/provider/CatalogContext";

const Topbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isRoot = pathname === "/";
  const { isSidebarOpen, setIsSidebarOpen } = useContext(CatalogContext);

  return (
    <header className="md:py-3 py-2 bg-white border-b border-gray-200 flex items-center justify-between px-4 gap-3 shrink-0 z-50">
      <div>
        {!isRoot && (
          <button
            onClick={() => router.back()}
            className="flex items-center cursor-pointer gap-1.5 p-1.5 pr-3 -ml-1.5 rounded-full hover:bg-gray-50 transition-colors text-gray-500 hover:text-gray-900 focus:outline-none"
            aria-label="Go back"
          >
            <BackIcon />
            <span className="text-sm font-semibold">Back</span>
          </button>
        )}
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 cursor-pointer"
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </button>
    </header>
  );
};

export default Topbar;
