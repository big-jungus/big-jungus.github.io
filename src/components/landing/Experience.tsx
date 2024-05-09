import "./css/stylesHome.css"

import { Button } from "react-bootstrap";

function Experience () {
    return (
        <div className="experienceBackground">
            <div className="anchor" id="experience"/>
            <h1 className="sectionHeading experienceHeading">WORK EXPERIENCE</h1>

            <div className="projectHolder">
                <div className="projectSection">
                    <div className="projectHeaderLeft">
                        <a href="https://www.saic.com" target="_blank">
                            <h2>SAIC</h2>
                        </a>
                        
                        <div>
                            <h3>Game Programming Intern</h3>
                            <h3>June 2023 - August 2023</h3>
                            <h3>Team: <span className="highlight">5</span></h3>
                        </div>
                    </div>
                    
                    <div className="projectDescription">
                        <Button className="buttonLeft">VIEW WEBSITE</Button>
                        <div className="projectBodyLeft">
                            <ul>
                                <p>This was a confidential project, making a realistic turn-based wargame based on a near-future scenario.</p>
                                <li>Tools: <span className="highlight">Unreal</span>, Git, Blueprints, C++</li>
                                <li>Focused on <span className="highlight">developing the multiplayer framework</span> and implementing all UI into Unreal including <span className="highlight">menus, character selection, and HUD</span> .</li>
                                <li>Worked closely with two engineers to incorporate live Matlab generated data into the game.</li>
                                <li>Presented to key military personnel, <span className="highlight">exceeding stakeholder expectations.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="padding"/>
        </div>
    );
}
export default Experience;