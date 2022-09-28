import s from "./SocialNetwork.module.css";
import demo from "../../../assets/temp/SN.png"


export const SocialNetwork = () => {
    return (
        <div className={s.socialNetworkBlock}>
            <div className={s.stack}>
                Стек технологий:
                <p>React, Redux, flex, react-router, redux-form, reselect, axios, thunk, jest</p>
            </div>
            <div className={s.links}>
                <p>{`Демо:   `}
                    <a rel="noreferrer" target="_blank"
                       href="#">###</a>
                </p>
                <p>{`Исходники:   `}
                    <a rel="noreferrer" target="_blank"
                       href="https://github.com/shalaginov-dev/social-network">https://github.com/shalaginov-dev/social-network</a>
                </p>
            </div>
            <div className={s.image}>
                <img src={demo} alt="demo social network"/>
            </div>
        </div>
    )
}