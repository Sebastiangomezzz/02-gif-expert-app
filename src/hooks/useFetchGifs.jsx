import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getImages = async () => {
    setIsLoading(true);
    try {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    } catch (error) {
        setIsError(true);
        setIsLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading, isError };
};
