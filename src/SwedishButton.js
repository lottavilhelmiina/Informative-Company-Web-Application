import IconButton from "@material-ui/core/IconButton";
import SwedishIcon from "./swe_icon.png";
import { useTranslation } from "react-i18next";
import "./i18n";

const SwedishButton = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <IconButton onClick={() => i18n.changeLanguage("swe")}>
        <img src={SwedishIcon} alt="swedish flag" width="20" />
      </IconButton>
    </>
  );
};

export default SwedishButton;
