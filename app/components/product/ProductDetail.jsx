import React from "react";

import { ProductSlideshow } from "@/app/components/product/ProductSlideshow";
import { Box, Button, Grid, Typography, Chip } from "@mui/material";
import { ItemCounter } from "../UI/itemCounter.tsx/ItemCounter";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());

  return (
    <section className="mt-8">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <ProductSlideshow images={item.images} />
        </Grid>
        <Grid item xs={12} sm={7} >
          <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="h2" >
              {item.title}
            </Typography>
            <Typography variant="h4" >
             Precio:  ${item.price}
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2" component={"p"}>
                Cantidad
              </Typography>
              <ItemCounter />
            </Box>
            <Button color="primary" className="circular-btn">
              Agregar a carrito
            </Button>
            <Chip label="No hay disponible" color="error" variant="outlined" className="w-[260px]"/>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1">Descripción</Typography>
            <Typography variant="body2" component={"p"}>
              {item.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProductDetail;
