import { productDetal } from "../../constants/productDetal";
import "./ProductDetalXaraktrika.scss";

export const ProductDetalXaraktrika = ({ product }) => {
  return (
    <>
      <div className="xaraktrika">
        <div className="xaraktrika-grid">
          {productDetal.xaraktrika.map((item, el) => (
            <div key={el} className="xaraktrika-item">
              <p>{item.label}</p>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {productDetal.nearby && (
          <div className="xaraktrika-nearby">
            <p>Рядом есть</p>
            <span>{productDetal.nearby.join(", ")}</span>
          </div>
        )}

        <div className="description">
          <p>{product.description}</p>
        </div>

        <div className="views">
          Просмотры: {productDetal.views}
          <p>Пожаловатся</p>
        </div>
      </div>
    </>
  );
};
