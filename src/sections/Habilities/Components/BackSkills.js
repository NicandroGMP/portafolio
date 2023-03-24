import React from "react";

const BackendSkills = () => {
  return (
    <>
      <div className="card__content__skills">
        <span className="tags_elements_desktop">{"<backend>"}</span>
        <div className="card__content__iconskills">
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">php</span>
            </div>
            <object
              data="/assets/Icons/php.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/Icons/Html5Logo.svg" alt="" />
            </object>
          </div>
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">codeigniter &#40;php&#41;</span>
            </div>
            <object
              data="/assets/Icons/codeigniter.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/assets/Icons/codeigniter.svg" alt="" />
            </object>
          </div>
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Laravel &#40;php&#41;</span>
            </div>
            <object
              data="/assets/Icons/laravel.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/assets/Icons/laravel.svg" alt="" />
            </object>
          </div>
          <div className="img_content">
            <div className="tooltip">
              <span className="tooltip_text">Nodejs</span>
            </div>
            <object
              data="/assets/Icons/nodejs.svg"
              type="image/svg+xml"
              width={"50%"}
              height={"50%"}
            >
              <img src="/assets/Icons/nodejs.svg" alt="" />
            </object>
          </div>
        </div>
        <span className="tags_elements_desktop">{"</backend>"}</span>
      </div>
    </>
  );
};

export default BackendSkills;
