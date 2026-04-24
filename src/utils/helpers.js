export function groupByCategory(items) {
  return items.reduce((acc, item) => {
    const cat = item.category;
    if (!acc[cat]) acc[cat] = { id: cat, label: cat, items: [] };
    acc[cat].items.push(item);
    return acc;
  }, {});
}
