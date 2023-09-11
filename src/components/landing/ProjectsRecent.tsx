import ProjectCard from '../AllProjects/ProjectCard';
import { Button } from 'react-bootstrap';

import "./css/stylesHome.css"

import MM from "/images/projectCards/MM_card.png";
import TLC from "/images/projectCards/TLC_card.png";
import ZD from "/images/projectCards/ZD_card.png";

type Props = {
    updateIndex: (index: number) => void;
}

const Projects = ({
        updateIndex
    }: Props) =>{
    return(
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <h1 className='sectionHeading'>PROJECT HIGHLIGHTS</h1>
            
            <div className="standardTopBorder projectsTopBorder" />
            <div className="recentProjects">
                <ProjectCard 
                            index={3}
                            img={MM} 
                            title="Musical Madness" 
                            descShort="Restore musical harmony by traversing through an ever-changing dungeon to defeat corrupted instruments using your musical prowess!"
                            redirect="/projects"

                            updateIndex={updateIndex}
                        />
                <ProjectCard 
                            index={3}
                            img={TLC} 
                            title="The Last Crucible" 
                            descShort="The final Crucible Knight Zangard stands between you and your people's salvation. Fight back against Zangard and his forces to save your people!"
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