import "../../stylesheets/AboutMe/SkillList.css";
import Skill from "./Skill";
import htmlImg from "../../img/symbols/html5-symbol.png";
import cssImg from "../../img/symbols/css-symbol.png";
import javaScriptImg from "../../img/symbols/javascript-symbol.png";
import reactImg from "../../img/symbols/react-symbol.png";
import netFramework from "../../img/symbols/net-framework-symbol.png";
import cSharp from "../../img/symbols/cSharp-symbol.png";
import enterpriseArchitectImg from "../../img/symbols/enterprise-architect-symbol.png";
import figmaImg from "../../img/symbols/figma-symbol.png";
import trelloImg from "../../img/symbols/trello-symbol.png";

function SkillList(){
    return(
        <div className="skill-list-container">
            <div className="technologies-skill-list-container">
                <h3 className="h3-title">Tecnologías</h3>
                <div className="skills">
                    <Skill title="HTML" img={htmlImg}/>
                    <Skill title="CSS" img={cssImg}/>
                    <Skill title="JavaScript" img={javaScriptImg}/>
                    <Skill title="React" img={reactImg}/>
                    <Skill title=".NET Framework" img={netFramework}/>
                    <Skill title="C Sharp" img={cSharp}/>
                </div>
            </div>

            <div className="design-skill-list-container">
                <h3 className="h3-title">Planeamiento y Diseño</h3>
                <div className="skills">
                    <Skill title="Enterprise Architect" img={enterpriseArchitectImg}/>
                    <Skill title="Figma" img={figmaImg}/>
                    <Skill title="Trello" img={trelloImg}/>
                </div>
            </div>
        </div>
    );
}

export default SkillList;