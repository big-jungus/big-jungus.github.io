import { useParams, Link } from "react-router-dom";
import projectsList from "../data/projects";
import "../components/landing/css/stylesHome.css";
import "./ProjectPage.css";

const ProjectPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projectsList.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="projectPageContainer">
                <div className="projectPageContent">
                    <h1>Project not found.</h1>
                    <Link to="/" className="backLink">← Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="projectPageContainer">
            <div className="projectPageContent">
                <Link to="/" className="backLink">← Back to Home</Link>

                <div className="projectPageHeader">
                    <h1 className="projectPageTitle">
                        {project.title}
                    </h1>
                </div>

                <div className="projectPageMeta">
                    <span>{project.role}</span>
                    <span className="metaDivider">·</span>
                    <span>{project.teamsize}</span>
                    {project.engine !== project.teamsize && (
                        <>
                            <span className="metaDivider">·</span>
                            <span>{project.engine}</span>
                        </>
                    )}
                </div>

                {!project.images && (
                    <div className="projectPageShort">
                        {project.short.split("\n\n").map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                )}

                {project.images && (
                    <div className="projectGalleryLayout">
                        <div className="galleryText">
                            {project.short.split("\n\n").map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                        <div className="galleryImages">
                            {project.images.map((src, i) => (
                                <img key={i} src={src} className="galleryImage" alt={`${project.title} screenshot ${i + 1}`} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="projectPageBody">
                    {project.blocks?.map((block, i) => (
                        <div
                            className={`projectBlock ${i % 2 === 0 ? "blockEven" : "blockOdd"}`}
                            key={i}
                        >
                            <h2 className="blockTitle">{block.title}</h2>

                            <div className="blockSubsections">
                                {block.subsections.map((sub, j) => (
                                    <div className="blockSubsection" key={j}>
                                        <div className="blockText">
                                            {sub.text.split("\n\n").map((para, k) => (
                                                <p className="blockDescription" key={k}>
                                                    {para.split("\n").map((line, l, arr) => (
                                                        <span key={l} className={line.startsWith("•") ? "blockBulletLine" : undefined}>
                                                            {line}{l < arr.length - 1 && <br />}
                                                        </span>
                                                    ))}
                                                </p>
                                            ))}
                                        </div>
                                        {sub.image && (
                                            <img
                                                src={sub.image}
                                                className="blockImage"
                                                alt={block.title}
                                                style={sub.imageMaxWidth ? { flex: `0 0 ${sub.imageMaxWidth}`, maxWidth: sub.imageMaxWidth } : undefined}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="projectPageFooter">
                    <a href="/Matthew Jung - Resume.pdf" target="_blank" rel="noreferrer" className="footerLink">RESUME</a>
                    <span className="footerDivider">·</span>
                    <a href="mailto:matthewjung1010@gmail.com" className="footerLink">EMAIL</a>
                    <span className="footerDivider">·</span>
                    <a href="https://www.linkedin.com/in/matthewjung1010/" target="_blank" rel="noreferrer" className="footerLink">LINKEDIN</a>
                </footer>
            </div>
        </div>
    );
};

export default ProjectPage;
