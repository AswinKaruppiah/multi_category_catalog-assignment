import CategoryOverview from "@/sections/Category";
import catalogData from "@/utils/data.json";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const label = id.charAt(0).toUpperCase() + id.slice(1).toLowerCase();
  const count = catalogData.filter(
    (item) => item.category.toLowerCase() === id.toLowerCase(),
  ).length;

  return {
    title: `${label} | Catalog`,
    description: `Browse ${count} items in ${label}`,
  };
}

export default async function CategoryPage({ params }) {
  const { id } = await params;
  const items = catalogData.filter(
    (item) => item.category.toLowerCase() === id.toLowerCase(),
  );

  return <CategoryOverview items={items} id={id} />;
}
