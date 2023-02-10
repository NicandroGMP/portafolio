import React from "react";
import { About, Habilities, Projects } from "sections";
import { FullPage, Slide } from "react-full-page/lib";
import PropTypes from "prop-types";

class CustomControls extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    getCurrentSlideIndex: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    scrollToSlide: PropTypes.func.isRequired,
    slidesCount: PropTypes.number.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: "full-page-controls",
  };

  renderSlidesNumbers(currentSlideIndex) {
    const { slidesCount, scrollToSlide } = this.props;
    const slidesNumbers = [];
    for (let i = 0; i < slidesCount; i++) {
      const buttonProps = {
        className: `${
          i !== currentSlideIndex ? "SliderNumber" : "Active SliderNumber"
        }`,
        data_push: i !== currentSlideIndex ? "" : "Active",
        disabled: currentSlideIndex === i,
        key: i,
        onClick: function onClick() {
          return scrollToSlide(i);
        },
      };
      slidesNumbers.push(
        <button type="button" {...buttonProps}>
          {i + 1}
        </button>
      );
    }
    return slidesNumbers;
  }

  render() {
    const { getCurrentSlideIndex, slidesCount, style, className } = this.props;
    const currentSlideIndex = getCurrentSlideIndex();

    return (
      <div className={className} style={style}>
        <button
          type="button"
          disabled={currentSlideIndex === 0}
          onClick={this.props.onPrev}
          className="prev"
        >
          previous
        </button>
        {this.renderSlidesNumbers(currentSlideIndex)}
        <button
          className="next"
          type="button"
          disabled={currentSlideIndex === slidesCount - 1}
          onClick={this.props.onNext}
        >
          next
        </button>
      </div>
    );
  }
}
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
        controls={CustomControls}
        controlsProps={{ className: "controlsNav" }}
      >
        <Slide>
          <About />
        </Slide>
        <Slide>
          <Habilities />
        </Slide>
        <Slide>
          <Projects />
        </Slide>
      </FullPage>
    </>
  );
};

export default AppBody;
