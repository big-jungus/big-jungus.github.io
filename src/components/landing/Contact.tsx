import "./css/stylesHome.css"

import email from "/images/icons/email.svg";
import linkedin from "/images/icons/linkedin.svg";
import resume from "/images/icons/resume.svg";

function Contact(){
    return(
        <div className="contactBackground">
            <div className="anchor" id="contact"/>
            <h1 className="sectionHeading">CONTACT</h1>

            <a>
                <img className="links" src={email} width={110} height={110}/>
            </a>
            <a>
                <img className="links" src={linkedin}/>
            </a>
            <a>
                <img className="" src={resume}/>
            </a>
        </div>
    );
}

export default Contact;