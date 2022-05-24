import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import "./i18n";

import EnglishButton from "./EnglishButton";
import SwedishButton from "./SwedishButton";
import FinnishButton from "./FinnishButton";

const Header = (props) => {
  const { history } = props;

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const { i18n } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#2B393F" }}>
        <Toolbar>
          <Grid
            container
            spacing="0"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/contact")}
                fontWeight="bold"
              >
                <b>CONTACT</b>
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/home")}
              >
                <b>HOME</b>
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/about")}
              >
                <b>ABOUT</b>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing="0"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item>
              <FinnishButton onClick={() => i18n.changeLanguage("fi")} />
            </Grid>
            <Grid item>
              <EnglishButton onClick={() => i18n.changeLanguage("en")} />
            </Grid>
            <Grid item>
              <SwedishButton />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default withRouter(Header);
