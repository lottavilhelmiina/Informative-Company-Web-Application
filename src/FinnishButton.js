import IconButton from "@material-ui/core/IconButton";
import { useTranslation } from "react-i18next";
import "./i18n";
import FinnishIcon from "./fin_icon.png";

const FinnishButton = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <IconButton onClick={() => i18n.changeLanguage("fi")}>
        <img src={FinnishIcon} alt="finnish flag" width="20" />
      </IconButton>
    </>
  );
};

export default FinnishButton;
