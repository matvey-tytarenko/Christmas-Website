import React from 'react'
import '../stylesheet/Page.scss'
import { Link } from 'react-router-dom'
import CristmasTree from '../assets/Christmas Tree.png'

function MainPage() {
  return (
    <div className="container">
      <header>
        <ul className="menu">
          <li className="main">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="mail">
            <Link to={"/mail"}>Письмо</Link>
          </li>
          <li className="about">
            <Link to={"/about"}>О Сайте</Link>
          </li>
        </ul>
      </header>

      <div className="christmas-tree">
        <img src={CristmasTree} />
      </div>
    </div>
  );
}

export default MainPage