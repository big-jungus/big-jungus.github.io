import "./css/stylesHome.css"


function About() {

    function NavNavigation (id:string) {
        document.getElementById(id)?.scrollIntoView();
      }
    return(
        <div className="aboutBackground">
            <div className="anchor" id="about"/>
            <h1 className="sectionHeading aboutHeading">Hey! I'm Matthew.</h1>
            <div className="aboutWrapper">
                <div className="aboutParagraph">
                    <p>
                    I'm a UI Engineer, currently making games in Unity and Unreal, and I'm passionate about pushing the boundaries of games to create fresh gameplay experiences for all!
                    <ul/>
                    </p>
                    <p className="highlight aboutHover" onClick={() => NavNavigation("recent")}>↓ SEE MY GAMES ↓</p>
                </div>
            </div>
            <div className="padding"/>
        </div>
    );
}

export default About;