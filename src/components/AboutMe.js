import "../stylesheets/AboutMe.css";
import Introduction from "./AboutMe/Introduction";
import SkillList from "./AboutMe/SkillList";

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