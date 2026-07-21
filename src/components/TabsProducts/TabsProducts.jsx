import { useState } from "react";
import "./TabsProducts.scss";
import { tabsLink, tabsProducts } from "../../constants";

export const TabsProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container tabsProduct">
      <div className="tabs">
        {tabsLink.map((tab, e) => (
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
        {tabsProducts.map((item) => (
          <div className="productCard" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="text">
              <h5 className="descripition">{item.title}</h5>
              <p className="time">{item.time}</p>
              <h5 className="price">{item.price}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="showMore">
        <button>
          Показать еще <span>⌄</span>
        </button>
      </div>
    </div>
  );
};
