import React, { useEffect, useState } from "react";

const Projects = () => {
  const [currentButton, setcurrentButton] = useState(1);

  const [sliders, setSliders] = useState();
  const [positions, setPositions] = useState([]);

  const selectCurrentButton = (currentIndex) => {
    /* const currenB = props.target.attributes[0].value;
    setcurrentButton(currenB); */
    console.log(sliders);
    setcurrentButton(currentIndex);
  };

  const Checked = () => {
    let array = [];
    for (let i = 1; i < 6; i++) {
      array.push(
        <input
          key={i}
          data_push={`${i !== currentButton ? null : "Active"}`}
          type="button"
          position={i}
          className={`${i !== currentButton ? "" : "activeButton"}`}
          onClick={function onClick() {
            return selectCurrentButton(i);
          }}
        />
      );
    }
    return array;
  };

  const Cards = () => {
    const cards = [];
  };
  useEffect(() => {
    const posCards = [`${currentButton === 1 ? "item pos1" : "item pos2"}`];

    setPositions(posCards);

    for (let i = 0; i < 6; i++) {
      console.log(currentButton);
    }
  }, [currentButton]);

  return (
    <>
      <div className="secction_projects">
        <div className="carousel__content">
          <div className="cards__content">
            <Checked />
            {/* <input
              type="button"
              position="1"
              className={`${i !== i ? "activeButton" : ""}`}
              onClick={Checked(i)}
            /> */}
            <main id="carousel" sliders={sliders}>
              <div className={"item pos" + currentButton + ""} style={{}}>
                <div className="head__card">Proyecto 1</div>
                <div className="body__card">
                  <div className="image_project"></div>
                  <div className="description_project">
                    <p>lorem</p>
                  </div>
                </div>
                <div className="footer__card"></div>
              </div>
              <div className={"item pos" + currentButton + ""} style={{}}>
                <div className="head__card">Proyecto 2</div>
                <div className="body__card">
                  <div className="image_project"></div>
                  <div className="description_project">
                    <p>lorem</p>
                  </div>
                </div>
                <div className="footer__card"></div>
              </div>
              <div className={"item pos" + currentButton + ""}>
                <div className="head__card">Proyecto 3</div>
                <div className="body__card">
                  <div className="image_project"></div>
                  <div className="description_project">
                    <p>lorem</p>
                  </div>
                </div>
                <div className="footer__card"></div>
              </div>
              <div className={"item pos" + currentButton + ""}>
                <div className="head__card">Proyecto 4</div>
                <div className="body__card">
                  <div className="image_project"></div>
                  <div className="description_project">
                    <p>lorem</p>
                  </div>
                </div>
                <div className="footer__card"></div>
              </div>
              <div className={"item pos" + currentButton + ""}>
                <div className="head__card">Proyecto 5</div>
                <div className="body__card">
                  <div className="image_project"></div>
                  <div className="description_project">
                    <p>lorem</p>
                  </div>
                </div>
                <div className="footer__card"></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
