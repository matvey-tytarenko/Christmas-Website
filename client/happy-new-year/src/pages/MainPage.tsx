import React, { useEffect } from "react";
import "../stylesheet/Page.scss";
import { useNavigate } from "react-router-dom";
import CristmasTree from "../assets/Christmas Tree.png";
import Snowfall from "../components/SnowFall";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MainPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем, показывалось ли уже модальное окно
    const modalShown = localStorage.getItem("modalShown");

    if (!modalShown) {
      // Показываем модальное окно
      Modal();
      // Сохраняем информацию о показе
      localStorage.setItem("modalShown", "true");
    }
  }, []);

  return (
    <div className="container">
      <Snowfall />
      <Header />
      <ToastContainer />
      <div className="title">
        <h1>С Новым Годом!</h1>
      </div>
      <div className="button">
        <button onClick={() => navigate("/mail")}>
          Получить письмо с поздравлениями
        </button>
      </div>

      <div className="christmas-tree">
        <img src={CristmasTree} alt="Christmas Tree" />
      </div>
    </div>
  );
}

export default MainPage;
