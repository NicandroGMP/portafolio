import React from "react";
import { About, Habilities } from "sections";
import { FullPage, Slide } from "react-full-page/lib";

const AppBody = () => {
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
