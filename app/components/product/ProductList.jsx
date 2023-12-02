import { ProductCard } from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = async ({ category }) => {
  const items = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "force-cache",
  }).then((r) => r.json());

  return (
    <Grid container spacing={4} className="mt-4">
      {items.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
