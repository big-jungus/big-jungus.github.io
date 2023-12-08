import me from '/images/me.png';
import "./css/stylesHome.css"


function About() {
    return(
        <div className="aboutBackground">
            <div className="anchor" id="about"/>
            <div className="headingBar"/>
            <h1 className="sectionHeading aboutHeading">ABOUT</h1>
            <div className="aboutWrapper">
                <div>
                    <p className="aboutParagraph">
                        I'm currently a senior at UC Irvine, majoring in Game Design and Interactive Media, with experience in Unity, Unreal, C#, C++, and Python. I find both UI programming and combat systems in games to be especially interesting, and have been creating games for a variety of genres. <br/><br/>
                        I've been playing games for as long as I remember, and games have had a huge impact on defining who I am today. Some of my favorite games of all time (in no particular order) are Super Mario Galaxy, Chrono Trigger, Slay the Spire, League of Legends, Risk of Rain 2, Noita, and CS:GO!<br/><br/>
                        These games hold a special place in my heart, and I still remember the chills of playing through each of these games for the first time. Whether through thrilling gameplay, brain racking mechanics, or compelling stories, I knew I wanted to recreate the same feelings I had for the next generations of gamers.<br/><br/>
                        I aim to push the boundaries on gaming, creating new gameplay experiences that inspire gamers and developers alike!
                    </p>    
                </div>
                <img className="aboutPicture" src={me}/>
            </div>
            <div className="padding"/>
        </div>
    );
}

export default About;