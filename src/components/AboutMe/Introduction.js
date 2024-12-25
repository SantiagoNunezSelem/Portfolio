import "../../stylesheets/AboutMe/Introduction.css";
import santiImg from "../../img/santi.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={santiImg}></img>
            <div className="text-intro-container">
                <p>
                Me llamo Santigo Nuñez Selem, tengo 21 años y actualmente me encuentro 
                cursando el tercer año de la carrera Licenciatura en Sistemas. Estoy
                trabajando como .NET y React Developer en Remoting Coders.
                </p>
            </div>
        </div>
    );
}

export default Introduction;