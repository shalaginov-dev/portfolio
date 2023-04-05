import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { Link, animateScroll as scroll } from "react-scroll";
import './style.css';

const Navbar = () => {

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<ul className="nav-list">
						<li className="nav-list__item">
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className='nav-list__link'>
								About
							</Link>
						</li>
						<li className="nav-list__item">
							<Link
								activeClass="active"
								to="projects"
								spy={true}
								smooth={true}
								offset={30}
								duration={500}
								className='nav-list__link'>
								Projects
							</Link>
						</li>
						<li className="nav-list__item">
							<Link
								activeClass="active"
								to="contacts"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className='nav-list__link'>
								Contacts
							</Link>
						</li>
					</ul>

					<BtnDarkMode />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
