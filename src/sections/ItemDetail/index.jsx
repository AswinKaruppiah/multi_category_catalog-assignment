"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import { CatalogContext } from "@/provider/CatalogContext";

export default function ItemDetail({ item: itemProp }) {
  const { selectedItem, setSelectedItem } = useContext(CatalogContext);
  const item = selectedItem ?? itemProp;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => setSelectedItem(null);
  }, []);

  return (
    <div className="py-4">
      <div className="">
        {/* Image Section */}
        <div className="w-full relative group">
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full rounded-xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.itemname}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:max-w-xl flex flex-col justify-center py-6">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50/80 text-indigo-600 text-xs font-bold tracking-[0.2em] uppercase border border-indigo-100/50 shadow-sm">
              {item.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            {item.itemname}
          </h1>

          <div className="space-y-6 sm:space-y-8 w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-[0.15em] whitespace-nowrap">
                Key Specifications
              </h2>
              <div className="h-px bg-gray-200/80 grow"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {item.itemprops.map((prop) => (
                <div
                  key={prop.label}
                  className="group/card relative overflow-hidden bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-50/0 to-indigo-50/0 group-hover/card:from-indigo-50/40 group-hover/card:to-transparent transition-colors duration-300" />
                  <dt className="relative text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                    {prop.label}
                  </dt>
                  <dd className="relative text-base sm:text-lg font-bold text-gray-900">
                    {prop.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
