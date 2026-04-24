import { NextResponse } from "next/server";
import catalogData from "./utils/data.json";
import { groupByCategory } from "./utils/helpers";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // only run on home route
  if (pathname === "/") {
    const catalog = groupByCategory(catalogData);
    const firstCategory = Object.values(catalog)[0];

    if (firstCategory) {
      const url = request.nextUrl.clone();
      url.pathname = `/category/${firstCategory.id.toLowerCase()}`;

      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
