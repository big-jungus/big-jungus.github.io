import ProjectCard from '../AllProjects/ProjectCard';
import { Button } from 'react-bootstrap';

import "./css/stylesHome.css"

import LR from "./images/projectCards/LR_card.jpg";
import KOR from "./images/projectCards/KoR_card.png";
import ZD from "./images/projectCards/ZD_card.png";

type Props = {
    updateIndex: (index: number) => void;
}

const Projects = ({
        updateIndex
    }: Props) =>{
    return(
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <h1 className='sectionHeading'>RECENT PROJECTS</h1>
            
            <div className="standardTopBorder projectsTopBorder" />
            <div className="recentProjects">
                <ProjectCard 
                            index={0}
                            img={LR} 
                            title="Light-Runner" 
                            descShort="A futuristic 1-vs-1 Arena Shooter focused on destroying your opponents through superior movement."
                            redirect="/projects"

                            updateIndex={updateIndex}
                        />
                <ProjectCard 
                            index={1}
                            img={KOR} 
                            title="King of the Ring" 
                            descShort="A chess-boxing game set against a particular billionare an especially punchable face."
                            redirect="/projects"

                            updateIndex={updateIndex}
                        />
                <ProjectCard 
                            index={2}
                            img={ZD} 
                            title="Zot Dev" 
                            descShort="Experience the life of a UCI GDIM student, learning to balance a social life, classes, and game projects!"
                            redirect="/projects"

                            updateIndex={updateIndex}
                        />
            </div>
            <Button className="moreProjects" href="/projects">VIEW MORE PROJECTS HERE</Button>
            <div className="standardBotBorder projectsBotBorder" />
            <div className="padding" />
        </div>
    );
}

export default Projects;