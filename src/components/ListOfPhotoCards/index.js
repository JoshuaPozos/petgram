import React from "react";
import { PhotoCard } from "../PhotoCard";
import { List, Item } from "./styles";

import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`);

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <List>
      {photos.map(photo => (
        <Item key={photo.id}>
          <PhotoCard {...photo} />
        </Item>
      ))}
    </List>
  );
};

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
