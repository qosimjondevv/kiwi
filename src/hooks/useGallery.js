import { useEffect, useState } from "react";

export const useGallery = () => {
  const [activeImg, setActiveImg] = useState(product?.images?.[0]);

  useEffect(() => {
    setActiveImg(product?.images?.[0]);
  }, [product]);

  return { activeImg, setActiveImg };
};
