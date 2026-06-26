import "./css/stylesHome.css"
import "../../pages/ProjectPage.css"

function Contact(){
    return(
        <div className="contactBackground">
            <div className="anchor" id="contact"/>
            <h1 className="sectionHeading">CONTACT</h1>

            <div className="contactBody">
                <p> Thanks for checking out my work! I'd love to stay in touch with you, you can best reach me through my email
                    at <a className="contactLink" href="mailto:matthewjung1010@gmail.com" target="_blank">matthewjung1010@gmail.com</a>.
                </p>

                <footer className="projectPageFooter">
                    <a href="/Matthew Jung - Resume.pdf" target="_blank" rel="noreferrer" className="footerLink">RESUME</a>
                    <span className="footerDivider">·</span>
                    <a href="mailto:matthewjung1010@gmail.com" className="footerLink">EMAIL</a>
                    <span className="footerDivider">·</span>
                    <a href="https://www.linkedin.com/in/matthewjung1010/" target="_blank" rel="noreferrer" className="footerLink">LINKEDIN</a>
                </footer>
            </div>
            <div className="padding"/>
        </div>
    );
}

export default Contact;
