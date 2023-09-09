import me from '/images/me.png';
import "./css/stylesHome.css"


function About() {
    return(
        <div className="aboutBackground">
            <div className="anchor" id="about"/>
            <h1 className="sectionHeading aboutHeading">ABOUT ME</h1>

            <div className="aboutTopBorder" />
            <div className="aboutWrapper">
                <div className="aboutPictureWrapper">
                    <img className="aboutPicture" src={me} />
                </div>
                <div>
                    <p className="aboutParagraph">
                        I'm currently a senior at UC Irvine, majoring in Game Design and Interactive Media, with experience in Unity, C#, and Python. I find gameplay design and combat design to be really interesting, and have been designing games for a variety of genres. <br/><br/>
                        I've been playing games for as long as I remember, and games have had a huge impact on defining who I am today. Some of my favorite games of all time are Super Mario Galaxy, Chrono Trigger, Slay the Spire, Overwatch, Risk of Rain 2, Noita, and Elden Ring!<br/><br/>
                        Whether through thrilling gameplay, brain racking mechanics, or compelling stories, I knew I wanted to recreate the experiences I had for the next generations of gamers.<br/><br/>
                        During the last few years at UC Irvine, I've gone from creating simple games on my own, to working with small scale teams to produce polished games for others to enjoy!
                    </p>    
                </div>
            </div>
            <div className="aboutBotBorder" />
            <div className="padding"/>
        </div>
    );
}

export default About;