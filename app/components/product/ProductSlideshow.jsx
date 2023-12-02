'use client'
import React, { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./ProductSlideshow.module.css";



export const ProductSlideshow = ({ images }) => {
  return (
    <Slide
      easing="ease"
      transitionDuration={1000}
      infinite={true}
      indicators={true}
      arrows={true}
    >
      {images.map((image) => {
        const url = `/products/${image}`;
        return (
          <div className={styles["each-slide"]} key={image}>
            <div
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        );
      })}
    </Slide>
  );
};
