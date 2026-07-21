import "./CategoriaPage.scss";
import { categoriaLink } from "../../constants/categoriaLink";
export const CategoriaPage = () => {
  return (
    <div className=" container ">
      <div className="cards">
        {categoriaLink.map((item) => {
          const Icon = item.icon;
          return (
            <div className="barel" key={item.title}>
              <div className="card">
                <Icon />
              </div>
              <p className="card-title">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
