import Project from '../components/project/Project';
import {projects} from "./../helpers/projectsList"

const Projects = () => {
    return (
        <main className="section" id="projects">
            <div className="container">
                <h2 className="title-1">#Projects</h2>
                <div className="line" style={{width: '1170px'}}>

                </div>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                title={project.title}
                                img={project.img}
                                link={project.gitHubLink}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Projects;
