import './App.css';
import ProjectItem from './components/ProjectItem';
import WorkItem from './components/Work_item';
import cover from './img/page_1/cover.jpg';
import img1 from './img/page_3/img1.jpg';
import img2 from './img/page_3/img2.jpg';
import img3 from './img/page_3/img3.jpg';
import bgimg from './img/page_4/grid.jpg';
import file from './file/Golovkov.doc';

function App() {

  let WorkItemDB = [
    {
      id: "1", leftName: "AKS", leftData: "СЕНТЯБРЬ • 2019",
      rightDiscribe: "Продажа аксессуаров для мобильных телефонов, установка защитных стекол, ремонт телефонов.",
      rightBubble: ["Коммуникабельность", "Финансовая Отчетность", "Грамотная Речь", "Выявление потребностей"],
    },
    {
      id: "2", leftName: "Ростелеком", leftData: "ДЕКАБРЬ • 2020",
      rightDiscribe: "Холодные звонки, продажа услуг напрямую по квартирам. Раздача листовок с тарифами.",
      rightBubble: ["Трата времени", "Рабский труд", "Настойчивость", "Дудос клиентов"],
    },
    {
      id: "3", leftName: "ООО Император", leftData: "МАЙ • 2021 – ФЕВРАЛЬ • 2022",
      rightDiscribe: "Офис менеджер, офисный клерк, раб системы. Составление договоров, ведение отчетности по прадажам, подсчет, выдача зарплат сотрудникам. Так же был личным помошником регионального директора.",
      rightBubble: ["Апхитектура крупной компании", "Деловое общение", "Управление проектами", "Отчетность", "Ответственность"],
    },

  ]
  let ProjectItemDB = [
    { title: "Университет", imgSrc: img1, 
    text: "Первое знакомство с программированием произошло в университете, мы изучали принципы ООП на основе c++, java. Далее в ходе обучения были изучены базы данных на sql, а так же моделирование сетей в програмном обеспечении Cisco Packet Tracer. Из интересного, на языке Java была выполнена курсовая работа, по созданию программной реализации композиционной электронной подписи на основе эллиптических кривых.",
    a:{ ahref: "https://github.com/AlexG210/CourseCrypto", atext:"Курсовая по криптографии"}},
    { title: "Знакомство с React", imgSrc: img2, text: "Я начал свой путь с бесплатных кусов по изучанию HTML, CSS в целом тогда я еще даже не знал что я буду делать дальше, просто хотел разобраться что и как работает. После чаего мне посоветовали видеокурс по обучению React на Youtube, который называется Путь самурая, что меня очень вдохновило. По ходу прохождения курса, выполняется проект социальной сети, в котором конечно я делал упор на изучение принципов построения React приложения, а не на верстку, он конечно пока сырой, но все равно приложу ссылку.", 
    a:{ahref: "https://github.com/jykgol/React_Samurai_course_social_network", atext:"Путь самурая" }},
    { title: "Верстка", imgSrc: img3, text: "По ходу курса я понял что нужно подтянуть свои навыки верстки и начал небольшой проект по макету финансовой компании, параллельно смотрел видеоуроки и пробовал разные приложения-игры для изучения CSS, такие как CSS-Battle, CSS Diner, Grid Garden и тд. Результаты работы по макету можно увидеть по ссылке.",
    a:{ahref: "https://github.com/jykgol/React_first_web_page", atext:"Сайт по макету"} 
  },
  ]

  let ProjectDBR = ProjectItemDB.map(el => {
    return (<ProjectItem ProjectItemDB={el} />
    )
  })

  let FillData = WorkItemDB.map(el => {
    return (
      <div>
        <WorkItem WorkItemDB={el} />
      </div>
    )

  })



  return (
    <div className="Web">
      <div className="Header_elements">
        <a href="#works" className="Header_element medium_text">Рабочий опыт</a>
        <a href="#projects" className="Header_element medium_text">Проекты</a>
        <a href="#about" className="Header_element medium_text">О себе</a>
      </div>
      <div className="page_1">
        <div className="_container">
          <div className="page_1_container flex_coloumn">
            <div className="page_1_box flex_coloumn">
              <h2 id="works" className="page_1_box_header bold_text">Hello i'm Evgeniy Golovkov </h2>
              <div className="page_1_box_text medium_text">Beginning Frontend Developer</div>
            </div>
            <a href={file} download className="page_1_button medium_text">Скачать резюме</a>
          </div>
          <div className="cov_img _ibg"><img src={cover} alt="alt" /></div>
        </div>
      </div>
      <div className="page_2">
        <div className="page_2_container _container flex_coloumn">
          <h2 id="works" className="page_2_header bold_text">Опыт Работы</h2>
          <div className="page_2_work_block flex_coloumn">
            {FillData}
          </div>
        </div>
      </div>
      <div className="page_3">
        <div className="page_3_container _container flex_coloumn">
          <h2 id="projects" className="page_3_Header bold_text">Проекты</h2>
          <div className="page_3_lists flex_coloumn">
            {ProjectDBR}
          </div>
        </div>
      </div>
      <div className="page_4">
        <div className="page_4_container _container flex_coloumn">
          <h2 id="about" className="page_4_title bold_text">О себе</h2>
          <div className="page_4_subtitle regular_text"> Кратко о себе: 24 года, молодой, значит, не успел еще разочароваться в жизни.
            Занимаюсь спортом всю жизнь, в основном футбол и хоккей, но для меня не имеет особого значения,
            какой это вид спорта, главное то, насколько хорошо я играю. Если и начинать дело, то только с
            условием, что я буду в будущем это развивать, и улучшать свои навыки, тогда это начинает приносить удовольствие. Закончил
            ПГУПС по специальности <i>"Информационная безопасность автоматизированных систем на транспорте"</i>, в целом было весело, однако успел разочароваться в системе образования. Понял, как все
            работает, поработал офисным менеджером, понял, как там все устроено, и сделал вывод, что необходимо начать учиться самостоятельно. Прошлый
            опыт самообучения закончился на разработке элементарных мобильных игр на Unity, однако мне не особо понравилось. После этого занялся изучением
            html, css, Js, что вызвало иные эмоции, запало в душу. Начал дальше изучать React и решил сделать это своей
            профессией.</div>
          <div className="page_4_grid">
            <div className="page_4_grid_img"><img src={bgimg} alt="alt" /></div>
            <div className="page_4_grid_text regular_text">В данный момент времени не работаю. Являюсь аспирантом в ПГУПСЕ, упомянутом выше, на той же специальности. </div>
            <div className="page_4_grid_info_box_outer ">
              <div className="page_4_grid_info_box_inner flex_coloumn">
                <div className="page_4_grid_info_box_element_title page_4_grid_info_box_element_header">My contacts</div>
                <div className="page_4_grid_info_box_element">
                  <div className="page_4_grid_info_box_element_title">EMAIL</div>
                  <div className="page_4_grid_info_box_element_text regular_text">jykosgol@gmail.com</div>
                </div>
                <div className="page_4_grid_info_box_element">
                  <div className="page_4_grid_info_box_element_title">ROLE</div>
                  <div className="page_4_grid_info_box_element_text regular_text">Frontend Developer</div>
                </div>
                <div className="page_4_grid_info_box_element">
                  <div className="page_4_grid_info_box_element_title">PHONE</div>
                  <div className="page_4_grid_info_box_element_text regular_text">+7 (958) 588 17 35</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="page_4_subtitle regular_text">Чего я ожидаю от работы</div> */}
        </div>
      </div>
      <footer className="footer">
        <div className="footer_container _container flex_coloumn">
          <div className="regular_text">Designed in React. With Love</div>
          <div className="regular_text">Evgeniy Golovkov • 2022 </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
