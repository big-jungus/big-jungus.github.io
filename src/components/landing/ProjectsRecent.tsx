import "./css/stylesHome.css"
import ETH_Icon from "/projectPictures/Ether/ETH6.png";
import ETH_Icon2 from "/projectPictures/Ether/ETH7.png";

import EDO_Icon from "/projectPictures/EdoEdo/EDO5.png";
import EDO_Icon2 from "/projectPictures/EdoEdo/EDO6.png";

import LR_Icon from "/projectPictures/LightRunner/LR1.jpg";
import LR_Icon2 from "/projectPictures/LightRunner/LR2.gif";

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

            <div className="projectHolder">
                <div className="projectSection">
                    <div className="projectHeaderLeft">
                        <h2>PROJECT: ETHER</h2>
                        
                        <div>
                            <h3>UI/Gameplay Programmer</h3>
                            <h3>August 2023 - March 2023</h3>
                            <h3>Team: <span className="highlight">40</span></h3>
                        </div>
                    </div>
                    
                    <div className="projectDescription">
                        <Button bsPrefix="buttonLeft" onClick={()=> window.open("https://pjheric.itch.io/project-ether-playtest", "_blank")}>PLAY NOW!</Button>
                        <div className="projectBodyLeft">
                            <ul>
                                <p>Action-Stealth game focused on using magical abilities to outwit your enemies!</p>
                                <li>Tools: <span className="highlight">Unreal</span>, Figma, Perforce, Blueprints, C++, Airtable</li>
                                <li><span className="highlight">Worked alongside with UX designers and UI artists</span> to implement each iteration of their designs into engine, including <span className="highlight"> all menus, HUD and more!</span></li>
                                <li>Created multiple iterations of various accessibility features, such as <span className="highlight">subtitles, colorblind modes, aim assist, and high contrast display</span>.</li>
                                <li>Developed both the <span className="highlight">Save & Load system</span> and the <span className="highlight">Objective system</span> for the game as well!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projectImages">
                        <img src={ETH_Icon} className="projectIcon"></img>
                        <img src={ETH_Icon2} className="projectIcon"/>
                </div>
            </div>

            <div className="projectHolder">
                <div className="projectSection">
                    <div className="projectHeaderRight">
                        <h2>EDO EDO TEISHOKU</h2>
                        
                        <div>
                            <h3>Gameplay Programmer</h3>
                            <h3>August 2023 - March 2023</h3>
                            <h3>Team: <span className="highlight">43</span></h3>
                        </div>
                    </div>
                    
                    <div className="projectDescription">
                        <Button bsPrefix="buttonRight" onClick={()=> window.open("https://funbam.itch.io/edo-edo-teishoku", "_blank")}>PLAY NOW!</Button>
                        <div className="projectBodyRight">
                            <ul>
                                <p>Rogue-like card game focused on cooking up dishes to defeat animated foods.</p>
                                <li>Tools: <span className="highlight">Unity</span>, Figma, Git, C#, Airtable</li>
                                <li>Implemented all 5 of the game's bosses, working with game designers to <span className="highlight">update bosses during each iteration of the game's system design</span>.</li>
                                <li>Worked with a UX designer to <span className="highlight">create the game's tutorial to walk players through the entire process of the game's core loop</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projectImages">
                        <img src={EDO_Icon} className="projectIcon"></img>
                        <img src={EDO_Icon2} className="projectIcon"></img>
                </div>
            </div>

            <div className="projectHolder">
                <div className="projectSection">
                    <div className="projectHeaderLeft">
                        <h2>LIGHT-RUNNER</h2>
                        
                        <div>
                            <h3>UI/Gameplay Programmer</h3>
                            <h3>April 2023 - June 2023</h3>
                            <h3>Team: <span className="highlight">4</span></h3>
                        </div>
                    </div>
                    
                    <div className="projectDescription">
                        <Button bsPrefix="buttonLeft" onClick={()=> window.open("https://big-jungus.itch.io/light-runner", "_blank")}>PLAY NOW!</Button>
                        <div className="projectBodyLeft">
                            <ul>
                                <p>1 vs. 1 arena shooter focused on movement mechanics.</p>
                                <li>Tools: <span className="highlight">Unreal</span>, Perforce, Blueprints, C++</li>
                                <li>Designed and implemented the game's movement systems such as wall-running and dynamic sliding.</li>
                                <li><span className="highlight">Gathered feedback from over 20 playtests and iterated on each movement mechanic</span> to make the movement feel both smooth and rewarding for players.</li>
                                <li>This was my first game made in Unreal Engine 5, and was a huge <span className="highlight">learning experience for both Unreal and multiplayer programming</span>.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="projectImages">
                        <img src={LR_Icon} className="projectIcon"></img>
                        <img src={LR_Icon2} className="projectIcon"></img>
                </div>
            </div>

            <div className="padding" />
        </div>
    );
}

export default Projects;