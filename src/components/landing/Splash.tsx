import CountUp from "react-countup";
import { redirect } from "react-router-dom";

import "./css/animation.css"
import "./css/stylesHome.css"
import "./css/stylesSplash.css"

const Splash = () => {

    return(
        <div className="splashBase" onAnimationEnd={() => redirect("/home")}>
            <h1 className="h1Text">MATTHEW JUNG</h1>
            <div className="centerLine" />
            <h2 className="h2Text">GAME DEVELOPER</h2>
            <div className="leftDot" />
            <div className="rightDot" />

            <div className="progressBar" />
            <h4 className="loadingText"></h4>
            <h3 className="progressText"><CountUp start={0} end={100} duration={2.4} delay={1.75}/></h3>
        </div>
    );
}

export default Splash;