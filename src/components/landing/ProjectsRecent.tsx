import ProjectCard from '../AllProjects/ProjectCard';
import { Button } from 'react-bootstrap';

import "./css/stylesHome.css"

const MM = "/images/projectCards/MM_card.png";
const TLC = "/images/projectCards/TLC_card.png";
const ZD = "/images/projectCards/ZD_card.png";

type Props = {
    setProjects: (flag: boolean) => void,
    updateIndex: (index: number) => void;
}

const Projects = ({
        setProjects,
        updateIndex
    }: Props) =>{

    return(
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <h1 className='sectionHeading'>PROJECT HIGHLIGHTS</h1>
            
            <div className="standardTopBorder projectsTopBorder" />
            <div className="recentProjects">
                <ProjectCard 
                            index={0}
                            img={MM} 
                            title="Musical Madness" 
                            descShort="Restore musical harmony by traversing through an ever-changing dungeon to defeat corrupted instruments using your musical prowess!"
                            redirect="/projects"

                            updateIndex={updateIndex}
                            setProjects={setProjects}
                        />
                <ProjectCard 
                            index={1}
                            img={TLC} 
                            title="The Last Crucible" 
                            descShort="The final Crucible Knight Zangard stands between you and your people's salvation. Fight back against Zangard and his forces to save your people!"
                            redirect="/projects"

                            updateIndex={updateIndex}
                            setProjects={setProjects}
                        />
                <ProjectCard 
                            index={2}
                            img={ZD} 
                            title="Zot Dev" 
                            descShort="Experience the life of a UCI GDIM student, learning to balance a social life, classes, and game projects!"
                            redirect="/projects"

                            updateIndex={updateIndex}
                            setProjects={setProjects}
                        />
            </div>
            <Button className="moreProjects" variant="dark" onClick={() => setProjects(true)}>VIEW MORE PROJECTS HERE</Button>
            <div className="standardBotBorder projectsBotBorder" />
            <div className="padding" />
        </div>
    );
}

export default Projects;