import React from "react";

const OtherSkills = () => {
  return (
    <>
      <div className="card__content__skills">
        <span>{"<otherSkills>"}</span>
        <div className="card__content__iconskills">
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Mysql</span>
            </div>
            <object
              data="/assets/Icons/git.svg"
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
              data="/assets/Icons/github.svg"
              type="image/svg+xml"
              width={"70%"}
              height={"70%"}
            >
              <img src="/assets/Icons/sqlite.svg" alt="" />
            </object>
          </div>
        </div>
        <span>{"</otherSkills>"}</span>
      </div>
    </>
  );
};

export default OtherSkills;
