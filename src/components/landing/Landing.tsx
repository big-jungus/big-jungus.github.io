import About from "./About";
import ProjectsRecent from "./ProjectsRecent";
import Experience from "./Experience";
import Contact from "./Contact";

import "./css/stylesHome.css"

import { useEffect } from "react";

type Props = {
    index: number,
    getProjects: boolean,
    setProjects: (flag: boolean) => void,
    updateIndex: (index: number) => void,
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; short: string; }[],
}

const Landing = ({
        index,
        getProjects,
        setProjects,
        updateIndex,
        projectsList,
    }: Props) => {

    useEffect(() => {
        if (getProjects){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    }, [getProjects])

    return (
        <div>
            <div className="pageBar"/>
            <div className="background">
                <div className="scrollingArrows">
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                    <div className="arrow"/>
                </div>
            </div>
            <div className={(getProjects)?"page-container noScroll":"page-container"}>
                <About />
                <ProjectsRecent index={index} setProjects={setProjects} updateIndex={updateIndex} projectsList={projectsList}/>
                <Experience />
                <Contact />
            </div>
        </div>
      );
}

export default Landing;