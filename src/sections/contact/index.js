import React from "react";
import useFormFields from "@App/Utils/hooks/helpForm";
import ContactMovile from "./components/contactMovils";

const Contact = () => {
  const [fields, handleFieldChange, errors] = useFormFields({
    name: "",
  });
  const sendEmail = (e) => {
    console.log("enviar email .......");
    console.log(fields);
  };

  return (
    <>
      <div className="main__contact">
        <div className="card__contact">
          <div className="card__form">
            <ContactMovile />
            <div className="form">
              <input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                className="input"
                placeholder="nombres"
                value={fields.name}
                onChange={handleFieldChange}
              />
              <span className="line"></span>
              <input type="text" className="input" placeholder="email" />
              <span className="line"></span>
              <input type="text" className="input" placeholder="teléfono" />
              <span className="line"></span>
              <textarea
                type="text"
                className=" textarea"
                placeholder="escribe el mensage ...."
              ></textarea>
              <span className="line"></span>

              <button onClick={sendEmail} className="button__sendEmail">
                Enviar
              </button>
            </div>
          </div>
          <div className="card__image">
            <img
              alt="send_Email"
              src="/assets/images/4957160.png"
              className="imageSendEmail"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
