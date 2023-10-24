import { Button } from "react-bootstrap";

import "./Carousel.css"

type Props = {
    index: number,
    updateIndex: (index: number) => void,
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; }[];
}

const Selector = ({
    index,
    updateIndex,
    projectsList
}: Props) =>{

    function handleSelect(forward: boolean){
        if (forward) {
            if (index != (projectsList.length - 1)){
                updateIndex(index + 1)
            }
        }
        else {
            if (index != 0){
                updateIndex(index - 1)
            }
        }
    }

    const projectsID = projectsList.map(project =>
        <div className={(index == project.id)?"activeProject":"inactiveProject"} onClick={() => updateIndex(project.id)}/>
        );

    return(
        <div className="selectorWrapper">
            <Button className="selectorButton left" onClick={() => handleSelect(false)} variant="dark"><p>&lt;</p></Button>
            {projectsID}
            <Button className="selectorButton right" onClick={() => handleSelect(true)} variant="dark"><p>&gt;</p></Button>
        </div>
    );
}

export default Selector;