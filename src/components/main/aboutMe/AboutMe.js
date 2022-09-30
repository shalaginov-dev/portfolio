import s from "./AboutMe.module.css";

export const AboutMe = () => {
    return (
        <div className={s.aboutMeBlock}>
            <div className={s.title}>
                <h2>Шалагинов Иван</h2>
                <p>FRONTEND(React) РАЗРАБОТЧИК</p>
                <p>Сочи/Россия Возраст: 29</p>
            </div>
            <div className={s.workExperience}>
                <h3>Опыт работы:</h3>
                <p>
                    Занимался разработкой и поддержкой интернет магазина. Стек проекта: (SPA) React, redux, grid,
                    material UI,
                    axios, react router 6, redux form.
                </p>
                <ul>
                    <p>- Верстал страницы и карточки товаров</p>
                    <p>- Настраивал роутинг (react-router)</p>
                    <p>- Реализовал стейт менеджмент(Redux)</p>
                    <p>- Подключал UI библиотеку(Material UI)</p>
                    <p>- Писал REST API</p>
                    <p>- Писал unit тесты</p>
                    <p>- Делал оптимизацию useCallback/memo</p>
                </ul>
            </div>
            <div className={s.education}>
                <h3>Образовние:</h3>
                <p>Курсы: https://it-incubator.ru , React developer 2021</p>
                <p>Высшее (неоконченное): Сочинский Институт Экономики И Информационных Технологий (Прикладная
                    информатика) 2016г.</p>
                <p> Среднее специальное: Профессиональное училище №76 2011г.</p>
            </div>
            <div>
                <h3>Знание языков:</h3>
                <p> Русский-Родной</p>
                <p>Английский-А2-Элементарный</p>
            </div>
            {/*<div>*/}
            {/*    <h3>Курсы:</h3>*/}
            {/*    <p> https://it-incubator.ru , React developer</p>*/}
            {/*</div>*/}
            <div className={s.aboutMe}>
                <h3>Обо мне:</h3>
                <p> Прошел курсы it-incubator, сделал несколько пет-проектов</p>
                <p>
                    Есть опыт коммерческой разработки на фрилансе, занимался фронтендом строительного интернет магазина.
                </p>
                <p>
                    Совершенствуюсь в направлении фронтенда, глубоко изучаю React. В ближайших планах библиотеки и технологии: MobX, SSR,
                    GraphQL
                </p>
                <p>
                    Люблю играть в баскетбол, занимаюсь туризмом. С детства катаюсь на горных лыжах и сноуборде,
                    являюсь аккредитован инструктором Международной Ассоциацией Горнолыжного Спорта.
                </p>
            </div>
        </div>
    )
}