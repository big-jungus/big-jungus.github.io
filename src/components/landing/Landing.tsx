import About from "./About";
import ProjectsRecent from "./ProjectsRecent";
import Experience from "./Experience";
import Contact from "./Contact";

import "./css/stylesHome.css"

import { useEffect } from "react";

type Props = {
    getProjects: boolean,
    setProjects: (flag: boolean) => void,
    updateIndex: (index: number) => void;
}

const Landing = ({
        getProjects,
        setProjects,
        updateIndex
    }: Props) => {

    // useEffect(() => {
    //    // on first page load, play an animation
    //         // use css to set splash display: visible (?) 
    //         // use css to set page content display: none
    //     // when animation is done
    //         // use css to set splash display: none 
    //         // use css to set page content display: visible (?)
    // }, [])

    useEffect(() => {
        if (getProjects){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    }, [getProjects])

    return (
        <>  
            <div className="page-container">
                <About />
                <ProjectsRecent setProjects={setProjects} updateIndex={updateIndex}/>
                <Experience />
                <Contact />
            </div>
        </>
      );
}

export default Landing;