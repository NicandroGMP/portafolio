import React, { useRef, useState } from "react";
import ContactMovile from "./components/contactMovils";
import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [messageSuccesfully, getMessageSuccesfully] = useState("");
  const [textState, getTextState] = useState("Enviar");
  const [openSpinner, getOpenSpinner] = useState(false);
  const sendEmail = () => {
    getTextState("Enviando");
    getOpenSpinner(true);
    emailjs
      .sendForm(
        "service_wenwdx2",
        "template_pkroldj",
        form.current,
        "Ph59yoRRrADcqUdUx"
      )
      .then(
        () => {
          getMessageSuccesfully("Mensage enviado con éxito");
          getTextState("Enviar");
          getOpenSpinner(false);
        },
        () => {
          getMessageSuccesfully("Algo salió mal");
          getTextState("Enviar");
          getOpenSpinner(false);
        }
      );
  };

  return (
    <>
      <div className="main__contact">
        <div className="card__contact">
          <div className="card__form">
            <ContactMovile />
            <Formik
              initialValues={{
                name: "",
                email: "",
                telephone: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Your name is Required";
                }

                if (!values.email) {
                  errors.email = "Your email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "email invalid address";
                }

                if (!values.telephone) {
                  errors.telephone = "Your telephone number is Required";
                } else if (!/^[0-9]+$/i.test(values.telephone)) {
                  errors.telephone = "telephone invalid";
                }

                return errors;
              }}
              onSubmit={(data, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(data);
                sendEmail({
                  name: data.name,
                  email: data.email,
                  telephone: data.telephone,
                  message: data.message,
                });
                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form className="form" ref={form}>
                  <div className="input__group">
                    <input
                      type="text"
                      name="name"
                      className="input"
                      onChange={handleChange}
                      placeholder="nombre"
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <span className="line"></span>
                    {errors.name && touched.name && (
                      <small>{errors.name}</small>
                    )}
                  </div>
                  <div className="input__group">
                    <input
                      placeholder="email"
                      name="email"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <span className="line"></span>
                    {errors.email && touched.email && (
                      <small>{errors.email}</small>
                    )}
                  </div>
                  <div className="input__group">
                    <input
                      type="tel"
                      name="telephone"
                      className="input"
                      placeholder="teléfono"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telephone}
                    />

                    <span className="line"></span>
                    {errors.telephone && touched.telephone && (
                      <small>{errors.telephone}</small>
                    )}
                  </div>
                  <div className="input__group">
                    <textarea
                      type="text"
                      name="message"
                      className=" textarea"
                      placeholder="escribe el mensage ...."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    ></textarea>
                    <span className="line"></span>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="button__sendEmail"
                  >
                    {textState}
                    {openSpinner === true && (
                      <div className="load_spinner"></div>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
            <span className="message__result">{messageSuccesfully}</span>
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
