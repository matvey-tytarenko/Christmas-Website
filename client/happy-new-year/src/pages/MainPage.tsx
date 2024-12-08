import React from "react";
import "../stylesheet/Page.scss";
import { Link } from "react-router-dom";
import CristmasTree from "../assets/Christmas Tree.png";
import { useNavigate } from "react-router-dom";
import 'sass'
import Snowfall from "../components/SnowFall";
import Header from "../components/Header";

function MainPage() {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Header />
      <Snowfall />
      <div className="title">
        <h1>С Новым Годом!</h1>
      </div>
      <div className="button">
        <button onClick={() => navigate("/mail")}>
          Получить письмо с поздравлениями
        </button>
      </div>

      <div className="christmas-tree">
        <img src={CristmasTree} />
      </div>
    </div>
  );
}

export default MainPage;
