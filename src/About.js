import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <b>{t("aboutInfoText")}</b>
    </>
  );
};

export default About;
