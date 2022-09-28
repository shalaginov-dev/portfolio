import s from './Main.module.css';
import {Todolist} from "./todolist/Todolist";
import {SocialNetwork} from "./social network/SocialNetwork";
import {AboutMe} from "./aboutMe/AboutMe";

export const Main = (props) => {
    return props.viewPageMode === 'AM' ?  (
        <main className={s.mainBlock}>
            <AboutMe/>
        </main>
    ) : props.viewPageMode === 'TL' ? (
        <main className={s.mainBlock}>
            <Todolist/>
        </main>
    ) : (
        <main className={s.mainBlock}>
            <SocialNetwork/>
        </main>
    )
}