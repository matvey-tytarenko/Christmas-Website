import React, { useState } from "react";
import Header from "../components/Header";
import "../stylesheet/mail.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import server from "../api/API";

function MailPage() {
  const [values, SetValues] = useState({
    name: "",
    email: "",
  });

  const ToastOpt = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { name, email } = values;
      try {
        toast.info("ваше поздравление отправлено вам на почту", ToastOpt);
        await axios.post(server, { name, email });
      } catch (err) {
        console.error(`Server Error: ${err}`);
        toast.error("Произошла ошибка при отправке поздравления", ToastOpt);
      }
    }
  };

  const handleValidation = () => {
    const { name, email } = values;

    if (name === "") {
      toast.error("Пожалуйста введите имя", ToastOpt);
      return false;
    } else if (email === "") {
      toast.error("пожалуйста введите email", ToastOpt);
      return false;
    } else if (email.indexOf("@") === -1) {
      toast.error("не корректный Email", ToastOpt);
      return false;
    } else if (name.length < 4) {
      toast.error("имя слишком короткое", ToastOpt);
      return false;
    } else {
      return true;
    }
  };

  const handleChange = (event) => {
    SetValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="title">
            <h1>Заполни форму, что бы получить своё письмо</h1>
          </div>
          <div className="input name">
            <label htmlFor="#name">Имя*:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Jhon Doe"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input email">
            <label htmlFor="email">Email*:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="doe.jhon@example.com"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button>
            Отправить поздравление <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default MailPage;
