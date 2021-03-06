import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      headerContact: "CONTACT US",
      headerHome: "HOME",
      headerAbout: "ABOUT US",
      contactInfoText: "this is the contact page",
      homeInfoText: "this is the home page",
      aboutInfoText: "this is the about page"
    }
  },
  fi: {
    translation: {
      headerContact: "OTA YHTEYTTÄ",
      headerHome: "ETUSIVU",
      headerAbout: "TIETOA MEISTÄ",
      contactInfoText: "tämä on yhteydenottosivu",
      homeInfoText: "tämä on kotisivu",
      aboutInfoText: "tämä on infosivu"
    }
  },
  swe: {
    translation: {
      headerContact: "KONTAKT OSS",
      headerHome: "HEMSIDA",
      headerAbout: "MER FRÅN OSS",
      contactInfoText: "det är en contact page",
      homeInfoText: "det är en hemsida",
      aboutInfoText: "det är en about page"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "swe",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
