"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";


export const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered ? `/products/${ product.images[1] }` : `/products/${ product.images[0] }`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={3}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <article className=" flex flex-col">
        <Card className="rounded-lg shadow-lg">
          <Link href={`/product/detail/${product.slug}`} prefetch={false}>
            <CardActionArea>
              <CardMedia
                className="fadeIn"
                component="img"
                height="120"
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </Card>
        <Box sx={{ mt: 1 }} className="fadeIn">
          <Typography fontWeight={700} variant="h6">{product.title}</Typography>
          <Typography fontWeight={500} variant="h6">{`$${product.price}`}</Typography>
        </Box>

      </article>
    </Grid>
  );
};
