import { useEffect, useState } from "react";
import "./ProductDetalGallery.scss";
import classNames from "classnames";

export const ProductDetalGallery = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.images[0]);

  useEffect(() => {
    setActiveImg(product.images[0]);
  }, [product]);

  return (
    <div className="gallery">
      <div className="gallery-left">
        {product.images.map((image, imgI) => (
          <img
            key={imgI}
            src={image}
            alt=""
            className={classNames("thumb", { active: activeImg === image })}
            onClick={() => setActiveImg(image)}
          />
        ))}
      </div>

      <div className="gallery-right">
        <img src={activeImg} alt="" className="mainImage" />
      </div>
    </div>
  );
};
