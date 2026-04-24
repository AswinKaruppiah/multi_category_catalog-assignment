"use client";

import { groupByCategory } from "@/utils/helpers";
import { createContext, useState } from "react";
import catalogData from "../utils/data.json";

export const CatalogContext = createContext(null);

export function CatalogProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const catalog = groupByCategory(catalogData);

  return (
    <CatalogContext.Provider
      value={{
        catalog,
        activeCategory,
        setActiveCategory,
        activeItem,
        setActiveItem,
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
}
