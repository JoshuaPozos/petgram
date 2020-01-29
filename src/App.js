import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo";

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
