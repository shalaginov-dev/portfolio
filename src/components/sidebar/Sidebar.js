import s from './Sidebar.module.css'
import ava from '../../assets/images/IMG_8169.PNG'
import personIcon from '../../assets/images/person_icon.png'
import projectIcon from '../../assets/images/proj_icon.png'

export const Sidebar = (props) => {
    return (
        <aside className={s.asideBlock}>
                <img src={ava} alt="avatar"/>
            <div className={s.navMenu}>
                <div className={s.navItem}>
                    <button onClick={props.AMButton}>
                        <img src={personIcon}
                             alt="personIcon"/>
                          About me
                    </button>
                    <h3>PROJECTS</h3>
                    <button onClick={props.TLButton}>
                        <img src={projectIcon}
                             alt="projectIcon"/>
                        Todolist
                    </button>
                    <button onClick={props.SNButton}>
                        <img src={projectIcon}
                             alt="projectIcon"/>
                        Social Network
                    </button>
                    <h3>SKILLS</h3>
                </div>
                <div className={s.skills}>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Redux/Redux Toolkit</li>
                        <li>MaterialUI/AntDesign</li>
                        <li>REST API</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}