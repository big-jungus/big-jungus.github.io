import "./css/stylesHome.css"
import ETH_Icon from "/projectPictures/Ether/ETH1.png";
import EDO_Icon from "/projectPictures/EdoEdo/EDO1.png";
import LR_Icon from "/projectPictures/LightRunner/LR1.jpg";

import { Button } from "react-bootstrap";

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

            <div className="projectSection">
                <div className="projectHeaderLeft">
                    <div className="projectTitle">
                        <h2>PROJECT: ETHER</h2>
                        <Button>Play Now!</Button>
                    </div>
                    
                    <div>
                        <h3>UI/Gameplay Programmer</h3>
                        <h3>In Progress</h3>
                        <h3>Team: <span className="highlight">40</span></h3>
                    </div>

                    <img src={ETH_Icon} className="projectIcon"></img>
                </div>
                
                <div className="projectBodyLeft">
                    <ul>
                        <p>Action-Stealth game focused on using magical abilities to outwit your enemies!</p>
                        <li>Tools: <span className="highlight">Unreal</span>, Figma, Perforce, Blueprints, C++, Airtable</li>
                        <li><span className="highlight">Worked alongside with UX designers and UI artists</span> to implement each iteration of their designs into engine, including <span className="highlight"> all menus, HUD and more!</span></li>
                        <li>Created multiple iterations of various accessibility features, such as <span className="highlight">subtitles, colorblind modes, aim assist, and high contrast display</span>.</li>
                    </ul>
                </div>
            </div>

            <div className="projectSection">
                <div className="projectHeaderRight">
                    <h2>EDO EDO TEISHOKU</h2>
                    
                    <div>
                        <h3>Gameplay Programmer</h3>
                        <h3>In Progress</h3>
                        <h3>Team: <span className="highlight">43</span></h3>
                    </div>

                    <img src={EDO_Icon} className="projectIcon"></img>
                </div>
                
                <div className="projectBodyRight">
                    <ul>
                        <p>Rogue-like card game focused on cooking up dishes to defeat animated foods.</p>
                        <li>Tools: <span className="highlight">Unity</span>, Figma, Git, C#, Airtable</li>
                        <li>Implemented all of the game's bosses, working with game designers to <span className="highlight">update bosses during each iteration of the game's system design</span>.</li>
                        <li>Worked with a UX designer to <span className="highlight">create the game's tutorial to walk players through the entire process of the game's core loop</span>.</li>
                    </ul>
                </div>
            </div>

            <div className="projectSection">
                <div className="projectHeaderLeft">
                    <h2>LIGHT-RUNNER</h2>
                    
                    <div>
                        <h3>UI/Gameplay Programmer</h3>
                        <h3>April 2023 - June 2023</h3>
                        <h3>Team: <span className="highlight">4</span></h3>
                    </div>

                    <img src={LR_Icon} className="projectIcon"></img>
                </div>
                
                <div className="projectBodyLeft">
                    <ul>
                        <p>1 vs. 1 arena shooter focused on movement mechanics.</p>
                        <li>Tools: <span className="highlight">Unreal</span>, Perforce, Blueprints, C++</li>
                        <li>Designed and implemented the game's movement systems such as wall-running and dynamic sliding.</li>
                        <li><span className="highlight">Gathered feedback from multiple playtests and iterated on designs</span> to make the movement feel both smooth and thrilling for players.</li>
                        <li>This was my first game made in Unreal Engine 5, and was a huge <span className="highlight">learning experience for both Unreal and multiplayer programming</span>.</li>
                    </ul>
                </div>
            </div>

            <div className="padding" />
        </div>
    );
}

export default Projects;