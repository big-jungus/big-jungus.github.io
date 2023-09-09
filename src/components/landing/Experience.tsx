import "./css/stylesHome.css"

function Experience () {
    return (
        <div className="experienceBackground">
            <div className="anchor" id="experience"/>
            <h1 className="sectionHeading">EXPERIENC</h1>
            <div className="standardTopBorder"/>

            <div className="experienceHeader">
                <a href="https://www.saic.com" target="_blank">
                    <h2 className="experienceCompany">SAIC</h2>
                </a>
                
                <div>
                    <h3 className="experiencePos">Multimedia/Game Programming Intern</h3>
                    <h3 className="experienceDate"><i>June 2023 - August 2023</i></h3>
                </div>
            </div>

            <ul>
                <li>Collaborated with a team of two other game developer interns and two engineering interns to design and develop a turn-based wargame in Unreal Engine that utilized Matlab generated data, with the goal of simulating military weaponry for a possible near-future scenario.</li>
                <li>Designed and implemented the multiplayer framework, allowing for three different views of the game: two different players, and an omniscient game master.</li>
                <li>Developed the games's UI that both housed various game actions for all players, and displayed relevant Matlab generated data.</li>
            </ul>
            
            <div className="standardBotBorder"/>
            <div className="padding"/>
        </div>
    );
}
export default Experience;