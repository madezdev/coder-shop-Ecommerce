import { NextResponse } from "next/server";
import { initialData } from "@/app/database/products";

export async function GET(_, { params }) {
    const { slug } = params
    const data = initialData.products.find(product => product.slug === slug)

    return NextResponse.json(data)
}