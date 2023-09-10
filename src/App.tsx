import { HashRouter, Routes, Route } from 'react-router-dom';
import {useState} from "react";

import Splash from './components/landing/Splash';
import Landing from './components/landing/Landing';
import ProjectsOverview from './components/AllProjects/ProjectsOverview';

function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        setActiveIndex(newIndex);
    }

    return (
        <HashRouter basename="/">
            <Routes>
                <Route 
                    path="/"
                    element={ <Splash/> }
                />
                <Route 
                    path="/home"
                    element={ <Landing updateIndex={updateIndex} index={activeIndex}/> }
                />
                <Route 
                    path="/projects"
                    element={ <ProjectsOverview
                                    index={activeIndex}
                                    updateIndex={updateIndex}
                    /> }
                />
            </Routes>
        </HashRouter>
    );
}
export default App;