import { useState } from "react";
import { productDetal } from "../../constants";
import "./ProductDetalGallery.scss";

export const ProductDetalGallery = () => {
  const [activeImg, setActiveImg] = useState(productDetal.images[0]);

  return (
    <div className="gallery">
      <div className="gallery-left">
        {productDetal.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`thumb ${activeImg === image ? "active" : ""}`}
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
