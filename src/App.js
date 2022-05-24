import React from "react";
import "./styles.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Header from "./Header";
import Picture from "./leaves-g37184fb49_1920.jpg";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <img
        src={Picture}
        alt="Leaves"
        width="1440px"
        height="324px"
        left="0px"
        top="73px"
        opacity="80%"
        max-width="100%"
      />
      <Switch>
        <Route exact from="/home" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route exact path="/about" render={(props) => <About {...props} />} />
      </Switch>
    </div>
  );
}
