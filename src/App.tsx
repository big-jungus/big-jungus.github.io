import { Routes, Route } from "react-router-dom";

import NavBar from "./components/landing/NavBar";
import Landing from "./components/landing/Landing";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./components/ScrollToTop";

import "./components/landing/css/stylesHome.css";

function App() {
    return (
        <div style={{ backgroundColor: "black" }}>
            <ScrollToTop />
            <div className="page-container">
                <NavBar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/projects/:slug" element={<ProjectPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
