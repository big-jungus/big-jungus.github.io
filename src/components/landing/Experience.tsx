import "./css/stylesHome.css"

function Experience () {
    return (
        <div className="experienceBackground">
            <div className="anchor" id="experience"/>
            <h1 className="sectionHeading experienceHeading">WORK EXPERIENCE</h1>

            <div className="experienceSection">
                <div className="experienceHeader">
                    <a href="https://www.saic.com" target="_blank">
                        <h2 className="experienceCompany">SAIC</h2>
                    </a>
                    
                    <div>
                        <h3 className="experiencePos">Game Programming Intern</h3>
                        <h3 className="experienceDate">June 2023 - August 2023</h3>
                        <h3 className="experienceDate">Team: <span className="highlight">5</span></h3>
                    </div>
                </div>
                
                <div className="experienceBody">
                    <p>This was a confidential project, making a realistic turn-based wargame based on a near-future scenario.</p>

                    <ul>
                        <li>Tools: <span className="highlight">Unreal</span>, Git, Blueprints, C++</li>
                        <li>Focused on <span className="highlight">developing the multiplayer framework</span> and implementing all UI into Unreal including <span className="highlight">menus, character selection, and HUD</span> .</li>
                        <li>Worked closely with two engineers to incorporate live Matlab generated data into the game.</li>
                    </ul>
                </div>
            </div>
            <div className="padding"/>
        </div>
    );
}
export default Experience;