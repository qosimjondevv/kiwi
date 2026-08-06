import "./ProductDetalGallery.scss";
import classNames from "classnames";

export const ProductDetalGallery = ({ product, activeImg, onSelectImg }) => {
  return (
    <div className="gallery">
      <div className="gallery-left">
        {product.images.map((image, imgI) => (
          <img
            key={imgI}
            src={image}
            alt=""
            className={classNames("thumb", { active: activeImg === image })}
            onClick={() => onSelectImg(image)}
          />
        ))}
      </div>

      <div className="gallery-right">
        <img src={activeImg} alt="" className="mainImage" />
      </div>
    </div>
  );
};
