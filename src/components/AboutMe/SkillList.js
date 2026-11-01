import "../../stylesheets/AboutMe/SkillList.css";
import Skill from "./Skill";
import javaScriptImg from "../../img/symbols/javascript-symbol.png";
import typeScriptImg from "../../img/symbols/typescript.png";
import reactImg from "../../img/symbols/react-symbol.png";
import netFramework from "../../img/symbols/net-framework-symbol.png";
import cSharp from "../../img/symbols/cSharp-symbol.png";
import sqlServerImg from "../../img/symbols/microsoft-sql-server-symbol.png";
import powerPlatformImg from "../../img/symbols/power-platform-symbol.png";
import jiraImg from "../../img/symbols/jira-symbol.svg";
import projectImg from "../../img/symbols/microsoft-project-symbol.webp";
import enterpriseArchitectImg from "../../img/symbols/enterprise-architect-symbol.png";
import figmaImg from "../../img/symbols/figma-symbol.png";
import trelloImg from "../../img/symbols/trello-symbol.png";

function SkillList(){
    return(
        <div className="skill-list-container">
            <div className="technologies-skill-list-container">
                <h3 className="h3-title">Technologies</h3>
                <div className="skills">
                    <Skill title="C Sharp" img={cSharp}/>
                    <Skill title=".NET Framework" img={netFramework}/>
                    <Skill title="React" img={reactImg}/>
                    <Skill title="JavaScript" img={javaScriptImg}/>
                    <Skill title="TypeScript" img={typeScriptImg}/>
                    <Skill title="SQL Server" img={sqlServerImg}/>
                    <Skill title="Power Platform" img={powerPlatformImg}/>
                </div>
            </div>

            <div className="design-skill-list-container">
                <h3 className="h3-title">Planning and Design</h3>
                <div className="skills">
                    <Skill title="Jira" img={jiraImg}/>
                    <Skill title="Project" img={projectImg}/>
                    <Skill title="Enterprise Architect" img={enterpriseArchitectImg}/>
                    <Skill title="Figma" img={figmaImg}/>
                    <Skill title="Trello" img={trelloImg}/>
                </div>
            </div>
        </div>
    );
}

export default SkillList;