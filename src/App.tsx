/*I'd like to do this using the require() function, but I guess I would need to do some more setup with client-side JS which I need more time to read up on, which I don't have.
    If you're looking at this, I'm sorry for the sins I have committed*/
    import LR1 from "/projectPictures/LightRunner/LR1.jpg"
    import LR2 from "/projectPictures/LightRunner/LR2.gif"
    import LR3 from "/projectPictures/LightRunner/LR3.png"
    
    import KoR2 from "/projectPictures/KingOfTheRing/KoR2.png";
    import KoR3 from "/projectPictures/KingOfTheRing/KoR3.png";
    
    import ZD1 from "/projectPictures/ZotDev/ZD1.png"
    import ZD2 from "/projectPictures/ZotDev/ZD2.png"
    import ZD3 from "/projectPictures/ZotDev/ZD3.png"
    
    import TLC1 from "/projectPictures/TheLastCrucible/TLC1.png";
    import TLC2 from "/projectPictures/TheLastCrucible/TLC2.gif";
    import TLC3 from "/projectPictures/TheLastCrucible/TLC3.png";
    
    import MM1 from "/projectPictures/MusicalMadness/MM4.png"
    import MM2 from "/projectPictures/MusicalMadness/MM1.png"
    import MM3 from "/projectPictures/MusicalMadness/MM2.png"
    import MM4 from "/projectPictures/MusicalMadness/MM3.png"
    
    import AT1 from "/projectPictures/AcidTrip/AT1.png";
    import AT2 from "/projectPictures/AcidTrip/AT2.png";
    import AT3 from "/projectPictures/AcidTrip/AT3.png";
    
    import EDO1 from "/projectPictures/EdoEdo/EDO1.png";
    import EDO2 from "/projectPictures/EdoEdo/EDO2.png";
    import EDO3 from "/projectPictures/EdoEdo/EDO3.png";
    import EDO4 from "/projectPictures/EdoEdo/EDO4.png";

    import ETH1 from "/projectPictures/Ether/ETH1.png"
    import ETH2 from "/projectPictures/Ether/ETH2.jpg"
    import ETH3 from "/projectPictures/Ether/ETH3.png"
    import ETH4 from "/projectPictures/Ether/ETH4.png"
    import ETH5 from "/projectPictures/Ether/ETH5.png"
    

import {useState} from "react";

import Landing from './components/landing/Landing';
import ProjectsOverview from './components/AllProjects/ProjectsOverview';
import NavBar from "./components/landing/NavBar";

import "./components/landing/css/stylesHome.css"

function App() {

    const projectsList = [
    {
        id: 0,
        title: "Project: Ether",
        date: "In Progress",
        link: "https://pjheric.itch.io/project-ether-playtest",
        images: [ETH1, ETH2, ETH3, ETH4, ETH5],
        role: "UI Programming, Gameplay Programming",
        teamsize: "40",
        short: `Fight back against the oppressive UAD using your talents as a witch in this Action-Stealth game!`,
        description: `Project: Ether is a Action-Stealth game focused on using your magical abilities to fight against the UAD. Freeze time using your ability to harness Ether, and defeat the guards!
        
        This game is being created as a capstone project for UCI's Game Design & Interactive Media major, made in Unreal Engine 5! We are working alongside other students from the Laguna College of Art and Design to create the game's art as well! The game is currently in progress, and aims to be finished by March 2024.
        
        I personally handle UI programming for this project, as well as general gameplay programming. On the UI end, I work with UI designers to properly implement their designs from Figma into the game. I handle both the implementation of designs into Unreal's UMG system to create widgets, as well as the functionality for connecting relevant information to these widgets. I also implemented the entire settings menu for the game, with features like key remapping, graphics changes, and colorblind support!. On the gameplay programming end, I also work with other gameplay programmers and designers to implement various gameplay features.
        
        One of my favorite things I've created so far for this project is the Investigation system. Upon using Ether, players are able to see various interactable objects highlighted in the world using post-processing. I worked with the person who implemented this to add an additional feature, where aiming at that object would pull up relevant information to it, such as a guard's state, path, etc.`
    },
    {
        id: 1,
        title: "Edo Edo Teishoku",
        date: "In Progress",
        link: "https://funbam.itch.io/edo-edo-teishoku",
        images: [EDO3, EDO1, EDO2, EDO4],
        role: "Gameplay Programming, Enemy Programming",
        teamsize: "39",
        short: `Dish out delectable dishes to fight against feisty foods gone feral!`,
        description: `Edo Edo Teishoku is a Rogue-lite card game that is heavily inspired by Slay the Spire. Players cook up dishes by combining various ingredients together, creating an vast variety of food to defeat some devious dishes.
        
        This game is being created for the Video Game Development Club at UCI, and I am currently working with a large multi-disciplinary team to create this game completely from scratch in Unity. This game is currently in progress still, and aims to be finish production by the end of March 2024!
        
        I personally work on programming enemies for this game, and have implemented each of the game's bosses. Much of the game's combat system is built around large networks of delegates, and I personally enjoy the problem-solving involved in figuring out ways to implement unique behaviors for each boss while still adhering the existing combat system.
        
        One of my favorite bosses to implement was the Sweet Boss, as one of its unique moves redistributed damage dealt to all of its allies during the turn. Figuring out how to properly implement this design was challenging, but extremely satisfying to finally complete.`
    },
    {
        id: 2,
        title: "Zot Dev",
        date: "April 2023 - June 2023",
        link: "https://dg155.itch.io/zot-dev",
        images: [ZD1, ZD2, ZD3],
        role: "Programming, UX/UI",
        teamsize: "17",
        short: `Experience the life of a UCI GDIM student, learning to balance a social life, classes, and game projects!`,
        description: `Zot Dev is a simulation game based on the experiences of a GDIM student at UCI! Players must balance between keeping good grades, successful VGDC projects, and their own mental health! This game features a variety of cameos who will help to improve your game development skills!

        This game was created for a course in UCI's Game Development major. I worked alongside three other programmers and one other UX/UI designer, handling both general gameplay programming and UI implementation as well as designing the UI for the main game! My main focus for this game was on the game's task system for both classes and projects, as well as features surrounding them. I also worked as a general helping hand, squashing various bugs and implementing other small features.`
    },
    {
        id: 3,
        title: "The Last Crucible",
        date: "January 2023 - March 2023",
        link: "https://langzhezr.itch.io/the-last-crucible",
        images: [TLC1, TLC2, TLC3],
        role: "Programming, Design",
        teamsize: "11",
        short: `Defy your father's wishes and defeat the final Crucible Knight that stands between you and your people's salvation!`,
        description: `The Last Crucible is a Souls-like game featuring two levels, and a final boss. This game pulls inspiration from both Elden Ring and Sekiro, even featuring Sekiro's Posture meters for enemies.

                        This game was created for the Video Game Development Club at UCI, and I worked with a team of programmers, level designers, and writers to create this game! In addition to the two levels and boss, this game also features a voiced cutscene for the game's story. 

                        I personally worked on designing the final boss, as well as programming and implementing two enemy behaviors and the boss's two ranged attacks. `
    },
    {
        id: 4,
        title: "MUSICAL MADNESS",
        date: "April 2022 - June 2022",
        link: "https://dg155.itch.io/musical-madness",
        images: [MM1, MM3, MM4, MM2],
        role: "Design, Programming",
        teamsize: "6",
        short: `Explore a vast dungeon, fighting against various musical instruments to restore musical harmony to the world!`,
        description: `Musical Madness is a top down shooter dungeon crawler about using music to fight against musical instruments using various weapons. The player must collect note keys to proceed through each level, eventually reaching a final boss.

        This game was created for the Video Game Development Club at UCI, and I worked alongside a full team of programmers, artists, and audio designers to create this game with three procedurally generated levels and a final boss!

        I also designed and programmed the Grand Piano final boss. This final boss was personally one of my favorite parts of my projects, as it was a challenge to balance both creating this boss and cramming for finals at the same time. 
        
        Check out the game here! You can skip ahead to access to the boss by using the shortcut: Shift+Alt+B.`
    },
    {
        id: 5,
        title: "King of the Ring",
        date: "April 2023 - June 2023",
        link: "https://coleyoung02.itch.io/king-of-the-ring",
        images: [KoR3, KoR2],
        role: "UX/UI",
        teamsize: "8",
        short: `A chess-boxing game set against a particular billionare an especially punchable face.`,
        description: `King of the Ring is a chess-boxing game where players are pitted against a billionaire with an especially punchable face. Players must best this billionaire in a bout of four rounds of chess and boxing! 

        This game was created for the Video Game Development Club at UCI, and I personally worked as the UX/UI designer for this game. I designed the main gameplay UI for the game, and balanced the boxing portions of the game. 

        Part of the challenge of designing this game's UI came from the game's limited pixel size. Because I had limited space to work with, I had to design a UI that would keep the focus on the core gameplay while still displaying all relevant information for players.`
    },
    {
        id: 6,
        title: "Light-Runner",
        date: "April 2023 - June 2023",
        link: "https://big-jungus.itch.io/light-runner",
        images: [LR1, LR2, LR3],
        role: "Programming, Design",
        teamsize: "4",
        short: `A futuristic Online Multiplayer 1-vs-1 Arena Shooter focused on destroying your opponents through superior movement.`,
        description: `Light-Runner is a 1v1 arena shooter focused heavily on movement mechanics. Defeat your opponent through superior aim and movement, using sliding, wall-running, and ledge techs!

        This game was created for a multiplayer course in UCI's Game Development major. I worked on team of four, and I specifically focused on designing and implementing the game's movement mechanics. I also implemented the game's UI! 

        This project was personally a huge learning experience in how Unreal's multiplayer systems work, and created a newfound love for working in Unreal!`
    },
    {
        id: 7,
        title: "Acid Trip 4",
        date: "January 2022 - March 2022",
        link: "https://alby-albinodinosaur.itch.io/acid-trip-4-definitive-edition",
        images: [AT1, AT2, AT3],
        role: "Design",
        teamsize: "10",
        short: `The lore runs deep in this game. You gotta play it to get it.`,
        description: `Acid Trip 4 is a visual novel game, combined with turn-based combat sections. This game is a continuation of the Acid Trip games made for UCI's Video Game Development Club.

                        I worked in a team of 10 writers, programmers, designers, and an artist. I designed the combat system, and created and balanced all abilities for every character and enemy.

                        One of my favorite abilities I created was the Statistician's "Deletion". The original design was to set a random stat from the targeted enemy to 0, but when it was implemented into the game it ended up being able to set both the target's name and HP to 0 as well. We all got a good laugh out of it, and felt that it fit the theme of Acid Trip well, so we kept it in the game. 

                        I also made three character portraits for the main characters of the game! These were used for the visual novel portion of the game.`
    }]

    const [activeIndex, setActiveIndex] = useState(0);
    const [projectsState, setProjects] = useState(false);

    return (
        <div style={{backgroundColor: "black"}}>  
            <div className="page-container">
                <NavBar 
                        getProjects={projectsState} 
                        setProjects={setProjects}/>

                {projectsState && <ProjectsOverview 
                                        index={activeIndex} 
                                        setProjects={setProjects}
                                        projectsList={projectsList} />}

                <Landing 
                    index={activeIndex}
                    getProjects={projectsState} 
                    setProjects={setProjects} 
                    updateIndex={setActiveIndex}
                    projectsList={projectsList} />
            </div>
        </div>
    );
}
export default App;