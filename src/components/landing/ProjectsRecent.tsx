import "./css/stylesHome.css"
import "./css/projectsRecent.css"

import Isabel_Icon from "/projectPictures/Isabel/Isabel_Title_Illustration (1).png"
import ETH_Icon from "/projectPictures/Ether/ETH6.png"
import Pitaya_Icon from "/projectPictures/Pitaya/Pitaya_HUD.png"

import { useNavigate } from "react-router-dom";

type ProjectEntry = {
    title: string;
    engine: string;
    blurb: string;
    tags: string[];
    slug: string;
    image: string;
};

const caseStudies: ProjectEntry[] = [
    {
        title: "ISABEL'S SOUL COMPASS",
        engine: "Unity",
        blurb: "Redesigned the HUD from the ground up — minimap, stage progression meter, and compass system.",
        tags: ["UI Programming", "Shaders", "Unity", "C#"],
        slug: "isabel",
        image: Isabel_Icon,
    },
];

const selectedProjects: ProjectEntry[] = [
    {
        title: "PROJECT: ETHER",
        engine: "Unreal Engine 5",
        blurb: "Implemented all in-game UI and menus, built the save/load system, and developed the objective system.",
        tags: ["UI Programming", "Gameplay Programming", "Unreal", "C++", "Blueprints", "UMG"],
        slug: "project-ether",
        image: ETH_Icon,
    },
    {
        title: "PITAYA!",
        engine: "Unreal Engine 5",
        blurb: "Created and implemented all UI elements and animations, with full gamepad and keyboard/mouse support.",
        tags: ["UI Programming", "Unreal", "C++", "Blueprints", "UMG"],
        slug: "pitaya",
        image: Pitaya_Icon,
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <div className="sectionHeading">CASE STUDIES</div>

            {caseStudies.map((project) => (
                <div className="projectHolder" key={project.slug}>
                    <div className="projectRow">
                        <div className="projectInfo">
                            <h2
                                className="projectTitle clickable"
                                onClick={() => navigate(`/projects/${project.slug}`)}
                            >
                                {project.title}
                            </h2>
                            <span className="projectEngine">{project.engine}</span>
                            <p className="projectBlurb">{project.blurb}</p>
                            <div className="projectTags">
                                {project.tags.map((tag, i) => (
                                    <span className="projectTag" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <img
                            src={project.image}
                            className="projectThumb clickable"
                            onClick={() => navigate(`/projects/${project.slug}`)}
                            alt={project.title}
                        />
                    </div>
                </div>
            ))}

            <div className="sectionHeading" style={{ marginTop: "8vh" }}>SELECTED WORK</div>

            {selectedProjects.map((project) => (
                <div className="projectHolder" key={project.slug}>
                    <div className="projectRow">
                        <div className="projectInfo">
                            <h2
                                className="projectTitle clickable"
                                onClick={() => navigate(`/projects/${project.slug}`)}
                            >
                                {project.title}
                            </h2>
                            <span className="projectEngine">{project.engine}</span>
                            <p className="projectBlurb">{project.blurb}</p>
                            <div className="projectTags">
                                {project.tags.map((tag, i) => (
                                    <span className="projectTag" key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>

                        <img
                            src={project.image}
                            className="projectThumb clickable"
                            onClick={() => navigate(`/projects/${project.slug}`)}
                            alt={project.title}
                        />
                    </div>
                </div>
            ))}

            <div className="padding" />
        </div>
    );
}

export default Projects;
