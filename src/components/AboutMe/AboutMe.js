import "../../stylesheets/AboutMe/AboutMe.css";
import Introduction from "./Introduction";
import SkillList from "./SkillList";

function AboutMe(){
    return(
        <>
            <h2 className="title-section">About Me</h2>
            <div className="aboutMe-container">
                
                <Introduction/>
                
                <SkillList/>
                
            </div>
        </>
    );
}

export default AboutMe;