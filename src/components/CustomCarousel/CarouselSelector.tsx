import arrow from "/elements/right_arrow.svg"

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
            <img className="selectorButton left" src={arrow} onClick={() => handleSelect(false)} />
            {projectsID}
            <img className="selectorButton right" src={arrow} onClick={() => handleSelect(true)} />
        </div>
    );
}

export default Selector;