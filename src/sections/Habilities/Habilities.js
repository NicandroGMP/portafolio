import React, { useState, forwardRef } from "react";
import FrontSkills from "./Components/FrontSkills";
import BackendSkills from "./Components/BackSkills";
import DataBaseSkills from "./Components/DataBaseSkills";
import OtherSkills from "./Components/OthersSkills";

const Habilities = () => {
  const [openModal, setOpenModal] = useState(false);

  const ModalShow = () => {
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
          <button onClick={ModalShow}>
            <span>{"<Frontend/>"}</span>
          </button>
          <button>
            <span>{"<Backend/>"}</span>
          </button>
          <button>
            <span>{"<DB/>"}</span>
          </button>
          <button>
            <span>{"<Other/>"}</span>
          </button>
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
            <span>{"<Frontend/>"}</span>
          </div>
          <div className="modal__body">
            <FrontSkills />
          </div>
          <div className="modal__footer">footer</div>
        </div>
      </div>
    </>
  );
};

export default Habilities;
