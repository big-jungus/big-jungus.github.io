import { Carousel, Button } from "react-bootstrap";
import Selector from "../CustomCarousel/CarouselSelector";

//import arrows from "/elements/arrows.svg"

import "./css/stylesHome.css"

type Props = {
    index: number,
    setProjects: (flag: boolean) => void,
    updateIndex: (index: number) => void,
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; short: string;}[];
}

const Projects = ({
    }: Props) =>{

    return(
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <div className="sectionHeading">
                SELECTED GAMES
            </div>

            <div className="projectSectionLeft">
                <div className="projectTitle">
                    <h2>SAIC</h2>
                    
                    <div>
                        <h3>Game Programming Intern</h3>
                        <h3>June 2023 - August 2023</h3>
                        <h3>Team: <span className="highlight">5</span></h3>
                    </div>
                </div>
                
                <div className="projectBody">
                    <p>This was a confidential project, making a realistic turn-based wargame based on a near-future scenario.</p>

                    <ul>
                        <li>Tools: <span className="highlight">Unreal</span>, Git, Blueprints, C++</li>
                        <li>Focused on <span className="highlight">developing the multiplayer framework</span> and implementing all UI into Unreal including <span className="highlight">menus, character selection, and HUD</span> .</li>
                        <li>Worked closely with two engineers to incorporate live Matlab generated data into the game.</li>
                    </ul>
                </div>
            </div>
            
            
            
            <div className="padding" />
        </div>
    );
}

export default Projects;