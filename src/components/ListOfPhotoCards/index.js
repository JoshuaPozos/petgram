import React from "react";
import { PhotoCard } from "../PhotoCard";
import { List, Item } from "./styles";

export const ListOfPhotoCards = () => (
  <List>
    {[1, 2, 3, 4, 5].map(photocard => (
      <Item key={photocard}>
        <PhotoCard />
      </Item>
    ))}
  </List>
);
