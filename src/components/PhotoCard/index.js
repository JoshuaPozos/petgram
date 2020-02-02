import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImageWraper, Img, Button } from "./styles";
import { GiSelfLove } from "react-icons/gi";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImageWraper>
              <Img src={src} atl={id} />
            </ImageWraper>
          </a>
          <Button liked={liked && true} onClick={() => setLiked(!liked)}>
            <GiSelfLove size="32px" />
            {likes} Likes!{" "}
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
