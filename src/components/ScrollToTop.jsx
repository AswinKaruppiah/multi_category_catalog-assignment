"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const isDetailPage = pathname.startsWith('/category/') && pathname.split('/').length >= 4;
    
    if (isDetailPage) {
      const container = document.getElementById("main-scroll-container");
      if (container) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
}
