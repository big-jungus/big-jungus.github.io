import About from "./About";
import ProjectsRecent from "./ProjectsRecent";
import Contact from "./Contact";

import "./css/stylesHome.css"

const Landing = () => {
    return (
        <div>
            <div className="background">
                <div className="scrollingArrows">
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                </div>
            </div>
            <div className="page-container">
                <About />
                <ProjectsRecent />
                <Contact />
            </div>
        </div>
    );
}

export default Landing;
