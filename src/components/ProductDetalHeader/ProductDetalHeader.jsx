import "./ProductDetalHeader.scss";
import { productCityName, productDetal } from "../../constants";
import { Link } from "react-router-dom";

export const ProductDetalHeader = () => {
  return (
    <>
      <div className="productDetalHeader container">
        <div className="cityName">
          {productCityName.map((item, el) => (
            <Link key={el} to={item.path || "#"} className="linkText">
              {item.label}
            </Link>
          ))}
        </div>
        <h1 className="productDetal-title">{productDetal.title}</h1>
      </div>
    </>
  );
};
