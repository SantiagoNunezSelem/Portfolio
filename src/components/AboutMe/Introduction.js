import "../../stylesheets/AboutMe/Introduction.css";
import santiImg from "../../img/santi.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={santiImg}></img>
            <div className="text-intro-container">
                <p>
                My name is Santiago Nuñez Selem, I am 21 years old, and I am currently 
                in my third year of the Bachelor's Degree in Systems. I am working as 
                a .NET and React Developer at 'Remoting Coders'.
                </p>
            </div>
        </div>
    );
}

export default Introduction;