import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <b>{t("homeInfoText")}</b>
    </>
  );
};

export default Home;
