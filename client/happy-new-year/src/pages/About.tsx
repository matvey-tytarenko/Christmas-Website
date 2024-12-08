import React from 'react'
import Header from '../components/Header'
import '../stylesheet/Page.scss'
import '../stylesheet/About.scss'

function About() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>О чём этот сайт</h1>
        <p>
          Этот сайт разработан <span className='copy'>&copy;Matvii Tytarenko</span>
          <br />
          для поздравления с новым годом, я хотел сделать что то типо новогодней
          открытки. <br />
          надеюсь у меня получилось вам поднять новогоднее настроение!
          <br />
          <span className='heart'>
            Я Вас Люблю <i className="fas fa-heart" />
          </span>
        </p>
      </div>
    </>
  );
}

export default About