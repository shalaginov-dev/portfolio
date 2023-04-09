import './style.css';

const Project = ({ title, img, link }) => {
	return (
		<a target="_blank" rel="noreferrer" href={link}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</li>
		</a>
	);
};

export default Project;
