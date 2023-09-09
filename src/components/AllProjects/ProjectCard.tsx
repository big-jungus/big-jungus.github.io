import Card from "react-bootstrap/Card"
import {useNavigate} from "react-router-dom";

import "./projectCard.css"

type Props = {
    index: number;
    img:string; 
    title:string; 
    descShort:string; 
    redirect:string;
    updateIndex: (index: number) => void;
}

const ProjectCard = ({
        index,
        img,
        title,
        descShort,
        redirect,
        updateIndex
    }: Props) => {
    const navigate = useNavigate();

    function viewProject () {
        updateIndex(index);
        navigate(redirect);
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