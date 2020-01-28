import React from "react";
import { ImageWraper, Img, Button } from "./styles";
import { GiSelfLove } from "react-icons/gi";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWraper>
          <Img src={src} atl={id} />
        </ImageWraper>
      </a>
      <Button>
        <GiSelfLove size="32px" />
        {likes} Likes!{" "}
      </Button>
    </article>
  );
};
