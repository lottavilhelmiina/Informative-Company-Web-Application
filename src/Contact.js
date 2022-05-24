import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <b>{t("contactInfoText")}</b>
    </>
  );
};

export default Contact;
