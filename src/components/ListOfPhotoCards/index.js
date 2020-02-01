import React from "react";
import { PhotoCard } from "../PhotoCard";
import { List, Item } from "./styles";

export const ListOfPhotoCards = () => (
  <List>
    {[1, 2, 3, 4, 5].map(id => (
      <Item key={id}>
        <PhotoCard id={id} />
      </Item>
    ))}
  </List>
);
