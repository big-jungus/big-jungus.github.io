import "./projectOverview.css"
import ProjectSidebar from "./ProjectSidebar";
import NavBar from "../landing/NavBar";
import { Button } from 'react-bootstrap';


import {useState, useEffect} from "react";
import {useTimer} from "./useTimer.tsx"

/*I'd like to do this using the require() function, but I guess I would need to do some more setup with client-side JS which I need more time to read up on, which I don't have.
    If you're looking at this, I'm sorry for the sins I have committed*/
import LR1 from "/projectPictures/LightRunner/LR1.jpg"
import LR2 from "/projectPictures/LightRunner/LR2.gif"
import LR3 from "/projectPictures/LightRunner/LR3.png"

import KoR1 from "/projectPictures/KingOfTheRing/KoR1.png";
import KoR2 from "/projectPictures/KingOfTheRing/KoR2.png";
import KoR3 from "/projectPictures/KingOfTheRing/KoR3.png";

import ZD1 from "/projectPictures/ZotDev/ZD1.png"
import ZD2 from "/projectPictures/ZotDev/ZD2.png"
import ZD3 from "/projectPictures/ZotDev/ZD3.png"

import TLC1 from "/projectPictures/TheLastCrucible/TLC1.png";
import TLC2 from "/projectPictures/TheLastCrucible/TLC2.gif";
import TLC3 from "/projectPictures/TheLastCrucible/TLC3.png";

import MM1 from "/projectPictures/MusicalMadness/MM1.png"
import MM2 from "/projectPictures/MusicalMadness/MM2.png"
import MM3 from "/projectPictures/MusicalMadness/MM3.png"

import AT1 from "/projectPictures/AcidTrip/AT1.png";
import AT2 from "/projectPictures/AcidTrip/AT2.png";
import AT3 from "/projectPictures/AcidTrip/AT3.png";

import DB1 from "/projectPictures/DeliveryBear/DB1.png";
import DB2 from "/projectPictures/DeliveryBear/DB2.png";
import DB3 from "/projectPictures/DeliveryBear/DB3.png";

import TB1 from "/projectPictures/TFTBreakdown/TB1.png"
import TB2 from "/projectPictures/TFTBreakdown/TB2.png"
import TB3 from "/projectPictures/TFTBreakdown/TB3.png"

type Props = {
    index: number;
    updateIndex: (index: number) => void;
}

const ProjectsOverview = ({
        index,
        updateIndex
    }: Props) => {

    const projectsList = [{
        id: 0,
        title: "Musical Madness",
        date: "April 2022 - June 2022",
        link: "https://dg155.itch.io/musical-madness",
        images: [MM1, MM2, MM3],
        role: "Design, Programming",
        teamsize: "6",
        description: `Musical Madness is a top down shooter dungeon crawler about using music to fight against musical instruments using various weapons. The player must collect note keys to proceed through each level, eventually reaching a final boss.

                        This game was created for the Video Game Development Club at UCI, and I worked alongside a full team of programmers, artists, and audio designers to create this game with three procedurally generated levels and a final boss!

                        I also designed and programmed the Grand Piano final boss. This final boss was personally one of my favorite parts of my projects, as it was a challenge to balance both creating this boss and cramming for finals at the same time.

                        You can skip ahead to access to the boss by using the shortcut: Shift+Alt+B.`
    },
    {
        id: 1,
        title: "The Last Crucible",
        date: "January 2023 - March 2023",
        link: "https://langzhezr.itch.io/the-last-crucible",
        images: [TLC1, TLC2, TLC3],
        role: "Programming, Design",
        teamsize: "11",
        description: `The Last Crucible is a Souls-like game featuring two levels, and a final boss. This game pulls inspiration from both Elden Ring and Sekiro, even featuring Sekiro's Posture meters for enemies.

                        This game was created for the Video Game Development Club at UCI, and I worked with a team of programmers, level designers, and writers to create this game! In addition to the two levels and boss, this game also features a voiced cutscene for the game's story. 

                        I personally worked on designing the final boss, as well as programming and implementing two enemy behaviors and the boss's two ranged attacks. `
    },
    {
        id: 2,
        title: "Zot Dev",
        date: "April 2023 - June 2023",
        link: "https://dg155.itch.io/zot-dev",
        images: [ZD1, ZD2, ZD3],
        role: "Programming, UX/UI",
        teamsize: "17",
        description: `Zot Dev is a simulation game based on the experiences of a GDIM student at UCI! Players must balance between keeping good grades, successful VGDC projects, and their own mental health! This game features a variety of cameos who will help to improve your game development skills!

        This game was created for a course in UCI's Game Development major. I worked alongside three other programmers and one other UX/UI designer, handling both general gameplay programming and UI implementation as well as designing the UI for the main game! My main focus for this game was on the game's task system for both classes and projects, as well as features surrounding them. I also worked as a general helping hand, squashing various bugs and implementing other small features.`
    },
    {
        id: 3,
        title: "King of the Ring",
        date: "April 2023 - June 2023",
        link: "https://coleyoung02.itch.io/king-of-the-ring",
        images: [KoR1, KoR2, KoR3],
        role: "UX/UI",
        teamsize: "8",
        description: `King of the Ring is a chess-boxing game where players are pitted against a billionaire with an especially punchable face. Players must best this billionaire in a bout of four rounds of chess and boxing! 

        This game was created for the Video Game Development Club at UCI, and I personally worked as the UX/UI designer for this game. I designed the main gameplay UI for the game, and balanced the boxing portions of the game. 

        Part of the challenge of designing this game's UI came from the game's limited pixel size. Because I had limited space to work with, I had to design a UI that would keep the focus on the core gameplay while still displaying all relevant information for players.`
    },
    {
        id: 4,
        title: "Light-Runner",
        date: "April 2023 - June 2023",
        link: "https://big-jungus.itch.io/light-runner",
        images: [LR1, LR2, LR3],
        role: "Programming, Design",
        teamsize: "4",
        description: `Light-Runner is a 1v1 arena shooter focused heavily on movement mechanics. Defeat your opponent through superior aim and movement, using sliding, wall-running, and ledge techs!

        This game was created for a multiplayer course in UCI's Game Development major. I worked on team of four, and I specifically focused on designing and implementing the game's movement mechanics. I also implemented the game's UI! 

        This project was personally a huge learning experience in how Unreal's multiplayer systems work, and created a newfound love for working in Unreal!`
    },
    {
        id: 5,
        title: "Acid Trip 4",
        date: "January 2022 - March 2022",
        link: "https://alby-albinodinosaur.itch.io/acid-trip-4-definitive-edition",
        images: [AT1, AT2, AT3],
        role: "Design",
        teamsize: "10",
        description: `Acid Trip 4 is a visual novel game, combined with turn-based combat sections. This game is a continuation of the Acid Trip games made for UCI's Video Game Development Club.

                        I worked in a team of 10 writers, programmers, designers, and an artist. I designed the combat system, and created and balanced all abilities for every character and enemy.

                        One of my favorite abilities I created was the Statistician's "Deletion". The original design was to set a random stat from the targeted enemy to 0, but when it was implemented into the game it ended up being able to set both the target's name and HP to 0 as well. We all got a good laugh out of it, and felt that it fit the theme of Acid Trip well, so we kept it in the game. 

                        I also made three character portraits for the main characters of the game! These were used for the visual novel portion of the game.`
    },
    {
        id: 6,
        title: "Delivery Bear",
        date: "April 28 - May 1 2023 (Ludum Dare 53)",
        link: "https://dg155.itch.io/delivery-bear",
        images: [DB1, DB2, DB3],
        role: "Programming",
        teamsize: "8",
        description: `Delivery Bear is a 3rd-person delivery game about a bear with a grappling hook, delivering honey for the Bear Mafia. Make your deliveries as fast as possible, as the BCPD (Bear City Police Department) is planning a raid!

                        This game was created for Ludum Dare 53, with a couple of friends and classmates. This game was one of our first experiences really working in Unreal Engine, making it really fun to learn about what Unreal can do compared to our previous experiences in Unity.`
    },
    {
        id: 7,
        title: "TFT Breakdown",
        date: "January 2022 - March 2022",
        link: "https://docs.google.com/presentation/d/1lpMFXaXc8ZnGLKMghT03eQ2M6IMzkIIYZ5Au_11PL04/edit?usp=sharing",
        images: [TB1, TB2, TB3],
        role: "Programming, Data Analysis",
        teamsize: "2",
        description: `Fall 2022, I designed and created an automated ETL pipeline using Python to gather data from 2700 games across all ranks in Riot Games's Teamfight Tactics. I also worked with one other partner to clean and analyze the data I had collected, providing us with our final results.

                        This was created as a final project for a course on data analytics in games, and aimed to answer research questions regarding the game as its season came to an end. Creating the data pipeline for this project was something I had never done before, but I found the data extraction and analysis processes to be extremely interesting. Although the Riot Games API provides limited game data for Teamfight Tactics compared to their other titles, my partner and I were able to produce significant results.`
    }]

    let project = projectsList[index]

    const [clickAnim, setAnim] = useState(false);

    const {start, reset, running } = useTimer();

    const click = () => {
        reset();
        start();
        setAnim(true);
    }

    useEffect(() => {
        if (!running){
            setAnim(false);
        }
    }, [running])

    return(
        <div className="pageContainer">
        <NavBar />
            <div className="overviewBackground">
                <ProjectSidebar index={index} updateIndex={updateIndex} projectsList={projectsList} clickAnim={click}/>
                
                <div className="projectsMain">
                    <div className={clickAnim?"projectAnim project":"project"}>
                        
                           
                        <h1 className="projectTitle">
                            {project.title}
                        </h1>

                        <div className="overviewTopBorder"/>
                        
                        <div className="projectBody">
                            <div className="pictures">
                                <img className="images" src={project.images[0]} />
                                <img className="images" src={project.images[1]} />

                                <a className={(index === 7)?"":"inactiveLink"} href={(index === 7)?project.link:""} target="_blank">
                                    <img className={"images"} src={project.images[2]}/>
                                </a>
                                
                                
                            </div>
                            <div className="content">
                                <h4>Role: {project.role}</h4>
                                <h4>Team Size: {project.teamsize}</h4>
                                <h4>{project.date}</h4>
                                <Button className="projectLink" href={project.link} target="_blank" variant="dark">{(index === 7)?"PRESENTATION":"DOWNLOAD"}</Button>
                                <p>{project.description}</p>
                            </div>
                        </div>
                        <div className="overviewBotBorder"/>   
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsOverview;