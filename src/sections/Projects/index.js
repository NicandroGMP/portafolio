import React, { useState } from "react";

const Projects = () => {
  const [currentButton, setcurrentButton] = useState(1);

  const selectCurrentButton = (currentIndex) => {
    /* const currenB = props.target.attributes[0].value;
    setcurrentButton(currenB); */
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
          className={`${i !== currentButton ? "navinput" : " activeButton"}`}
          onClick={function onClick() {
            return selectCurrentButton(i);
          }}
        />
      );
    }
    return array;
  };

  return (
    <>
      <div className="secction_projects">
        <div className="carousel__content">
          <div className="cards__content">
            {/* <input
              type="button"
              position="1"
              className={`${i !== i ? "activeButton" : ""}`}
              onClick={Checked(i)}
            /> */}
            <main id="carousel">
              <div className={"item pos" + currentButton + ""} style={{}}>
                <div className="head__card">Proyecto Bebacalar</div>
                <div className="body__card">
                  <div className="image_project">
                    <img
                      src="/assets/images/ProyectBacalar.png"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div className="description_project">
                    <p>
                      Creación de landing page para inmobiliaria Bebacalar,
                      utilizando las tecnologias de HTML, CSS, JS.
                    </p>
                  </div>
                </div>
                <div className="footer__card">
                  <a
                    href="https://bebacalar.herokuapp.com/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Demo
                  </a>
                </div>
              </div>
              <div className={"item pos" + currentButton + ""} style={{}}>
                <div className="head__card">Proyecto Rancherita del aire</div>
                <div className="body__card">
                  <div className="image_project">
                    <img
                      src="/assets/images/ProyectoRancherita.png"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div className="description_project">
                    <p>
                      Desarrollo de sitio de noticias se realizo la Maquetacion
                      y consumo de API, empleando las siguientes tecnologias,
                      HTML, CSS, Javascript y Codeigniter 4.
                    </p>
                  </div>
                </div>
                <div className="footer__card">
                  <a
                    href="https://rancherita.com.mx/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Demo
                  </a>
                </div>
              </div>
              <div className={"item pos" + currentButton + ""}>
                <div className="head__card">Proyecto Cabo Norte</div>
                <div className="body__card">
                  <div className="image_project">
                    <img
                      src="/assets/images/ProyectoCabo.png"
                      width={"100%"}
                      alt=""
                    />
                  </div>
                  <div className="description_project">
                    <p>
                      Desarrollo de crm, registro, control de entradas y salidas
                      de trabajadores y proveedores con scanner Qr. Emplando las
                      siguientes tecnologias, Frontend: React js y MUI. Backend
                      php(codeigniter 4) para la implentacion de la API, mysql
                      para la base de datos
                    </p>
                  </div>
                </div>
                <div className="footer__card">
                  {" "}
                  <a
                    href="https://cabo-norte.vercel.app"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Demo
                  </a>
                </div>
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
            <div className="button_groups">
              <Checked />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
