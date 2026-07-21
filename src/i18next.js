import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { uz } from "./lang/uz";
import { ru } from "./lang/ru";
i18next.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
    uz: {
      translation: uz,
    },
  },
  lang: localStorage.getItem("language") || "ru",

  fallbackLng: "ru",

  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
