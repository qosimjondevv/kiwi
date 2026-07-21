import "./Navbar.scss";
import logo from "../../assets/img/logo.svg";
import { navbarLink } from "../../constants/navbarLink";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const Navbar = ({ shadow = true }) => {
  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };
  const navigate = useNavigate();

  const { t } = useTranslation();
  return (
    <nav className={`navbar ${shadow ? "shadow" : ""}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="KIWI logo" />
          </Link>

          <p>{t("navbartext")}</p>
        </div>
        <div className="pages">
          {navbarLink.map((page) => (
            <button key={page}>{page}</button>
          ))}
        </div>
        <div className="lang">
          <button onClick={() => changeLanguage("ru")}>Рус</button>
          <span> | </span>
          <button onClick={() => changeLanguage("uz")}> O’z</button>
        </div>
        <div className="regiter">
          <button>Вход</button>
          <span>|</span>
          <button onClick={() => navigate("/register")}>Регистрация</button>
        </div>
      </div>
    </nav>
  );
};
