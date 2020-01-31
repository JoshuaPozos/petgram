import React, { Fragment, useEffect, useRef, useState } from "react";
import { Article, ImageWraper, Img, Button } from "./styles";
import { GiSelfLove } from "react-icons/gi";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function() {
      Promise.resolve(
        typeof window.IntersectionObserver != "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function(entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(ref.current);
      });
    },
    [ref]
  );

  return (
    <Article ref={ref}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImageWraper>
              <Img src={src} atl={id} />
            </ImageWraper>
          </a>
          <Button>
            <GiSelfLove size="32px" />
            {likes} Likes!{" "}
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
