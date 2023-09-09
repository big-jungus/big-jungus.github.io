import NavBar from "./NavBar";

import About from "./About";
import ProjectsRecent from "./ProjectsRecent";
import Experience from "./Experience";
import Contact from "./Contact";

import "./css/stylesHome.css"

type Props = {
    index: number;
    updateIndex: (index: number) => void;
}

const Landing = ({
        index,
        updateIndex
    }: Props) => {
    return (
        <>
            <div className="page-container">
                <NavBar index={index} updateIndex={updateIndex}/>
                <About />
                <ProjectsRecent updateIndex={updateIndex}/>
                <Experience />
                <Contact />
            </div>
        </>
      );
}

export default Landing;