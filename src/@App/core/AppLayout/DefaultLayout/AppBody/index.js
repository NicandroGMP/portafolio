import PropTypes from "prop-types"; // ES6
import React, { useRef, useEffect, useState, useCallback } from "react";
import { About, Habilities } from "sections";
import { Navbar } from "@App/core/AppLayout/Components";
import { FullPage, Slide } from "react-full-page/lib";

const AppBody = () => {
  const [CurrrentPosition, SetCurrentPosition] = useState(0);
  const [ActionScroll, SetActionScroll] = useState("Up");
  /*   const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }; */
  /*   window.onscroll = function () {
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    SetCurrentPosition(scroll);
    if (scroll > CurrrentPosition) {
      SetActionScroll("Down");
    } else {
      SetActionScroll("Up");
    }
  };

  useEffect(() => {
    if (ActionScroll === "Down") {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }, [ActionScroll]); */

  useEffect(() => {}, []);
  return (
    <>
      <FullPage
        duration={400}
        controls
        controlsProps={{ className: "controlsNav" }}
      >
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Habilities />
        </Slide>
        <Slide>
          <div>Nes</div>
        </Slide>
      </FullPage>
    </>
  );
};

export default AppBody;
