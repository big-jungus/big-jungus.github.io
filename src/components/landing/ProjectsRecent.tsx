import { Carousel, Button } from "react-bootstrap";
import Selector from "../CustomCarousel/CarouselSelector";

import "./css/stylesHome.css"

type Props = {
    index: number,
    setProjects: (flag: boolean) => void,
    updateIndex: (index: number) => void,
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; short: string;}[];
}

const Projects = ({
        index,
        setProjects,
        updateIndex,
        projectsList
    }: Props) =>{



    let project = projectsList[index]

    const projectsImage = projectsList.map(project =>
        <Carousel.Item>
            <img className="carouselImage" src={project.images[0]}/>
        </Carousel.Item>
        );

    return(
        <div className="projectsBackground">
            <div className="anchor" id="recent"/>
            <div className="headingBar"/>
            <div className="sectionHeading">
                PROJECTS
                <Selector index={index} updateIndex={updateIndex} projectsList={projectsList}/>
            </div>
            

            <div className="customCarousel">
                <Carousel className="carousel" activeIndex={index} interval={null} controls={false} indicators={false}>
                        {projectsImage}
                </Carousel>
                    
                <div className="description">
                    <h1 className="descriptionHeader">
                        {project.title}
                    </h1>
                    <p className="descriptionText">
                        {project.short}
                    </p>
                    <Button className="galleryButton" onClick={() => setProjects(true)} variant="dark">
                        VIEW GALLERY
                    </Button>
                </div>
            </div>

            <div className="scrollingBackground">
                <div className="leftToRightText">
                    <div className="scrollingItem">
                    CHECK OUT MORE &gt; CHECK OUT MORE &gt; CHECK OUT MORE &gt; CHECK OUT MORE &gt; CHECK OUT MORE &gt; CHECK OUT MORE &gt;
                    </div>
                </div>
            </div>

            <div className="padding" />
        </div>
    );
}

export default Projects;