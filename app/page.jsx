import { Suspense } from "react";
import ProductList from "./components/product/ProductList";

export default function HomPage({ params }) {
  const { category } = { category: "all" };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList category={category} />
      </Suspense>
    </>
  );
}
