import "./ProductCards.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ProductCards = ({ labels, items, activeTab, onTabChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container product-Card">
        <div className="tabs">
          {labels.map((lab, e) => (
            <button
              key={lab}
              className={classNames({ active: activeTab === e })}
              onClick={() => onTabChange(e)}
            >
              {lab}
            </button>
          ))}
        </div>

        {/* <div className="line"></div> */}

        <div className="productCards">
          {items.map((item) => (
            <Link to={`/product/${item.id}`} className="card" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="text">
                <h5 className="description">{item.title}</h5>
                <p className="time">{item.category}</p>
                <h5 className="price">{item.price} $</h5>
              </div>
            </Link>
          ))}
        </div>

        <div className="showMore">
          <button>
            {t("showMore")} <span>⌄</span>
          </button>
        </div>
      </div>
    </>
  );
};
