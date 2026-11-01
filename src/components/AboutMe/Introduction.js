import "../../stylesheets/AboutMe/Introduction.css";
import santiImg from "../../img/santi.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={santiImg}></img>
            <div className="text-intro-container">
                <p>
                My name is Santiago Nuñez Selem, I'm 23 years old, and I graduated
                as an IT Analyst. I'm currently in my fourth year of the Systems
                Engineering degree, and I work as a CRM Developer at 'Banco Hipotecario'.
                </p>
            </div>
        </div>
    );
}

export default Introduction;