import "./ProductCards.scss";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export const ProductCards = ({ labels, items }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="container product-Card">
        <div className="tabs">
          {labels.map((lab, e) => (
            <button
              key={lab}
              className={classNames({ active: activeTab === e })}
              onClick={() => setActiveTab(e)}
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
            Показать еще <span>⌄</span>
          </button>
        </div>
      </div>
    </>
  );
};
