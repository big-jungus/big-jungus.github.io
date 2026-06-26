import "./css/stylesHome.css"
import "./css/experience.css"

type Job = {
    company: string;
    url: string;
    role: string;
    date: string;
    tools: string;
    bullets: string[];
};

const jobs: Job[] = [
    {
        company: "SAIC",
        url: "https://www.saic.com",
        role: "Game Programming Intern",
        date: "June 2023 - August 2023",
        tools: "Unreal, Git, Blueprints, C++",
        bullets: [
            "Confidential project: a realistic turn-based wargame based on a near-future scenario.",
            "Focused on developing the multiplayer framework and implementing all UI into Unreal including menus, character selection, and HUD.",
            "Worked closely with two engineers to incorporate live Matlab generated data into the game.",
            "Presented to key military personnel, exceeding stakeholder expectations.",
        ],
    },
];

function Experience() {
    return (
        <div className="experienceBackground">
            <div className="anchor" id="experience"/>
            <h1 className="sectionHeading experienceHeading">WORK EXPERIENCE</h1>

            {jobs.map((job, i) => (
                <div className="expRow" key={i}>
                    <div className="expInfo">
                        <h2
                            className="expCompany"
                            onClick={() => window.open(job.url, "_blank")}
                        >
                            {job.company}
                        </h2>
                        <span className="expRole">{job.role}</span>
                        <span className="expDate">{job.date}</span>
                        <span className="expTools">{job.tools}</span>
                    </div>

                    <ul className="expBullets">
                        {job.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="padding"/>
        </div>
    );
}

export default Experience;
