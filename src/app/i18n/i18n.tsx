import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        hello: "Hello, World!",
      },
    },
    ar: {
      translations: {
        hello: "مرحبا بالعالم!",
      },
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
