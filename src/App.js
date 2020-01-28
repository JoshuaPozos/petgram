import React, { Fragment } from "react";
import { GlobalStyles } from "./GlobalStyles";

import { ListOfCategories } from "./components/ListOfCategories";

import { ListOfPhotoCards } from "./components/ListOfPhotoCards";

export const App = () => (
  <Fragment>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards />
  </Fragment>
);
