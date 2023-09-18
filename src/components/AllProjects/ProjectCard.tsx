import Card from "react-bootstrap/Card"

import "./projectCard.css"

type Props = {
    index: number;
    img:string; 
    title:string; 
    descShort:string; 
    redirect:string;
    updateIndex: (index: number) => void,
    setProjects: (flag:boolean) => void;
}

const ProjectCard = ({
        index,
        img,
        title,
        descShort,
        updateIndex,
        setProjects
    }: Props) => {

    function viewProject () {
        updateIndex(index);
        setProjects(true);
    }

    return(
        <div className="projectCardBackground">
            <div className="topBorder"/>
            <div className="cardWrapper">
                <Card className="projectCard" onClick={() => viewProject()}>
                    <Card.Img className="image" variant="top" src={img}/>
                    <Card.Body>
                        <Card.Title className="titleText">{title}</Card.Title>
                        <Card.Text className="bodyText">
                            {descShort}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="botBorder"/> 
        </div>
    );
}
export default ProjectCard;