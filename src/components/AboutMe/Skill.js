import "../../stylesheets/AboutMe/Skill.css";
function Skill( {title,img}){
    return(
        <div className="skill-container">
            <img src={img} className={title === "TypeScript" ? "skill-typescript" : undefined}/>
            <p>{title}</p>
        </div>
    );
}

export default Skill;