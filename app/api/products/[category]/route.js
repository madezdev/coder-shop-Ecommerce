import { NextResponse } from "next/server";
import { initialData } from "@/app/database/products";

export async function GET(_, { params }) {
  const { category } = params;

  const data =
    category === "all"
      ? initialData
      : initialData.products.filter((product) => product.gender === category);

  return NextResponse.json(data);
}
