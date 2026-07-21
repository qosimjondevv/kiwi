import { productDetal } from "../../constants/productDetal";
import { ProductDetalXaraktrika } from "../ProductDetalXaraktrika";
import "./ProductDetalInformats.scss";

export const ProductDetalInformats = () => {
  return (
    <>
      <div className="productDetalInfor">
        <div className="productInfo-date">
          {productDetal.code}
          <div className="productInfo-added">
            <h4> обновлено:</h4> {productDetal.updated} <h4>добавлено:</h4>{" "}
            {productDetal.added}
          </div>
        </div>

        <div className="productInfo-price">
          {productDetal.price} {productDetal.currency}
        </div>

        <p className="productInfo-location">{productDetal.locarion}</p>

        <div className="pruductInfo-seller">
          {productDetal.seller.phone.map((phone, index) => (
            <div className="phoneBtn" key={index}>
              <span>{phone}</span>
              <button>Показать полностью</button>
            </div>
          ))}
        </div>

        <p className="productInfo-author">
          Автор обьявлении: <span>{productDetal.seller.name}</span>
        </p>

        <div className="productInfo-actions">
          <button className="btn-call">Написать автору</button>
          <button className="btn-price">Предложить свою цену</button>
        </div>

        <ProductDetalXaraktrika />
      </div>
    </>
  );
};
