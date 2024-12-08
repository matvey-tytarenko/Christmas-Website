import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheet/Page.scss'

function Header() {
  return (
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
  );
}

export default Header