import "./css/stylesHome.css"

import email from "/images/icons/email.svg";
import linkedin from "/images/icons/linkedin.svg";
import resume from "/images/icons/resume.svg";

function Contact(){
    return(
        <div className="contactBackground">
            <div className="anchor" id="contact"/>
            <h1 className="sectionHeading">Let's keep in contact!</h1>


            <div className="contactBody">
                <p>You can best reach me at <a href="mailto: matthewjung1010@gmail.com" target="_blank">matthewjung1010@gmail.com</a>
                    , or at my <a href="mailto: matthewjung1010@gmail.com" target="_blank">LinkedIn</a>!
                    </p>

                <div className="contactImagesContainer">
                    <a href="mailto: matthewjung1010@gmail.com" target="_blank">
                        <img className="contactImage links email" src={email} width={110} height={110}/>
                    </a>
                    <a href="https://www.linkedin.com/in/matthewjung1010/" target="_blank">
                        <img className="contactImage " src={linkedin}/>
                    </a>
                    <a href="Matthew Jung - Resume.pdf" target="_blank">
                        <img className="contactImage " src={resume}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;