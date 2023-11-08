import CountUp from "react-countup";
import "./css/animation.css"
import "./css/stylesHome.css"
import "./css/stylesSplash.css"

type Props = {
    setSplash: (flag: boolean) => void,
}

const Splash = ({
    setSplash,
}: Props) => {
    
    return(
        <div className="splashBase" onAnimationEnd={() => setSplash(true)}>
            <div className="splashWrapper">
                <div className="centerLine" />
                <h1 className="h1Text">MATTHEW JUNG</h1>
                <div className="devLine"/>
                <h2 className="h2Text">GAME DEVELOPER</h2>

                <div className="progressWrapper">
                    <div className="progressBar" />
                    <h3 className="progressText"><CountUp start={0} end={100} duration={2.45} delay={1.85}/></h3>
                </div>    
            </div>
        </div>
    );
}

export default Splash;