import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import "./i18n";
import EnglishIcon from "./eng_icon.png";

const EnglishButton = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <IconButton onClick={() => i18n.changeLanguage("en")}>
        <img src={EnglishIcon} alt="english flag" width="20" />
      </IconButton>
    </>
  );
};

export default EnglishButton;
