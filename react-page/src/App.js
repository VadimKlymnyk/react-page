import React from 'react';
import scrubs from './img/scrubs.png';
import vk from './img/vk.png';
import sk from './img/sk.png';
import git from './img/git.png';
import hello from './img/hello.png';
import exp from './img/experience.png';
import im_0 from './img/Layer_3.png';
import im_1 from './img/Layer_4.png';
import im_2 from './img/Layer_5.png';
import im_3 from './img/Layer_9.png';
import im_4 from './img/Layer_8.png';
import im_5 from './img/Layer_7.png';

import TodoList from './Todo/TodoList'
import './App.css';



function App() {
  let [list, setTodos] = React.useState([
    {
      id: 0,
      completed: false,
      img: im_0,
      title: 'Основы JavaScript',
      text: 'Видеокурс о одном из самых популярных языков программирования - JavaScript. Изучая этот курс вы познаете этот прекрасный язык от самых основ.',
      time: '24 урока (6 часов 46 минут)'
    },
    {
      id: 1,
      completed: false,
      img: im_1,
      title: 'Основы JQUERY',
      text: 'Видеокурс о одном из самых популярных языков программирования - JavaScript. Изучая этот курс вы познаете этот прекрасный язык от самых основ.',
      time: ' 11 уроков (2 часа 6 минут)'
    },
    {
      id: 2,
      completed: false,
      img: im_2,
      title: 'Базовые элементы страницы ',
      text: 'Видеокурс по верстке и программированию основных и популярных элементов сайтов. Посмотрев этот курс вы научитесь создавать табы, аккордеон, слайдшоу, слайдер и т.д.',
      time: ' 9 уроков (2 часа 7 минут)'
    },
    {
      id: 3,
      completed: false,
      img: im_3,
      title: 'Создание адаптивных сайтов',
      text: 'В этом курсе вы узнаете как создавать адаптивные сайты, что такое адаптивная верстка и дизайн.',
      time: ' 7 уроков (2 часа 11 минут)'
    },
    {
      id: 4,
      completed: false,
      img: im_4,
      title: 'Верстка адаптивной css галереи',
      text: 'В этом видеокурсе вы изучите инструменты, техники и подходы для web-разработчика, которые помогут вам решать поставленные задачи более быстро и эффективно.',
      time: '6 уроков (1 час 9 минут)'
    },
    {
      id: 5,
      completed: false,
      img: im_5,
      title: 'Верстка адаптивной css галереи',
      text: 'В этом курсе мы разберем как сверстать адаптивную css галерею. Также познакомимся с Flexbox.',
      time: ' 4 урока (50 минут)'
    }
  ])


  window.addEventListener('load', function () {

    list.map(todo => {
      if (localStorage.getItem(todo.id) === 'true') {
        todo.completed = true
        document.getElementById(todo.id).checked = true;
      }
      return todo
    })

  });



  function toggleTodo(id) {

    setTodos(
      list.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          localStorage[todo.id] = todo.completed
          ///console.log(list.length)
        }
        return todo
      })
    )

  }

  return (
    <div className="App">

      <header className="top-header">
        <div className="container_header">
          <div className="header_info">
            <img src={scrubs} className="logo1" alt="" />
            <div className="header_l">
              <div className="header_name">Быстров Борис Викторович</div>
              <a className="header_mail" href="mailto:bystrov@gmail.com" >bystrov@gmail.com  </a>
            </div>
          </div>
          <div className="header_img">
            <img src={vk} className="nav_img" alt="" />
            <img src={sk} className="nav_img" alt="" />
            <img src={git} className="nav_img" alt="" />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">

          <div className="section_header">
            <h1 className="section_title">О будущем ученике</h1>
            <h3 className="section_subtitle">Ребятам из Loftschool будет полезно узнать немного обо мне</h3>

          </div>
        </div>
        <div className="container_1">
          <div className="section_one">
            <img src={hello} className="section_img" alt="" />
            <div className="section_t">
              <h1 className="section_Title">Немного обо мне</h1>
              <div className="section_text">Я живу в Санкт-Петербурге (Россия). Мне 26 лет.
                  Высшее образование - закончил НИУ ИТМО. Опыт в разработке 1 год.
                  Уже окончил курсы в Академии Программирования, где не плохо научился верстать.
                Пока есть только один сайт, которым могу похвастаться:
                        </div>
              <a href="http://www.yandex.ru">www.yandex.ru </a>

            </div>
          </div>
          <div className="section_one">
            <img src={exp} className="section_img" alt="" />
            <div className="section_t">
              <h1 className="section_Title">Мой опыт в разработке</h1>
              <div className="section_text">В этом блоке я расскажу о себе, что я уже умею.
                  Здесь я укажу другие курсы, которые до этого я уже проходил.
                  Могу перечислить технологии, которыми уже умею пользоваться.
                  К примеру: html5, css3, sass, jade, git и пр.</div>

            </div>
          </div>
        </div>
      </section>

      <div className="content">
        <div className="container">

          <div className="footer_header">
            <h1 className="section_title">Курсы на loftblog</h1>
            <h3 className="section_subtitle">которые мне помогут в выполнении этого задания</h3>
          </div>
        </div>
        <TodoList list={list} onToggle={toggleTodo} ></TodoList>

      </div>
      <div className="final">
        <div className="final_text">
          А это футер, с текстом внутри. Он должен быть прибит к низу окна браузера,
          не зависимо от количества контента на странице и размера окна.
            </div>
      </div>


    </div>
  );
}

export default App;
