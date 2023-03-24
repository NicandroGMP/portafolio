import React from "react";

const OtherSkills = () => {
  return (
    <>
      <div className="card__content__skills">
        <span className="tags_elements_desktop">{"<otherSkills>"}</span>
        <div className="card__content__iconskills">
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Git</span>
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
              <span className="tooltip_text">GitHub</span>
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
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Git Bitbucket</span>
            </div>
            <object
              data="/assets/Icons/bitbucket.svg"
              type="image/svg+xml"
              width={"70%"}
              height={"70%"}
            >
              <img src="/assets/Icons/bitbucket.svg" alt="" />
            </object>
          </div>
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Jira</span>
            </div>
            <object
              data="/assets/Icons/jira.svg"
              type="image/svg+xml"
              width={"70%"}
              height={"70%"}
            >
              <img src="/assets/Icons/jira.svg" alt="" />
            </object>
          </div>
        </div>
        <span className="tags_elements_desktop">{"</otherSkills>"}</span>
      </div>
    </>
  );
};

export default OtherSkills;
