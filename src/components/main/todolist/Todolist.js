import s from "./Todolist.module.css";
import demo from "../../../assets/temp/TL.png"

export const Todolist = () => {
    return (
        <div className={s.todolistBlock}>
            <div className={s.stack}>
                Стек технологий:
                <p>React, Redux, grid, thunk, axios, jest, snapshot, storybook</p>
            </div>
            <div className={s.links}>
                <p>{`Демо:   `}
                    {/*<a rel="noreferrer" target="_blank"*/}
                    {/*   href="#">in process</a>*/}
                    in process
                </p>
                <p>{`Исходники:   `}
                    <a rel="noreferrer" target="_blank"
                       href="https://github.com/shalaginov-dev/todolist">https://github.com/shalaginov-dev/todolist</a>
                </p>
            </div>
            <div className={s.image}>
                <img src={demo} alt="todolist demo"/>
            </div>
        </div>
    )
}