import "../../stylesheets/AboutMe/Introduction.css";
import santiImg from "../../img/santi.jpg";

function Introduction(){
    return(
        <div className="intro-container">
            <img src={santiImg}></img>
            <div className="text-intro-container">
                <p>
                Me llamo Santigo Nuñez Selem, tengo 20 años y actualmente me encuentro 
                finalizando el segundo año de la carrera Licenciatura en Sistemas. Durante 
                este periodo aprendí muchas cosas, entre las cuales se encuentran:
                </p>
            </div>
        </div>
    );
}

export default Introduction;