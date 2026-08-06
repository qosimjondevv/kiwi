import "./Navbar.scss";
import logo from "../../assets/img/logo.svg";
import { navbarLink } from "../../constants/navbarLink";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
import { Menu } from "lucide-react";
// import { useTheme } from "../../context/ThemeContext";

export const Navbar = ({ shadow = true }) => {
  // const { theme, toggleTheme } = useTheme();
  const [burgerOpen, setBurgerOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("language", lng);
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

        {/* <button onClick={toggleTheme}>{theme === "light" ? "🎆" : "😂"}</button> */}

        <div className="lang">
          <button onClick={() => changeLanguage("ru")}>
            {t("navbarLangRu")}
          </button>
          <span> | </span>
          <button onClick={() => changeLanguage("uz")}>
            {t("navbarLangUz")}
          </button>
        </div>
        <div className="regiter">
          <button>{t("navbarEntranc")}</button>
          <span>|</span>
          <button onClick={() => navigate("/register")}>
            {t("navbarRegistr")}
          </button>
        </div>

        {/* ///////////////////////// b */}
        <button
          className="burger-menu"
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          <Menu />
        </button>

        {burgerOpen && (
          <div className="mobilMenu">
            {navbarLink.map((page) => (
              <button key={page}>{page}</button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
