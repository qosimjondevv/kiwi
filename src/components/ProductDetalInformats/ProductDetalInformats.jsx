import { productDetal } from "../../constants/productDetal";
import { ProductDetalXaraktrika } from "../ProductDetalXaraktrika";
import "./ProductDetalInformats.scss";

export const ProductDetalInformats = ({ product }) => {
  return (
    <>
      <div className="productDetalInfor">
        <div className="productInfo-date">
          Артикул: {product.id}
          <div className="productInfo-added">
            <h4> обновлено:</h4> {productDetal.updated} <h4>добавлено:</h4>
            {productDetal.added}
          </div>
        </div>

        <div className="productInfo-price">{product.price} $</div>

        <p className="productInfo-location">{product.brand}</p>

        <div className="pruductInfo-seller">
          {productDetal.seller.phone.map((phone, index) => (
            <div className="phoneBtn" key={index}>
              <span>{phone}</span>
              <button>Показать полностью</button>
            </div>
          ))}
        </div>

        <p className="productInfo-author">
          Автор обьявлении: <span>{product.category}</span>
        </p>

        <div className="productInfo-actions">
          <button className="btn-call">Написать автору</button>
          <button className="btn-price">Предложить свою цену</button>
        </div>

        <ProductDetalXaraktrika product={product} />
      </div>
    </>
  );
};
  