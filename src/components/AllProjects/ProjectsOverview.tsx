import "./projectOverview.css"

import { Button } from 'react-bootstrap';

type Props = {
    index: number;
    setProjects: (flag: boolean) => void,
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; role: string; teamsize: string; }[];
}

const ProjectsOverview = ({
        index,
        setProjects,
        projectsList
    }: Props) => {

    let project = projectsList[index]

    return(
        <>
            <div className="overviewBackground">
                <div className="project">
                    <div className="Bar"/>
                    <h1 className="projectTitle">
                        {project.title}
                    </h1>

                    <div className="content">
                        <Button className="projectLink" href={project.link} target="_blank" variant="dark">{(index === 7)?"PRESENTATION":"DOWNLOAD"}</Button>
                        <h4>Role: {project.role}</h4>
                        <h4>Team Size: {project.teamsize}</h4>
                        <h4>{project.date}</h4>
                        
                        <p>{project.description}</p>
                    </div>
                </div>
                    
                <div className="projectBody">
                    
                    <div className="pictures">
                        <img className="images" src={project.images[0]} />
                        <img className="images" src={project.images[1]} />

                        <a className={(index === 7)?"":"inactiveLink"} href={(index === 7)?project.link:""} target="_blank">
                            <img className={"images"} src={project.images[2]}/>
                        </a>
                    </div>

                    <div className="scrollingBar">
                        <div className="scrollElements">
                            <div className="scrollText">
                            
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="exit" onClick={() => setProjects(false)} variant="danger">X</Button>
            </div>
            <div className="background"/> 
        </>
    );
}

export default ProjectsOverview;