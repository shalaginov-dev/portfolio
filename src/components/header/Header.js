import "./style.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        <em>SHALAGINOV IVAN</em>
                    </strong>
                </h1>
                <h2 className="header__title">
                    frontend developer
                </h2>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">
                    Download CV
                </a>
            </div>
        </header>
    );
}

export default Header;