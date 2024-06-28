import "./css/stylesHome.css"

function Contact(){
    return(
        <div className="contactBackground">
            <div className="anchor" id="contact"/>
            <h1 className="sectionHeading">Let's keep in contact!</h1>


            <div className="contactBody">
                <p> Thanks for checking out my work! I'd love to stay in touch with you, you can best reach me through my email 
                    at <a className="contactLink" href="mailto: matthewjung1010@gmail.com" target="_blank">matthewjung1010@gmail.com</a>.
                    </p>

                    <p><a href="Matthew Jung - Resume.pdf" target="_blank" className="contactLink">RESUME</a> / <a href="mailto: matthewjung1010@gmail.com" target="_blank" className="contactLink">EMAIL</a> / <a href="https://www.linkedin.com/in/matthewjung1010/" target="_blank" className="contactLink">LINKEDIN</a></p>
            </div>
            <div className="padding"/>
        </div>
    );
}

export default Contact;