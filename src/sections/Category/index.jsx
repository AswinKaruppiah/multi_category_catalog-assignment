import Image from "next/image";
import Link from "next/link";

export default async function CategoryOverview({ items, id }) {
  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-5">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize">
          {id}
        </h1>
        <p className="text-sm text-gray-400 mt-1">{items.length} items</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {items.map((item) => (
          <Link
            key={item.itemname}
            href={`/category/${id}/${encodeURIComponent(item.itemname)}`}
            className="bg-white group rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-44 bg-gray-50">
              <Image
                src={item.image}
                alt={item.itemname}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            </div>
            <div className="p-4">
              <h2 className="text-sm font-semibold text-gray-800 truncate">
                {item.itemname}
              </h2>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.itemprops.map((prop) => (
                  <span
                    key={prop.label}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-linear-to-r from-orange-100 to-amber-100 text-xs border border-orange-200"
                  >
                    <span className="text-orange-400">{prop.label}:</span>
                    <span className="font-semibold text-orange-600">
                      {prop.value}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
