import "./ProductCards.scss";
import rasm from "../../assets/img/taoyta.png";
import { useState } from "react";
import { heroLink } from "../../constants";
export const ProductCards = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="container product-Card">
        <div className="tabs">
          {heroLink.map((tab, e) => (
            <button
              key={tab}
              className={activeTab === e ? "active" : ""}
              onClick={() => setActiveTab(e)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="line"></div>

        <div className="productCards">
          <div className="productCard">
            <img src={rasm} alt="" />
            <div className="text">
              <h5 className="descripition">Toyota Camry, 2002</h5>
              <p className="time">Вчера 22:55</p>
              <h5 className="price">39 000 000 сум</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
