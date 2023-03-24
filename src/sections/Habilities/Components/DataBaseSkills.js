import React from "react";

const DataBaseSkills = () => {
  return (
    <>
      <div className="card__content__skills">
        <span className="tags_elements_desktop">{"<dataBases>"}</span>
        <div className="card__content__iconskills">
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Mysql</span>
            </div>
            <object
              data="/assets/Icons/mysql.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/Icons/mysql.svg" alt="" />
            </object>
          </div>
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Sqlite 3</span>
            </div>
            <object
              data="/assets/Icons/sqlite.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/assets/Icons/sqlite.svg" alt="" />
            </object>
          </div>
        </div>
        <span className="tags_elements_desktop">{"</dataBases>"}</span>
      </div>
    </>
  );
};

export default DataBaseSkills;
