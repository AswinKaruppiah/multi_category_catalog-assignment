"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { CatalogContext } from "@/provider/CatalogContext";
import { DefaultCategoryIcon } from "@/utils/icons";
import { CATEGORY_ICONS } from "@/utils/constants";
import { CloseIcon } from "./icon";

export default function Sidebar() {
  const { catalog, isSidebarOpen, setIsSidebarOpen } =
    useContext(CatalogContext);
  const categories = Object.values(catalog);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/50 transition-opacity md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col shrink-0 overflow-hidden transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-5 px-3 flex justify-between items-center">
          <span className="text-[19px] font-display text-gray-900 leading-none tracking-tight select-none">
            Catalog
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>
        {/* ── Nav ── */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-2 py-1">
          <p className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            Categories
          </p>
          {categories.map((cat) => {
            const href = `/category/${cat.id.toLowerCase()}`;
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            const Icon = CATEGORY_ICONS[cat.id] ?? DefaultCategoryIcon;
            return (
              <Link
                key={cat.id}
                href={href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex group items-center gap-3 px-2 py-2 mb-0.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-orange-50 text-orange-500"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                <span
                  className={`shrink-0 ${isActive ? "text-orange-500" : "text-gray-400"}`}
                >
                  {<Icon />}
                </span>
                <span className="flex-1 text-[13px] font-medium">
                  {cat.label}
                </span>
                <span
                  className={`text-[11px] font-semibold px-1.5 group-hover:bg-white py-0.5 rounded-md tabular-nums ${
                    isActive
                      ? "bg-orange-100 text-orange-500"
                      : "bg-gray-100  text-gray-400"
                  }`}
                >
                  {cat.items.length}
                </span>
              </Link>
            );
          })}
        </div>
        {/* ── User profile ── */}
        <div className="border-t border-gray-200 p-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[11px] font-bold text-white shrink-0 select-none">
            Ak
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sm font-semibold text-gray-800 truncate leading-tight">
              Aswinth k
            </span>
            <span className="text-[11px] text-gray-400 leading-tight">
              aswinth27@outlook.com
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
