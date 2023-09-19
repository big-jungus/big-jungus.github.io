import "./css/stylesHome.css"

const email = "/images/icons/email.svg";
const linkedin = "/images/icons/linkedin.svg";
const resume = "/images/icons/resume.svg";

function Contact(){
    return(
        <div className="contactBackground">
            <div className="anchor" id="contact"/>
            <h1 className="sectionHeading">CONTACT</h1>

            <div className="contactImagesContainer">
                <a href="mailto: matthewjung1010@gmail.com" target="_blank">
                    <img className="contactImage links email" src={email} width={110} height={110}/>
                </a>
                <a href="https://www.linkedin.com/in/matthewjung1010/" target="_blank">
                    <img className="contactImage " src={linkedin}/>
                </a>
                <a href="Resume - Matthew Jung.pdf" target="_blank">
                    <img className="contactImage " src={resume}/>
                </a>
            </div>
        </div>
    );
}

export default Contact;