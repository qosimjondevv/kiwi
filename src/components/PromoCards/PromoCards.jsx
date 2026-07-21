import "./PromoCards.scss";
import { promoCards } from "../../constants/promoCards";

export const PromoCards = () => {
  return (
    <div className="blue">
      <div className="container promo-cards">
        {promoCards.map((item) => (
          <div
            className="promoCard"
            key={item.id}
            style={{
              background: `linear-gradient(120deg, ${item.colorFrom} 55%, ${item.colorTo} 55%)`,
            }}
          >
            <div className="promoCard-text">
              <h4>{item.title}</h4>
              <p>
                {item.count} объявлений <span>›</span>
              </p>
            </div>
            <img src={item.img} alt={item.title} className="promoCard-img" />
          </div>
        ))}
      </div>
    </div>
  );
};
