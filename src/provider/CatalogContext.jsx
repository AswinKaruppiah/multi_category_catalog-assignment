"use client";

import { groupByCategory } from "@/utils/helpers";
import { createContext, useState } from "react";
import catalogData from "../utils/data.json";

export const CatalogContext = createContext(null);

export function CatalogProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const catalog = groupByCategory(catalogData);

  return (
    <CatalogContext.Provider
      value={{
        catalog,
        isSidebarOpen,
        setIsSidebarOpen
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
