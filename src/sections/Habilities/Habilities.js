import React, { useState } from "react";
import FrontSkills from "./Components/FrontSkills";
import BackendSkills from "./Components/BackSkills";
import DataBaseSkills from "./Components/DataBaseSkills";
import OtherSkills from "./Components/OthersSkills";

const Habilities = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showSkills, getShowSkills] = useState(null);
  const ModalSkills = ["Frontend", "Backend", "DB", "Other"];

  const ModalShow = (s) => {
    getShowSkills(s);
    setOpenModal(true);
  };

  return (
    <>
      <div className="skills__main">
        <div className="header__section__skills">
          <div className="skills-content">
            <h1 className="title">MIS HABILIDADES</h1>
          </div>
          <h4 className="subtitle">
            Aquí hay algunas tecnologías con las que he estado trabajando
            recientemente:
          </h4>
        </div>
        <div className="content_Skills content__cards_skills">
          <FrontSkills />
          <BackendSkills />
          <DataBaseSkills />
          <OtherSkills />
        </div>
        <div className="main__skills__movile">
          {ModalSkills.map((skills) => {
            return (
              <>
                <button
                  onClick={() => {
                    ModalShow(skills);
                  }}
                >
                  <span>{"<" + skills + "/>"}</span>
                </button>
              </>
            );
          })}
        </div>
      </div>

      <div
        className="Modal"
        style={{
          display: `${openModal === false ? "none" : "block"}`,
        }}
      >
        <div
          className="cover_modal"
          onClick={() => {
            setOpenModal(false);
          }}
        ></div>
        <div className="modal__Content">
          <div className="modal__header">
            <span>{"<frontend>"}</span>
          </div>
          <div className="modal__body">
            {showSkills === "Frontend" && <FrontSkills />}
            {showSkills === "Backend" && <BackendSkills />}
            {showSkills === "DB" && <DataBaseSkills />}
            {showSkills === "Other" && <OtherSkills />}
          </div>
          <div className="modal__footer">
            <span>{"</frontend>"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Habilities;
