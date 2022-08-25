import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, isLoading, isError } = useFetchGifs(category);

  return (
    <>
      {isLoading ? (
        <>
          <h3>{category}</h3>
          <h3>Loading...</h3>
        </>
      ) : isError ? (
        <h3>Error!!</h3>
      ) : (
        <>
          <h3>{category}</h3>
          <div className="card-grid">
            {images &&
              images.map((image) => {
                return <GifGridItem key={image.id} {...image} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
