import React, { useEffect, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    setIsModalOpen(true);
  }, [])

  return (
    <div className="container">
      <Snowfall />
      <Header />
      <ToastContainer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
