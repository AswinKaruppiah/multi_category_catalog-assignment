import { notFound } from "next/navigation";
import ItemDetail from "@/sections/ItemDetail";
import catalogData from "@/utils/data.json";

export async function generateMetadata({ params }) {
  const { id, item } = await params;
  const itemName = decodeURIComponent(item);
  const found = catalogData.find(
    (d) =>
      d.category.toLowerCase() === id.toLowerCase() &&
      d.itemname === itemName,
  );

  if (!found) return {};

  return {
    title: `${found.itemname} | ${found.category} | Catalog`,
    description: `View details for ${found.itemname}`,
  };
}

export default async function ItemPage({ params }) {
  const { id, item } = await params;
  const itemName = decodeURIComponent(item);
  const found = catalogData.find(
    (d) =>
      d.category.toLowerCase() === id.toLowerCase() &&
      d.itemname === itemName,
  );

  if (!found) notFound();

  return <ItemDetail item={found} categoryId={id} />;
}
