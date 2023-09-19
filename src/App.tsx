import {useState} from "react";

import Splash from './components/landing/Splash';
import Landing from './components/landing/Landing';
import ProjectsOverview from './components/AllProjects/ProjectsOverview';
import NavBar from "./components/landing/NavBar";

import "./components/landing/css/stylesHome.css"

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [projectsState, setProjects] = useState(false);
    const [splashState, setSplash] = useState(false);

    return (
        <>
            <div className="page-container">
                {!splashState && <Splash setSplash={setSplash}/>}
                {splashState && <NavBar 
                    getProjects={projectsState} 
                    setProjects={setProjects}/>}

                {projectsState && <ProjectsOverview 
                                        index={activeIndex} 
                                        updateIndex={setActiveIndex}
                                        setProjects={setProjects} />}

                <Landing 
                    getProjects={projectsState} 
                    setProjects={setProjects} 
                    updateIndex={setActiveIndex} />
            </div>
        </>
    );
}
export default App;