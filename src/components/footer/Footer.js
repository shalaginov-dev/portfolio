import s from './Footer.module.css';
import vkIcon from '../../assets/images/vk_icon.png'
import gitIcon from '../../assets/images/git_icon.png'

export const Footer = () => {

    return (
        <footer className={s.footerBlock}>
            <div className={s.email}>
                shalaginov.dev@gmail.com
            </div>
            <div className={s.links}>
                <a rel='noreferrer' href="https://vk.com/id31917003" target='_blank'>
                    <img src={vkIcon} alt="vk"/>
                </a>
                <a rel='noreferrer' href="https://github.com/shalaginov-dev" target='_blank'>
                    <img src={gitIcon} alt="git-hub"/>
                </a>
            </div>
            <div className={s.phone}>
                +7 (918) 207 40 54
            </div>
        </footer>
    )
}

