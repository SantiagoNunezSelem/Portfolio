import "../../stylesheets/AboutMe/Introduction.css";
import santiImg from "../../img/santi.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={santiImg}></img>
            <div className="text-intro-container">
                <p>
                My name is Santiago Nuñez Selem, I'm 22 years old, and I'm currently 
                in my third year of the Bachelor's Degree in Systems. I work as 
                a CRM Developer at 'Banco Hipotecario'.
                </p>
            </div>
        </div>
    );
}

export default Introduction;