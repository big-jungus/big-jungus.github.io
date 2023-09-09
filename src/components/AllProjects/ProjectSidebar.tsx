import "./projectOverview.css"

type Props = {
    index: number;
    updateIndex: (index: number) => void;
    projectsList: { id: number; title: string; date: string; link: string; images: string[]; description: string; }[];
    clickAnim: () => void;
}

const ProjectSidebar = ({
    index,
    updateIndex,
    projectsList,
    clickAnim
}: Props) => {
    function changeProject (index:number) {
        clickAnim();
        setTimeout(() => updateIndex(index), 800)
    }

    const projects = projectsList.map(project => 
        <div className={(index == project.id)?"projectSelected":"projectSide"} onClick={() => changeProject(project.id)} key={project.id.toString()}>

            <div className="overviewTopBorder"/>
            <h4>{project.title}</h4>
            <div className="overviewBotBorder"/>

        </div>
        );

    return(
        <div className="projectsSidebar">
            {projects}
        </div>
    );
}

export default ProjectSidebar;
